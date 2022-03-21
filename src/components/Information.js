import React from 'react';
import info from '../assets/info-1.png';

const Information = () => {
  return (
    <div className='info'>
        <div className='content'>
            <h3>
              "Investing has the best results when you learn from nature"
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores magni consectetur dignissimos perferendis quo impedit? Repudiandae quasi ex minima suscipit ut.</p>

            <div className='buttons'>
                <button className='btn-prime'>Learn more</button>
                <button className='btn-sec'>Watch Demo</button>
            </div>
        </div>
        
        <img src={info} alt="info" />
    </div>
  )
}

export default Information;