import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({title , desc , extra}) => {
  return (
    <div className='bg-black text-white min-h-[300px]  '>
      <div className='flex flex-col justify-center items-center gap-3 '> 
      <h1 className='font-bold text-5xl mt-5 mb-3 mx-auto text-center'> {title}</h1>
      <p className='text-gray-300 mx-auto mb-5 lg:w-3/5 text-center'>{desc}
      </p>
      <Link to="/" className='font-semibold text-medium hover:text-orange-400'> Learn More <ArrowRightOutlined/> </Link>
      </div>
    </div>
  )
}

export default Banner
