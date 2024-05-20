import React from 'react'
import Banner from '../banner'
import BlogPage from '../Blogpage'


const Home = () => {
  return (
    <div>
      <Banner title="Welcome to my Blogs" 
               desc=" Start your Blog today and join a community of writers and readers who are passionalte about sharing their 
               stories and ideas . We offer everything you need to get started , from helpful tips and tutorials."
      />
            <BlogPage />

    </div>
  )
}

export default Home
