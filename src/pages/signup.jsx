import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { LockOutlined, UserOutlined, MailOutlined, GoogleOutlined } from '@ant-design/icons';

const { Option } = Select;

const Signup = () => {
   const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try{

      const user = await axios.post("https://blogprojbackend.onrender.com/auth/signup" , values , {credentials : true})
      console.log(user)
      message.success("we are redirecting you to login")
      navigate("/login")
      setLoading(true);
    }catch(err){
      message.error(err.response.data.message || err.message)
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = "https://blogprojbackend.onrender.com/auth/google";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <Form
          name="signup"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <hr/>
        <h1 className="text-center font-semiBold">Or</h1>
        <hr/>

        <div className="flex justify-center mt-4">
          <Button
            type="default"
            icon={<GoogleOutlined />}
            className="w-full"
            onClick={handleGoogleSignup}
          >
            Sign Up with Google
          </Button>
        </div>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <Button onClick={()=>navigate("/login")} type='primary' className='bg-blue-500'>Login</Button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
