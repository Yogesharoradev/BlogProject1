import React from 'react'
import Banner from '../banner'
import BlogPage from '../Blogpage'
import AppLayout from '../../pages/appLayout'


const Home = () => {
  return (
    <AppLayout>
      
    <div>
      <Banner title="THE BOOK LOVER" 
               desc="Read All About it"
      />
            <BlogPage />

    </div>
    </AppLayout>
  )
}

export default Home
