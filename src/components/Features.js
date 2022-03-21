import React from 'react';
import tech from '../assets/tech-1.png';
import {FaBitcoin} from 'react-icons/fa'
const Features = () => {
  return (
    <div className='feat'>
        <h3>Features at your door</h3>
        <div className='content1'>
            <div className='gridd'>
                <div className='content2'>
                <span className='icon'><FaBitcoin/><h4>Ecstatic elegance</h4></span>
                    <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                </div>
                <div className='content2'>
                    <span className='icon'><FaBitcoin/><h4>Ecstatic elegance</h4></span>
                    <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                </div>
                <div className='content2'>
                    <span className='icon'><FaBitcoin/><h4>Ecstatic elegance</h4></span>
                    <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                </div>
                <div className='content2'>
                    <span className='icon'><FaBitcoin/><h4>Ecstatic elegance</h4></span>
                    <p>Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                </div>
            </div>
            <img src={tech} alt="tech" />
        </div>
    </div>
  )
}

export default Features