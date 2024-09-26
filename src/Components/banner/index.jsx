import React from 'react';

const Banner = () => {
  return (
    <div className='bg-black relative min-h-[500px]'>
      <div 
        className='absolute inset-0 bg-cover bg-center' 
        style={{ 
          backgroundImage: "url('/images/download.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      ></div>
    </div>
  );
};

export default Banner;
