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
        transition={{delay:0.15}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">About</a>
        </motion.li>
        
        <motion.li
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.25}}
         onClick={() => isMobile && closeMenu() }>
            <a href="/#">Service</a></motion.li>
    
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.35}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Token</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.45}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Dashboard</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.55}}
        onClick={() => isMobile && closeMenu() }>
            <a href="/#">Contact</a>
        </motion.li>
        
        <motion.li 
        initial = {animateFrom}
        animate = {animateTo}
        transition={{delay:0.65}}
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