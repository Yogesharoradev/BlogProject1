import { Button, Input } from 'antd';
import React from 'react';
import { 
  DiscordOutlined, 
  FacebookOutlined, 
  TwitterOutlined, 
  CopyrightOutlined, 
  HeartFilled 
} from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='min-h-[300px] bg-slate-950'>
      <div className='grid md:grid-cols-6 sm:grid-cols-2 gap-5 text-white p-10 sm:text-center'>
        {/* Category Sections */}
        {['Category', 'Apples', 'Cherry', 'Business'].map((category, index) => (
          <div key={index}> 
            <h1 className='font-bold text-medium'>{category}</h1>
            <ul className='flex flex-col gap-4 mt-3 text-gray-500'>
              {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, idx) => (
                <li key={idx}>
                  <a href='#'>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscription Section */}
        <div className="col-span-2 text-start flex flex-col gap-3">
          <h1 className='font-bold'>Subscribe for Updates</h1>
          <div className='flex gap-2'>
            <Input placeholder='Email' className='flex-grow' />
            <Button type='primary'>Subscribe</Button>
          </div>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae minus praesentium possimus quasi do.
          </p>
        </div>
        
        {/* Footer Bottom Section */}
        <div className='md:col-span-6 sm:col-span-1 p-3 border-t-2 border-gray-500 flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-400'>
              <CopyrightOutlined /> Copyright 2024 Lorem Inc. All rights Reserved
            </p>
            <p className='text-gray-400 text-start sm:text-center'>
              Made by <HeartFilled className='hover:text-red-700' /> Yogesh
            </p>
          </div>
          <div className='flex gap-2 mt-3'>
            <button><FacebookOutlined className='text-xl hover:text-orange-400' /></button> 
            <button><TwitterOutlined className='text-xl hover:text-orange-400' /></button> 
            <button><DiscordOutlined className='text-xl hover:text-orange-400' /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
