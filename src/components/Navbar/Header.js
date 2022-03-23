import React from 'react';
import logo from '../../assets/eth-logo-1.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { motion } from 'framer-motion';

const Header = () => {

  const animateFrom = {opacity:0, y:-60}
  const animateTo = {opacity:1, y:0}
  
  return (
    <div className='header'>
      
      <motion.div 
        className='logo'
        initial = {animateFrom}
        animate = {animateTo} 
        transition={{delay:0.05}}>
        <img src={logo} alt="logo" />
        <h4>ETH Black 1.0</h4>
      </motion.div>

      <div className='navbar'>
        <Nav/>
        <NavMobile/>
      </div>
      
    </div>
  )
}

export default Header;