import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined, MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import context from '../lib/context';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const {setSession} = useContext(context)

  const onFinish =async  (values) => {
    try {
      const {data} = await axios.post("https://blogprojbackend.onrender.com/auth/login" , values , {withCredentials: true})
      setLoading(true);
      setSession(data)
      message.success("Login Successfully")
      navigate("/")
  
    } catch (err) {
      message.error(err.response?.data?.message || err.message)
    }
   
  };

  const handleGoogleLogin =async () => {
    window.location.href = "https://blogprojbackend.onrender.com/auth/google"; 
  };



  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
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
              Login
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
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
        </div>

        <p className="text-center mt-4">
          Don't have an account?{' '}
         <Button onClick={()=>navigate("/signup")} type='primary' className='bg-red-400'>Sign Up</Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
