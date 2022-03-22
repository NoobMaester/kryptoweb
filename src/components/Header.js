import React, { useState } from 'react';
import logo from '../assets/eth-logo-1.png';
import {FaBars} from 'react-icons/fa';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleClick = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div className='header'>
      <div className='up'>
        <div className='logo'>
          <img src={logo} alt="logo" />
          <h4>ETH Black 1.0</h4>
        </div>

        <FaBars className='open-menu' onClick={handleClick}/>
      </div>

      {showMenu && <div className='nav'>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Service</a>
        <a href="/#">Token</a>
        <a href="/#">Dashboard</a>
        <a href="/#">Contact</a>
        <a href="/#" className='btn'>Login</a>
        <a href="/#" className='btn'>Signup</a>
        
      </div>}
    </div>
  )
}

export default Header;