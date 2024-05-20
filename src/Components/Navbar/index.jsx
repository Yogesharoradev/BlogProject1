import { BarsOutlined, DiscordOutlined, FacebookOutlined, TwitterOutlined, XOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loginform from '../loginform'

const Navbar = () => {

        const[barOpen , setbarOpen] = useState(true)
        const[loginform , setloginForm] = useState(false)

                const toggleButton = ()=>{
                     setbarOpen(!barOpen)
                }

                const openModal = ()=>{
                    setloginForm(true)
                }

                const handleOk = () => {
                    setloginForm(false);
                  };
                  const handleCancel = () => {
                    setloginForm(false);
                  };
    const NavItems = [
        {
            path:"/",
            link:"Home" 
        },
        {
            path:"/services",
            link:"Services" 
        },
        {
            path:"/about",
            link:"About" 
        } ,
        {
            path:"/blogs",
            link:"Blogs" 
        },
        {
            path:"/contact",
            link:"Contacts"
        }

    ]

  return (
    <header>
    <div className='p-4 bg-black text-white flex justify-around items-center'>
        <div>
            <a href='/' className="text-lg"> Design <span className='text-orange-600'>DK</span></a>
        </div>
        <div className=''>
        <ul className='md:flex gap-4 text-lg hidden'>
             {
                NavItems.map((items, idx)=>
               
                (
                    <li className='text-white ' key={idx}>
                        <NavLink to={items.path} className={({ isActive, isPending }) =>
                                     isPending ? "pending" : isActive ? "active" : "" }>
                                     {items.link}
                         </NavLink>
                    </li>
                ))
             }
                </ul>
        </div>
        <div className=' md:flex gap-4 hidden '>
               <button><FacebookOutlined className='text-2xl  hover:text-orange-400'/></button> 
               <button><TwitterOutlined className='text-2xl hover:text-orange-400'/></button> 
               <button><DiscordOutlined className='text-2xl hover:text-orange-400'/></button>
              <button className='bg-orange-500 text-white font-bold px-7 py-1 rounded-lg' onClick={openModal}>Signup 
              </button>
      
                {
                    loginform ? <Modal title="Login Form" 
                                open={loginform}
                                 onOk={handleOk} 
                                 onCancel={handleCancel}
                                 className='text-xl'
                                 >
                            <Loginform/> 
                    </Modal>: null
                }
             
        </div>   
        <div>
          <button className='md:hidden' onClick={toggleButton}>
            {
                barOpen ?
                     <XOutlined className='text-2xl  hover:text-orange-400'/> :  
                     <BarsOutlined className='text-2xl  hover:text-orange-400'/>
                
            }
           </button> 
        </div>
       </div>
       <div className="">
        <ul className={`md:hidden gap-3 space-y-7 flex flex-col justify-between items-center mt-24
                         ${barOpen ? "p-10 bg-white w-full"
                         : "hidden" }`}>
             {
                NavItems.map((items, idx)=>
               
                (
                    <li className='text-black font-bold text-2xl' key={idx}>
                        <NavLink to={items.path} onClick={toggleButton} className="hover:text-orange-400 underline">
                                     {items.link} 
                         </NavLink>
                    </li>
                ))
             }
                </ul>
        </div>
    </header>
  )
}
export default Navbar
