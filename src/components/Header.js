import React from 'react';
import logo from '../assets/eth-logo-1.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h4>ETH Black 1.0</h4>
      </div>

      <div className='nav'>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Service</a>
        <a href="/#">Token</a>
        <a href="/#">Dashboard</a>
        <a href="/#">Contact</a>
        <a href="/#" className='btn'>Login</a>
        <a href="/#" className='btn'>Signup</a>
          
      </div>

    </div>
  )
}

export default Header