import { useContext, useState } from 'react';
import { Button, List, Card, Typography, Modal, Form, Input, message, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import AppLayout from "../../pages/appLayout";
import moment from "moment";
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, { mutate } from 'swr';
import context from '../../lib/context';

const { Title } = Typography;
const { TextArea } = Input;

const fetcher = (url) => axios.get(url, { withCredentials: true }).then(res => res.data);

const Blog = () => {
  const [form] = Form.useForm(); // Move this line inside the Blog component
  const [showMyBlogs, setShowMyBlogs] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { session } = useContext(context); // Fetch session (author info)

  // Use SWR to fetch blogs
  const { data: myBlogs = [], error, isLoading } = useSWR("http://localhost:8080/blogsByAuthor", fetcher);

  const handleShowMyBlogs = () => setShowMyBlogs(true);
  const handleShowSavedBlogs = () => setShowMyBlogs(false);

  const deleteBlog = async (id) => {
    try {
      await axios.delete("http://localhost:8080/delete", { data: { id }, withCredentials: true });

      // Optimistically update the local data
      mutate("http://localhost:8080/blogsByAuthor", myBlogs.filter(blog => blog._id !== id), false);
      message.success("Blog deleted successfully");
    } catch (err) {
      message.error("Error deleting blog, please try again later.");
    }
  };

  const handleAddBlog = async (values) => {
    const randomImageUrl = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`; 
    const randomAvatarUrl = `https://avatars.dicebear.com/api/human/${Math.random().toString(36).substring(7)}.svg`;

    const newBlog = {
      title: values.title,
      subtitle: values.subtitle || "story",
      content: values.content,
      author: session.name || session.user.name,
      authorAvatar: randomAvatarUrl,
      createdAt: new Date(),
      readTime: 5,
      views: 0,
      comments: [],
      likes: 0,
      image: randomImageUrl || values.image || 'https://via.placeholder.com/150',
    };

    try {
      // Make API call to add blog
      const response = await axios.post("http://localhost:8080/addblog", newBlog, { withCredentials: true });
      
      // Optimistically add the new blog to the local data
      mutate("http://localhost:8080/blogsByAuthor");
      form.resetFields(); // Reset form fields after successful addition
      message.success('Blog added successfully!');
      setIsModalVisible(false);
    } catch (err) {
      message.error(err.response?.data?.message || 'Failed to add blog.');
    }
  };

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <AppLayout>
      <div className="p-10 min-h-[600px]">
        <Title level={2} className='text-center font-bold'>My Blogs</Title>
        <Button type="primary" onClick={handleShowMyBlogs} style={{ marginRight: '8px' }}>
          My Blogs
        </Button>
        <Button type="default" onClick={handleShowSavedBlogs}>
          Saved Blogs
        </Button>
        <Button type="primary" onClick={showModal} style={{ marginLeft: '16px' }}>
          Add Blog
        </Button>

        <Title level={3} style={{ marginTop: '20px' }}>
          {showMyBlogs ? 'Your Posted Blogs' : 'Saved Blogs'}
        </Title>

        {/* Blog list */}
        <div className='grid md:grid-cols-2 gap-8 p-3'>
          {showMyBlogs ? (
            isLoading ? (
              <p>Loading...</p> // Show loading state
            ) : (
              myBlogs?.length > 0 ? (
                myBlogs.map((post) => (
                  <div className='h-auto w-full' key={post._id}>
                    <Button onClick={() => deleteBlog(post._id)} className='text-right'>Delete</Button>
                    <Link to={`/posts/${post._id}`}>
                      <div className='overflow-hidden rounded-lg'>
                        <img
                          src={post.image}
                          className='w-full h-60 object-cover rounded-t-lg'
                          alt={post.title}
                        />
                      </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex gap-4 px-3 py-5 items-center justify-between'>
                          <Avatar src={post.authorAvatar} icon={<UserOutlined />} />
                          <div className='flex flex-col'>
                            <h1>{post.author?.name || "You"}</h1>
                            <p>{moment(post.createdAt).format('DD MMMM YYYY')} • {post.readTime} min read</p>
                          </div>
                        </div>
                      </div>

                      <div className='flex flex-col p-5'>
                        <h1 className='font-bold text-3xl'>{post.title}</h1>
                        <p className='p-2'>{post.content}</p>
                      </div>

                      <div className='bottom-0 left-0 right-0'>
                        <hr />
                        <div className='flex justify-between items-center p-3'>
                          <div className='flex gap-4'>
                            <h1>{post.views} views</h1>
                            <h2>{post.comments.length} comments</h2>
                          </div>
                          <div>{post.likes} ♥</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No blogs posted yet.</p>
              )
            )
          ) : (
            <p>No saved blogs available.</p>
          )}
        </div>

        {/* Modal for blog creation */}
        <Modal
          title="Add New Blog"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form layout="vertical" onFinish={handleAddBlog} form={form}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input the blog title!' }]}
            >
              <Input placeholder="Enter blog title" />
            </Form.Item>

            <Form.Item
              label="Content"
              name="content"
              rules={[{ required: true, message: 'Please input the blog content!' }]}
            >
              <TextArea rows={4} placeholder="Enter blog content" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AppLayout>
  );
};

export default Blog;
