import React from 'react';
import logo from '../../assets/eth-logo-1.png';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  
  return (
    <div className='header'>
      
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h4>ETH Black 1.0</h4>
      </div>

      <div className='navbar'>
        <Nav/>
        <NavMobile/>
      </div>
      
    </div>
  )
}

export default Header;