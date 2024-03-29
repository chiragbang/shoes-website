"use client"
import React, { useState } from 'react';
import "../styles/Header.css";
import Link from 'next/link';
import { CiShop } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='header'>
      <div className="header-left">
        <h2>LOGO</h2>
      </div>

      {/* Hamburger menu button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
      </div>

      {/* Menu items */}
      <div className={`header-right ${showMenu ? 'show' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Pages</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">New Posts</Link>
      </div>

      <div className='cart'>
        <IoSearchSharp style={{fontSize:"25px"}}/>
        <RiAccountCircleFill style={{fontSize:"25px"}}/>
        <CiShop style={{fontSize:"25px"}}/>
      </div>
    </div>
  );
};

export default Header;
