import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import { CloudUploadOutlined } from '@ant-design/icons';
import AppLayout from "./appLayout";
import { useContext } from 'react';
import context from '../lib/context';


const { Option } = Select;

const NewBlog = () => {
  const [form] = Form.useForm();
  const {session} = useContext(context)

  const onFinish = async (values) => {
    try {
       const data = await axios.post('https://blogprojbackend.onrender.com/post', values , {withCredentials :true});
       console.log(data)
      message.success('Blog posted successfully!');
    } catch (error) {
      console.log(error);
      message.error('Failed to post blog.');
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hi.jpg')` }}
        >
          {/* Background image */}
        </div>
        <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">What's on your mind?</h1>

          <Form form={form} onFinish={onFinish} layout="vertical"  initialValues={{
             author: session && session?.user.name, 
            }}>
            <Form.Item
              label={<span className="text-lg font-semibold text-gray-700">Title</span>}
              name="title"
              rules={[{ required: true, message: 'Please enter a title' }]}
            >
              <Input placeholder="Blog title" className="rounded-lg border-gray-300" />
            </Form.Item>

            <Form.Item
              label={<span className="text-lg font-semibold text-gray-700">Category</span>}
              name="category"
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select placeholder="Select a category" className="rounded-lg">
                <Option value="Health">Health</Option>
                <Option value="Technology">Technology</Option>
                <Option value="Business">Business</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="text-lg font-semibold text-gray-700">Author</span>}
              name="author"
              rules={[{ required: true, message: 'Please enter author name' }]}
            >
              <Input placeholder="Author name" className="rounded-lg border-gray-300" readOnly />
            </Form.Item>

            <Form.Item
              label={<span className="text-lg font-semibold text-gray-700">Content</span>}
              name="content"
              rules={[{ required: true, message: 'Please enter the content' }]}
            >
              <Input.TextArea
                placeholder="Enter blog content"
                rows={4}
                className="rounded-lg border-gray-300"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-lg font-semibold text-gray-700">Tags</span>}
              name="tags"
            >
              <Select
                mode="tags"
                placeholder="Add tags"
                style={{ width: '100%' }}
                className="rounded-lg"
              >
                <Option value="Biotech">Biotech</Option>
                <Option value="Health">Health</Option>
                <Option value="Technology">Technology</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-2 text-xl flex justify-center items-center gap-2"
              >
                <CloudUploadOutlined /> Submit Blog
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </AppLayout>
  );
};

export default NewBlog;
