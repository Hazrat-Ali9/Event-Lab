import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div className=' max-w-[1140px] mx-auto'>
      <div className=' sticky top-0 left-0  bg-white z-50'>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;