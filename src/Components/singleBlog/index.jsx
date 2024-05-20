import React, { useEffect, useState } from 'react'
import Banner from '../banner'
import Sidebar from '../sidebar'
import blogData from '../../api/blogdata'
import { UserOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';


const SingleBlog = () => {
   const [data , setData] = useState(null)
    const {id} = useParams()
    const numericId = Number(id)
   
   useEffect(()=>{
    const FoundData = blogData.find(item => item.id === numericId);
    setData(FoundData)
    
  },[id])

  const toNewBlog =()=>{
    window.location.href = `/singleBlog/${numericId+1}`
  }
  return (
    <div>
      <Banner title="Single Blog"/>
        <div className='grid md:grid-cols-4 min-h-[300px]'>
          {
            data && (
              <div className='col-span-3 flex flex-col p-10'> 

               <img src={data.image} alt='image'/>
                    <h1 className='mt-4 mb-2 font-bold hover:text-blue-600'>{data.title}</h1>
                    <p className='mb-2'><UserOutlined/> {data.author}</p>
                    <p>  Publish : { data.published_date}</p>
                    <p className='text-gray-600'>{data.content}</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Alias iste voluptates ut veniam iure autem mollitia fuga consectetur ad, ea explicabo expedita animi
                       ipsa deleniti vel ex, numquam facere eos?
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis reprehenderit veniam iste aspernatur quae ex similique, cumque libero ab deleniti beatae porro voluptate, nostrum consequuntur repellat assumenda culpa et.
                       
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Alias iste voluptates ut veniam iure autem mollitia fuga consectetur ad, ea explicabo expedita animi
                       ipsa deleniti vel ex, numquam facere eos?
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis reprehenderit veniam iste aspernatur quae ex similique, cumque libero ab deleniti beatae porro voluptate, nostrum consequuntur repellat assumenda culpa et.
                       
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Alias iste voluptates ut veniam iure autem mollitia fuga consectetur ad, ea explicabo expedita animi
                       ipsa deleniti vel ex, numquam facere eos?
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis reprehenderit veniam iste aspernatur quae ex similique, cumque libero ab deleniti beatae porro voluptate, nostrum consequuntur repellat assumenda culpa et.
                       
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Alias iste voluptates ut veniam iure autem mollitia fuga consectetur ad, ea explicabo expedita animi
                       ipsa deleniti vel ex, numquam facere eos?
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis reprehenderit veniam iste aspernatur quae ex similique, cumque libero ab deleniti beatae porro voluptate, nostrum consequuntur repellat assumenda culpa et.
                       
                    </p>

                      <Button className='mt-5 font-bold text-large w-block' type='primary' onClick={toNewBlog}>NEXT BLOG</Button>
              </div>
            )
          }
          <div>
          <Sidebar/>
          </div>
        </div>
    </div>
  )
}

export default SingleBlog
