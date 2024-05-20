import React from 'react'
import { Button, Input } from 'antd'
import { AppleOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

const Loginform = () => {
  return (
    <div className='md:block '>
       <div className='md:col-span-1 flex gap-6 flex-col mr-9 border-t-4 border-b-4 p-6 shadow-2xl bg-slate-100 mt-6'>
        
        <div className=''>
            <h1 className='text-xl mb-2'>Full Name</h1>
            <Input placeholder='Name' autoFocus/>
         </div> 
         <div className='text-xl mb-2'>
            <h1>Email Address</h1>
            <Input placeholder='Email'/>
         </div> 
         <div className='text-xl mb-2'>
            <h1>Subject</h1>
            <Input placeholder='Enter yourr Subject'/>
         </div> 
         <div className='text-xl mb-2'>
            <h1>Password</h1>
            <Input placeholder='password'/>
         </div> 
            <div>Already have an Account? <Button> Login </Button> </div>
         <Button className='text-white bg-blue-900 mt-4 w-4/5 '>Submit</Button>
                <hr></hr>
            <h1 className='text-center'>OR</h1>
                    <hr></hr>
         <div className='flex flex-col gap-3 '>
            <Button > <GoogleOutlined className='text-xl'/> Login with Google </Button>
            <Button>  <FacebookOutlined className='text-xl'/> Login with Facebook </Button>
            <Button> <AppleOutlined className='text-xl'/>  Login with Apple </Button>
         </div>
    </div>  
    </div>
  )
}

export default Loginform
