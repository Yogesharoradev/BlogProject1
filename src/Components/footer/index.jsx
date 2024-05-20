import { Button, Input } from 'antd'
import React from 'react'
import {  DiscordOutlined, FacebookOutlined, TwitterOutlined , CopyrightOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons'

const Footer = () => {
  return (
    <div className='min-h-[300px]  bg-slate-950'>
      <div className='grid  md:grid-cols-6 sm:grid-cols-2  gap-5 text-white p-10 sm:text-center'>
            <div> 
                <h1 className='font-bold text-medium'>Category</h1>
                <ul className='flex flex-col gap-4 mt-3 text-gray-500'>
                  <a href='#'> <li>News</li> </a> 
                  <a href='#'> <li>World</li> </a> 
                  <a href='#'> <li>Games</li> </a> 
                  <a href='#'> <li>References</li> </a> 
                </ul>
            </div>
            <div> 
                <h1 className='font-bold text-medium'>Apples</h1>
                <ul className='flex flex-col gap-4 mt-3 text-gray-500'>
                  <a href='#'> <li>Web</li> </a> 
                  <a href='#'> <li>Ecommerce</li> </a> 
                  <a href='#'> <li>Buisness</li> </a> 
                  <a href='#'> <li>Entertainment</li> </a> 
                  <a href='#'> <li>Portfolio</li> </a> 
                </ul>
            </div>
            <div> 
                <h1 className='font-bold text-medium'>Cherry</h1>
                <ul className='flex flex-col gap-4 mt-3 text-gray-500'>
                  <a href='#'> <li>Media</li> </a> 
                  <a href='#'> <li>Brochure</li> </a> 
                  <a href='#'> <li>Nonprofit</li> </a> 
                  <a href='#'> <li>Education</li> </a> 
                  <a href='#'> <li>Projects</li> </a> 
                </ul>
            </div>
            <div> 
                <h1 className='font-bold text-medium'>Business</h1>
                <ul className='flex flex-col gap-4 mt-3 text-gray-500'>
                  <a href='#'> <li>Infopreneur</li> </a> 
                  <a href='#'> <li>Personal</li> </a> 
                  <a href='#'> <li>Wiki</li> </a> 
                  <a href='#'> <li>Forum</li> </a> 
                </ul>
            </div>
            <div className="col-span-2 text-start flex flex-col gap-3">
               <h1 className='font-bold '> Subscribe for Updates</h1>
               <div className='flex gap-2'>
               <Input placeholder='Email' className='w-3/5'></Input>
               <Button> Subscribe</Button>
               </div>
               <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vitae minus praesentium possimus quasi do</p>
            </div>
          
            <div className=' md: flex md:col-span-6 sm:col-span-1 p-3 border-t-2 border-gray-500 items-center justify-between'>
                <div className= ' flex flex-col gap-4'>
                <p className='text-gray-400'><CopyrightOutlined/> Copyright 2024 Lorem Inc. All rights Reserved</p>
                <p className='text-gray-400 text-start sm:text-center'>Made by <HeartFilled className='hover:text-red-700'/> Yogesh</p>
                </div>
               <div className='gap-2 flex mr-24 sm:items-end'  >
               <button><FacebookOutlined className='text-xl  hover:text-orange-400'/></button> 
               <button><TwitterOutlined className='text-xl hover:text-orange-400'/></button> 
               <button><DiscordOutlined className='text-xl hover:text-orange-400'/></button>
                </div>
            </div>
           
      </div>
    </div>
  )
}

export default Footer
