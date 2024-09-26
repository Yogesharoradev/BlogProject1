import React, { useContext, useState, useEffect } from 'react';
import { BarsOutlined, DiscordOutlined, FacebookOutlined, TwitterOutlined, XOutlined } from '@ant-design/icons';
import { Avatar, Button, Modal , message } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import context from '../lib/context';
import axios from 'axios';

const Navbar = () => {
  const [barOpen, setBarOpen] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { session, setSession } = useContext(context);
  const navigate = useNavigate();

  const onLogout =async () => {
   try{
      await axios.get("https://blogprojbackend.onrender.com/logout" , {withCredentials :true})
      message.success("logout successfully")
      setSession(null)
      navigate("/login")
    
   }catch(err){
    console.error("logout failed" , err)
    message.error("logout failed")
   }
    setIsModalVisible(false);
  };

  const toggleButton = () => {
    setBarOpen(!barOpen);
  };

  const openModal = () => {
    navigate('/login');
  };

  const showUserModal = () => {
    setIsModalVisible(true);
  };

  const hideUserModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('https://blogprojbackend.onrender.com/api/user', {
          withCredentials: true, // This ensures that session cookies are sent with the request
        });
        setSession(res.data)
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUserData();
  }, []);

  const NavItems = [
    {
      path: '/',
      link: 'Home',
    },
    {
      path: '/about',
      link: 'About',
    },
    {
      path: '/blogs',
      link: 'Blogs',
    }
  ];

  return (
    <header>
      <div className="p-5 bg-white text-black flex justify-between items-center ">
        {/* Logo */}
        <div>
          <Link to="/" className="text-lg">
            Design <span className="text-orange-600">DK</span>
          </Link>
        </div>

        {/* Nav Items */}
        <div className="flex justify-center items-center gap-6">
          <ul className="md:flex gap-12 font-bold text-lg hidden">
            {NavItems.map((items, idx) => (
              <li className="text-black" key={idx}>
                <NavLink
                  to={items.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}>
                  {items.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons and Buttons */}
        <div className="md:flex gap-6 hidden items-center">
          <button>
            <FacebookOutlined className="text-2xl hover:text-orange-400" />
          </button>
          <button>
            <TwitterOutlined className="text-2xl hover:text-orange-400" />
          </button>

          {!session ? (
            <button
              className="bg-orange-500 text-white font-bold px-7 py-1 rounded-lg"
              onClick={openModal}>
              Signup
            </button>
          ) : (
            <button onClick={showUserModal}>
              <Avatar className="bg-white text-black font-semibold hover:bg-orange-400 hover:text-white">
                {session?.user?.name[0].toUpperCase() || session?.name[0].toUpperCase()}
              </Avatar>
            </button>
          )}
        </div>

        {/* Toggle button for mobile view */}
        <div className="block md:hidden">
          <div className="flex gap-4 items-center">
            <button onClick={toggleButton}>
              {barOpen ? (
                <XOutlined className="text-2xl hover:text-orange-400" />
              ) : (
                <BarsOutlined className="text-2xl hover:text-orange-400" />
              )}
            </button>

            <button>
              {!session ? (
                <button
                  className="bg-orange-500 text-white font-bold px-7 py-1 rounded-lg"
                  onClick={openModal}>
                  Signup
                </button>
              ) : (
                <button onClick={showUserModal}>
                  <Avatar className="bg-white text-black font-semibold hover:bg-orange-400 hover:text-white">
                    {session?.user?.name[0].toUpperCase() || session?.name[0].toUpperCase()}
                  </Avatar>
                </button>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Items */}
      <div className="">
        <ul
          className={`md:hidden gap-3 space-y-7 flex flex-col justify-between items-center mt-24 ${
            barOpen ? 'p-10 bg-white w-full' : 'hidden'
          }`}>
          {NavItems.map((items, idx) => (
            <li className="text-black font-bold text-2xl" key={idx}>
              <NavLink
                to={items.path}
                onClick={toggleButton}
                className="hover:text-orange-400 underline">
                {items.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for User Info */}
      <Modal
        title="User Info"
        open={isModalVisible}
        onCancel={hideUserModal}
        footer={null}>
        <div className="flex flex-col items-center gap-4">
          <Avatar className="bg-white text-black font-semibold">
            {session?.user?.name[0].toUpperCase() || session?.name[0].toUpperCase()}
          </Avatar>
          <Button className='items-center font-bold' onClick={()=>navigate("/user")}>{session && session?.user?.name.toUpperCase() || session?.name.toUpperCase()}</Button>
          <p className="text-gray-400"> {session && session?.user?.email || session?.email}</p>
          <Button icon={<LogoutOutlined />} onClick={onLogout} className="bg-orange-500 text-white">
            Logout
          </Button>
        </div>
      </Modal>
    </header>
  );
};

export default Navbar;
