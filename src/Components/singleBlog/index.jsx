import React, { useEffect, useState } from 'react';
import { UserOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button, Input, List, message, Avatar, Spin } from 'antd';
import AppLayout from '../../pages/appLayout';
import axios from 'axios';
import moment from 'moment';

const SingleBlog = () => {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);
  const [save , setSave] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://blogprojbackend.onrender.com/posts/${id}`, { withCredentials: true });
        setData(response.data.data);
        setLikes(response.data.data.likes || 0);
        setLoading(false);
      } catch (err) {
        console.error(err);
        message.error("Something went wrong while fetching the blog.");
        setLoading(false);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('https://blogprojbackend.onrender.com/get');
        setRecentPosts(response.data.data || []);
      } catch (err) {
        console.error(err);
        message.error("Something went wrong while fetching recent posts.");
      }
    };

    fetchData();
    fetchRecentPosts();
  }, [id]);

  const SavedButton =(id)=>{
    setSave(!save)
    if(!save){
      message.success("Saved to your blogs")
    }
  }

  const handleAddComment = () => {
    if (commentInput) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <AppLayout>
      <div className="flex items-center justify-center min-h-screen p-3">
        <div className='grid gap-8 w-9/12 max-w-max'>
          {data ? (
            <div className='h-auto w-full'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-4 px-3 py-5 items-center'>
                  <Avatar src={data.authorAvatar} icon={<UserOutlined />} />
                  <div className='flex flex-col'>
                    <h1>{data.author ||  "You"}</h1>
                    <p>{moment(data.createdAt).format('DD MMMM YYYY')} • {data.readTime || 5} min</p>
                  </div>
                </div>
                <Button onClick={()=>SavedButton(data._id)}>
                  {
                    save ? "Saved" : "Save"
                  }
                </Button>
              </div>

              <div className='overflow-hidden rounded-lg'>
                <img
                  src={data.image}
                  className='w-full h-60 object-cover rounded-t-lg'
                  alt={data.title}
                />
              </div>
              <hr />
              <div className='flex flex-col p-5'>
                <Link to={`/posts/${data._id}`} className='hover:text-blue-700'>
                  <h1 className='font-bold text-3xl'>{data.title}</h1>
                </Link>
                <p className='p-2'>{data.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, sit ab! Asperiores commodi est excepturi? Necessitatibus, quod quasi sint pariatur non, dolores atque illum dicta obcaecati eos hic ad blanditiis.
                Sint, animi. Consequuntur saepe, consequatur sunt hic architecto atque voluptas repellat, sed excepturi corrupti placeat iste explicabo unde similique aspernatur vero at itaque aliquam maiores. Deleniti hic facere distinctio libero!
                Quisquam officia in obcaecati totam! Reiciendis blanditiis, ducimus quidem mollitia animi numquam itaque natus quas quod aut cupiditate, voluptas molestiae recusandae voluptate pariatur minima obcaecati repudiandae debitis iure nesciunt fugit.
                Vel nesciunt explicabo impedit, facilis at tempore illo, accusantium nulla adipisci ut fuga ipsum! Architecto, tempore ullam. Dolor itaque illum natus in rem, praesentium consequuntur quia, non reprehenderit accusamus sed.
                Quo adipisci, esse, doloribus et molestiae veniam maxime ipsa nulla impedit eveniet voluptate reiciendis asperiores consequuntur magni tenetur. Animi reiciendis laudantium et nemo, cupiditate voluptatem at blanditiis magni officia ipsa.
                Rem, esse aliquam! Beatae incidunt rerum ad voluptas, hic non, libero officiis quam vitae quia veniam ducimus at vero. Animi natus est omnis incidunt qui eos accusantium dolorem asperiores doloribus.
                Qui nesciunt laudantium quam iste itaque at nobis id, necessitatibus repudiandae suscipit minima fugit magni pariatur architecto obcaecati neque aperiam blanditiis voluptate quia. Dolor, fugiat in possimus eaque sit excepturi.
                Dolor tenetur autem optio ipsa aliquam ipsum pariatur delectus ducimus praesentium et quo obcaecati laborum nisi quod placeat, labore facilis, expedita repudiandae reprehenderit maiores! Dolorem, minima delectus? Rerum, inventore porro?
                Numquam eos ullam voluptatum magnam, perferendis sapiente voluptates corporis error excepturi pariatur, facilis, minima ab nobis velit reiciendis. Quisquam ratione consequuntur dolorum quod quis repudiandae nesciunt doloremque veritatis fugit magnam.
                Pariatur accusantium porro eveniet at ab aperiam deleniti, qui dolorem molestiae, quibusdam magni. Provident harum at error corporis reiciendis omnis? Dolore itaque quaerat necessitatibus similique hic laborum alias quam temporibus.</p>
              </div>

              <div className='bottom-0 left-0 right-0'>
                <hr />
                <div className='flex justify-between items-center p-3'>
                  <div className='flex gap-4'>
                    <h1>{data.views} views</h1>
                    <h2>{comments.length} comments</h2>
                  </div>
                  <div>{likes} ♥</div>
                </div>
              </div>

              <div className="flex items-center mt-5">
                <Button type="text" onClick={handleLike} icon={<LikeOutlined />} className="mr-2">
                  Like {likes}
                </Button>
              </div>

              <h2 className='mt-5 mb-2 font-bold'>Comments</h2>
              <Input
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder='Add a comment...'
                className='mb-3'
              />
              <Button type="primary" onClick={handleAddComment}>Submit</Button>

              <List
                className="mt-3"
                header={`${comments.length} Comments`}
                bordered
                dataSource={comments}
                renderItem={comment => (
                  <List.Item>{comment}</List.Item>
                )}
              />

              <hr />
              <div className='p-4 mt-5'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-xl'>Recent Posts</h1>
                  <Button onClick={() => navigate("/")}>See all</Button>
                </div>

                <div className="flex gap-4 mt-3">
                  {recentPosts.slice(0, 3).map(post => ( // Display only the first three posts
                    <div key={post._id} className="flex items-center ">
                      <Link to={`/posts/${post._id}`}>
                    
                      <div className='flex flex-col'>

                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-80 h-40 object-cover rounded-lg"
                        />
                      <div className='mt-4'>
                        <h2 className="font-bold hover:text-blue">{post.title}</h2>
                        <hr/>
                        <p className='mt-7'>{post.likes} ♥ | {post.comments.length} comments</p>
                      </div>
                        </div>
                        </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p>No blog available.</p>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default SingleBlog;
