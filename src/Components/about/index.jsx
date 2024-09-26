import React from 'react'
import Banner from '../banner'
import {Card} from "antd"
import Applayout from "../../pages/appLayout"

const About = () => {

  const authorData = [
    {
        img: "/images/user-01.png",
        Name: "Adrio David",
        position:"Director of Operations",
        published:"📃 12 Article Published"
    },
    {
      img: "/images/user-02.png",
      Name: "Rayna Mario",
      position:"Content Writer",
      published:"📃 8 Article Published"
   },
   {
    img: "/images/user-03.png",
    Name: "David Tac",
    position:"Head Of Marketing",
    published:"📃 5 Article Published"
    },
    {
      img: "/images/user-01.png",
      Name:"Mark Jacob",
      position:"Head of Marketing",
      published:"📃 5 Article Published"
    },
    
  

  ]
  return (
    <Applayout>
   <div>
    <div className='p-8 min-h-[400px]'>
    <div className='grid md:grid-cols-3 gap-3'>
        <div>
          <img src='/images/about.png' alt='aboutpic'/>
        </div>
        <div className='flex gap-2 flex-col col-span-2 p-8'>
          <h1 className='font-semibold text-orange-500 text-xl'>Who We Are</h1>
          <h1 className='text-4xl font-bold'>We Provide High Quality Articles & Blogs</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit debitis in dignissimos accusantium quis maxime unde ipsa omnis ad iusto explicabo excepturi tempore, quod, at minima maiores eos. Placeat.</p>
          <br/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quaerat delectus aliquam animi.</p>
         </div>
         </div>
         
         <div className='md:flex flex-col gap-5 mt-5 '>
          <h1 className='text-4xl font-bold mt-10 ml-10 sm:text-center mb-5' >Top Authors</h1>
            <hr className='w-6/5'/>
          <div className='md:flex md:gap-6 md:items-center md:justify-around md:p-5 '>
              {
                authorData.map((item , idx)=>(
                  <Card key={idx} className='border border-b-8 hover:border-b-blue-700'> 
                  <div className='flex md:flex-col gap-2 justify-center items-center'>
                      <img src={item.img} alt='auhtorpic' />
                      <h1 className='font-bold'>{item.Name}</h1>
                      <h2>{item.position}</h2>
                      <span>{item.published}</span>
                 </div>    
                  </Card> 
                ))
              }
          </div>
          </div>

    
    </div>
   </div>
   </Applayout>
  )
}

export default About
