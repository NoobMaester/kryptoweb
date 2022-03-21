import React from 'react'
import rec1 from '../assets/rectangle-1.png';
import rec2 from '../assets/rectangle-2.png';
import rec3 from '../assets/rectangle-3.png';
import rec4 from '../assets/rectangle-4.png';


const Portfolio = () => {
  return (
    <div className='portfolio'>
        <h3>Portfolio</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam vitae, eaque cum recusandae obcaecati iusto temporibus vel ipsam praesentium nihil quod ea laborum assumenda! Tempore numquam quibusdam eos magni?</p>

        <div className='slide'>
            <img src={rec1} alt="rec1" />
            <img src={rec2} alt="rec2" />
            <img src={rec3} alt="rec3" />
            <img src={rec4} alt="rec4" />
        </div>
    </div>
  )
}

export default Portfolio;