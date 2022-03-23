import React from 'react';
import info from '../assets/info-1.png';
import { motion } from 'framer-motion';

const Information = () => {
  return (
    <div className='info'>
        <div className='content'>
            <h3>
              "Investing has the best results when you learn from nature"
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores magni consectetur dignissimos perferendis quo impedit? Repudiandae quasi ex minima suscipit ut.</p>

            <div className='buttons'>
              <motion.button 
              initial={{x:-300}}
              animate={{x:0}}
              transition={{delay:0.10, duration:0.5}} className='btn-prime'>Learn more</motion.button>
              <motion.button
              initial={{x:-350}}
              animate={{x:0}}
              transition={{delay:0.10, duration:0.25}} className='btn-sec'>Watch Demo</motion.button>
            </div>
        </div>
        
        <img src={info} alt="info" />
    </div>
  )
}

export default Information;