import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Context/AuthContext';
import logo from '../../assets/logo (1).png';
import { NavLink } from 'react-router-dom';
import pImg from '../../assets/team6-02.jpg'

// Navbar 
const Navbar = () => {
  const { user, LogOut } = useContext(FirebaseContext);
  console.log(user);
  const handleLogout = () => {
    LogOut()
      .then(() => {
        
      })
      .catch((error => {
      console.error(error);
    }))
  }
  return (
    <div>
      <div className="navbar pb-5">
        <div className="navbar-start">
         
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-semibold w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='blog'>Blog</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
        
        
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-semibold px-1">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='blog'>Blog</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
      
    </ul>
  </div>
        <div  className="navbar-end">
          
            {
                        user?.email ? <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn bg-gray-400 btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="Akash" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box bg-gray-400  w-52">
                                <li>
                  <button className="btn text-black btn-sm  btn-ghost">{user.displayName }</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={handleLogout}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <NavLink to='/login' className="btn bg-pink-700 text-white">Login</NavLink>
                    }
         
     
    
  </div>
</div>
    </div>
  );
};

export default Navbar;