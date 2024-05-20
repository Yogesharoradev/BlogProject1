import React from 'react'
import blogData from '../../api/blogdata'
import { Card } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

const Sidebar = () => {
  return (
    <>
    <div className=' px-12 border border-l-3'>
        <h2 className='text-2xl font-semibold p-3 underline underline-offset-4'>Latest Blogs</h2>
      <div>
        {
            blogData.slice(1,5).map((data,idx)=>(
                    <Card key={idx} className='flex flex-col gap-2 w-[250px]'>
                       <h1 className='font-medium mb-2'> {data.title} </h1>
                       <button className='hover:text-blue-600'>Read More <ArrowRightOutlined/></button>
                    </Card>
            ))
        }
      </div>
    </div>


        <div className='px-12 border border-l-3'>
        <h2 className='text-2xl font-semibold p-3 underline underline-offset-4' >Popular Blogs</h2>
        <div>
        {
            blogData.slice(10,14).map((data,idx)=>(
                    <Card key={idx} className='flex flex-col gap-2 w-[250px]'>
                    <h1 className='font-medium mb-2 '> {data.title} </h1>
                    <button className='hover:text-blue-600'>Read More <ArrowRightOutlined/></button>
                    </Card>
            ))
        }
        </div>
        </div>
    </>
  )
}

export default Sidebar
