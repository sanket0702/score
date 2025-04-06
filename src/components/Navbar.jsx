import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//import ballgif from '../assets/icons8-cricket-ball.gif';
import Logo from '../logo/logo.svg'
import { useState } from 'react';
const Navbar = () => {

    const [activeTab, setActiveTab] = useState('Live');
  
    const navItems = [
      { name: 'Live', path: '/' },
      { name: 'Upcoming', path: '/upcoming' },
      { name: 'Completed', path: '/completed' },
      { name: 'Ipl', path: '/ipl' },
    ];

  return (
    <div>
        <header className="bg-gradient-to-r from-gray-400 to-indigo-400 text-white sticky top-0 z-10 shadow-md">

<div className=" bg-gradient-to-r from-gray-400 to-indigo-400 container mx-auto px-4 py-3">
        <div className=" bg-gradient-to-r from-gray-400 to-indigo-400 flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <h1 className=" flex items-center text-xl md:text-2xl font-bold"><img src={Logo} className="w-2.5 pb-4 mr-0"/>CricSc<img className="w-4 h-4" src='https://img.icons8.com/?size=100&id=7Ys0hwcOlyiA&format=png&color=000000' />re</h1>
          </NavLink>
          </div>


          </div>
          
    </header>
    <nav className="flex items-center justify-center space-x-2 py-[20px] px-4">
        <div className={`flex justify-between md:justify-around w-[100%] md:w-[30%]`}>
          {navItems.map((item, i) => (
            <Link
              key={i}
              onClick={() => setActiveTab(item.name)} to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition bg-gray-200 flex ${
                activeTab === item.name
                  ? 'bg-gradient-to-r from-gray-300 to-indigo-400 text-white'
                  : 'text-black hover:bg-gradient-to-r from-gray-200 to-indigo-400 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
