import React from 'react'
import Banner from '../banner'
import { FaCss3 } from "react-icons/fa";
import { FaAudioDescription } from "react-icons/fa";
import { MdOutlineDesktopMac } from "react-icons/md";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { FiShare2 } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { Card } from 'antd';

const Services = () => {

  const serviceData = [
    {
        id:"1",
        icon:<FaAudioDescription/>,
        title: 'Refreshing Design',
        desc:"We enjoy working with clients , people for whom quality, service ,integrity and aesthtics "
    },
    {
      id:"2",
      icon: <FaCss3/>,
      title: 'Based on Tailwind CSS',
      desc:"We enjoy working with clients , people for whom quality, service ,integrity and aesthtics "
  },
  {
    id:"3",
    icon:< HiSquare3Stack3D />,
    title: '300+ Commponents',
    desc:"We enjoy working with clients , people for whom quality, service ,integrity and aesthtics "
},
{
  id:"4",
  icon:<MdOutlineDesktopMac/>,
  title: 'Speed Optimized',
  desc:"We enjoy working with clients , people for whom quality, service ,integrity and aesthtics "
},
{
  id:"5",
  icon:<FiShare2/>,
  title: 'Fully Customizable',
  desc:"We enjoy working with clients , people for whom quality, service ,integrity and aesthtics "
},
{
  id:"6",
  icon:<BiLike/>,
  title: 'Regular Updates',
  desc:"We enjoy working with clients , people for whom quality, service ,integrity and aesthtics "
},
]

  return (
    <div>
      <Banner title="Service Page"/>
      <div>
      <div className='text-center p-4'>
        <h1 className='text-orange-400 text-xl font-semibold'>Our Services</h1>
        <p className='text-4xl font-bold'> What We Offer</p>
        <p className='text-gray-700 mt-10'>There are many variations of passages of Lorem Ipsum available but the majority have suufered alternation in same form</p>
      </div>

      <div className='grid md:grid-cols-3 gap-10 mt-24 mb-24 p-10 '>
        {
          serviceData.map((data , idx)=>(
            <div key={idx} className="flex flex-col gap-4 shadow-2xl">
              <Card>
              <h1 className='text-6xl text-blue-700'>{data.icon}</h1>
              <h1 className='text-bold text-2xl'>{data.title}</h1>
              <p className='mt-3 text-gray-500'>{data.desc}</p>
              </Card>
              </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Services
