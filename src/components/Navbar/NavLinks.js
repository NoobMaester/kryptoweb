import React from 'react';
import { motion } from 'framer-motion';

const NavLinks = ({isMobile, closeMenu}) => {
    const animateFrom = {opacity:0, y:-40}
    const animateTo = {opacity:1, y:0}


  return (
    <ul className='nav'>
        <motion.li
        initial = {animateFrom}
        animate = {animateTo} 
        transition={{delay:0.05}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Home</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.10}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">About</a>
        </motion.li>
        
        <motion.li
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.20}}
         onClick={() => isMobile && closeMenu() }>
            <a href="/#">Service</a></motion.li>
    
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.30}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Token</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.40}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Dashboard</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.50}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Contact</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.60}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#" className='btn'>Login</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.70}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#" className='btn'>Signup</a>
        </motion.li>
        
    </ul>
  )
}

export default NavLinks