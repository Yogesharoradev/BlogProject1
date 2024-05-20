import React, { useState } from 'react'
import blogData from "../../api/blogdata"
import { Card } from "antd";
import { Link} from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import Sidebar from '../sidebar';


const BlogPage = (id) => { 

  const [currentPage ,  setcurrentPage] = useState(1);
  const [selectedCategory , setselectedCategory] = useState(null)
  const pageSize = 12

  const onChange =(page)=>{
        setcurrentPage(page)
  }

  const Category=(category)=>{
        setselectedCategory(category)
        setcurrentPage(1)
  }

  const FilterBlogs = selectedCategory ? 
                    blogData.filter(data => data.category === selectedCategory)
                         : blogData
    

     
  return (
    <div>
        <div className='md:flex justify-center md:gap-20 items-center shadow-medium p-4 border border-b-4 flex gap-4'>
           <button className='font-semibold hover:text-orange-400 border border-b-8 px-3 rounded' onClick={()=>Category(null)}>All</button>
           <button className='font-semibold hover:text-orange-400 border border-b-8 px-3 rounded' onClick={()=>Category("Startups")}>Startups</button>
           <button className='font-semibold hover:text-orange-400 border border-b-8 px-3 rounded' onClick={()=>Category('Security')}>Security</button>
           <button className='font-semibold hover:text-orange-400 border border-b-8 px-3 rounded' onClick={()=>Category('AI')}> AI</button>
           <button className='font-semibold hover:text-orange-400 border border-b-8 px-3 rounded' onClick={()=>Category(' Fintech')}>Tech</button>
          </div>

        <div className='flex flex-col lg:flex-row gap-12 '>
         <div  className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
             {
                FilterBlogs.slice((currentPage-1)*pageSize, currentPage * pageSize).map((data , idx)=>(
             <Link to={`/singleBlog/${data.id}`} key={idx}>
               <div>
               
                <Card className='hover:border-2 border-b-lime-500'>
                  <img src={data.image} alt='image'/>
                    <h1 className='mt-4 mb-2 font-bold hover:text-blue-600'>{data.title}</h1>
                    <p className='mb-2'><UserOutlined/> {data.author}</p>
                    <p>  Publish : { data.published_date}</p>
                </Card>

               </div>
             </Link>
                 ))
             }
            </div>

            <div >
                 <Sidebar/>
             </div>
        </div>

            <div className='mt-3 p-4'>
             <Pagination showQuickJumper defaultPageSize={pageSize} onChange={onChange} total={blogData.length}  className='text-center mb-4' />
             </div>
    </div>
  )
}

export default BlogPage
