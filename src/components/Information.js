import React from 'react';
import info from '../assets/info-1.png';
import { motion } from 'framer-motion';

const Information = () => {
  return (
    <div className='info'>
        <div className='content'>
            <motion.h3 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1, duration:1}}>
              "Investing has the best results when you learn from nature"
            </motion.h3>
            <motion.p 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.2, duration:1}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores magni consectetur dignissimos perferendis quo impedit? Repudiandae quasi ex minima suscipit ut.</motion.p>

            <div className='buttons'>
              <motion.button 
              initial={{x:-300}}
              animate={{x:0}}
              transition={{delay:0.20, duration:0.5}}
              whileHover={{scale:1.1,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              boxShadow:"0px 0px 8px rgb(255,255,255)"}}
              className='btn-prime'>Learn more</motion.button>
              
              <motion.button
              initial={{x:-350}}
              animate={{x:0}}
              transition={{delay:0.10, duration:0.5}}
              whileHover={{scale:1.1,
              textShadow:"0px 0px 8px rgb(255,255,255)",
              boxShadow:"0px 0px 8px rgb(255,255,255)"}}className='btn-sec'>Watch Demo</motion.button>
            </div>
        </div>
        
        <motion.img 
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{delay:0.10, duration:0.5}}
        src={info} alt="info" />
    </div>
  )
}

export default Information;