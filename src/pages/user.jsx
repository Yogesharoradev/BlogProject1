import React, { useContext } from 'react';
import { Card, Avatar, Typography } from 'antd';
import AppLayout from "./appLayout";
import context from '../lib/context'; // Adjust the import path based on your project structure

const { Title, Paragraph } = Typography;

const User = () => {
  // Fetch session (user info) from context
  const { session } = useContext(context);

  const randomAvatarUrl = `https://avatars.dicebear.com/api/human/${Math.random().toString(36).substring(7)}.svg`;
  return (
    <AppLayout>
      <div 
        className="p-10 flex justify-center items-center h-[600px]" 
        style={{ 
          backgroundImage: `url('/images/26102.jpg')`, // Replace with your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Full viewport height
        }}
      >
        <Card 
          style={{ 
            width: 300,
            borderRadius: '10px' 
          }}
          className='bg-gray-200 text-center'
        >
          <Avatar 
            size={100} 
            src={session?.avatar || randomAvatarUrl} 
            alt={session?.name} 
            style={{ margin: '0 auto' }} 
          />
          <Title level={4}>{session?.user?.name || session?.name}</Title>
          <Paragraph>{session?.user?.email || session?.email}</Paragraph>
        </Card>
      </div>
    </AppLayout>
  );
};

export default User;
