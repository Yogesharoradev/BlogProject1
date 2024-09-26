import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from "moment"

const BlogPage = () => {
  const [posts, setPosts] = useState([]); // State to hold the fetched posts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://blogprojbackend.onrender.com/get", { withCredentials: true });
          setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run on mount

  return (
    <div className='min-h-screen bg-gray-200 flex justify-center'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-11/12 lg:w-8/12 max-w-full mt-8'>
        <h1 className='font-semibold text-2xl mb-4'>All Posts</h1>
        <div className='grid md:grid-cols-2 gap-8 p-3'>
          {posts.length > 0 ? (
            posts.map((post , idx) => (
              <div key={idx} className='h-auto w-full'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    src={post.image} // Assume your post object has an image property
                    className='w-full h-60 object-cover rounded-t-lg' // Responsive image
                    alt={post.title} // Alt text for accessibilit
                  />
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-4 px-3 py-5 items-center'>
                    <Avatar src={post.authorAvatar} icon={ <UserOutlined />} /> {/* Assume you have an avatar image */}
                    <div className='flex flex-col'>
                      <h1>{post.author || "User"}</h1>
                      <p>{moment(post.createdAt).format('DD MMMM YYYY')} • {post.readTime || 5} min</p> {/* Dynamically display date and read time */}
                    </div>
                  </div>
                  <button>Share</button>
                </div>
      
                <div className='flex flex-col p-5'>
                  <Link to={`/posts/${post._id}`} className='hover:text-blue-700'>
                    <h1 className='font-bold text-3xl'>{post.title}</h1> {/* Post title */}
                  </Link>
                  <p className='p-2'>{post.content}</p> {/* Post subtitle */}
                </div>

                <div className='bottom-0 left-0 right-0'>
                  <hr />
                  <div className='flex justify-between items-center p-3'>
                    <div className='flex gap-4'>
                      <h1>{post.views} views</h1>
                      <h2>{post.comments} comments</h2> {/* Comments count */}
                    </div>
                    <div>{post.likes} ♥</div> {/* Likes count */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p> // Fallback message when there are no posts
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
