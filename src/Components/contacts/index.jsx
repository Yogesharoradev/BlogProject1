import React from 'react'
import Banner from '../banner'
import Loginform from '../loginform';


const Contact = () => {
  return (
    <div>
      <Banner title="Contact Page"/>
      <div className='grid md:grid-cols-3 justify-between items-center gap-12'>
        <img src="\images\contact.png" alt='photo' className='w-[900px] min-h-[600px] col-span-2 md:block hidden'></img>
                <Loginform/>    
           <div>     
        </div> 
      </div>
    </div>
  )
}

export default Contact
