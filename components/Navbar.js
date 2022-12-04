import React from 'react';
import logo from '../assets/trinity.png';
import Image from 'next/image';

const Navbar = () => (
  <div className="navbar">
    <Image className="navbar_logo" src={logo} alt="trinty logo" />
    <h1>Trinity.Ai</h1>
  </div>
);

export default Navbar;
