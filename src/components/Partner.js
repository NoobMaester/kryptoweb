import React from 'react';
import frame from '../assets/Frame.png';
import lady from '../assets/Group-2.png';
import gent from '../assets/Group-1.png';

const Partner = () => {
  return (
    <div className='partner'>
        <h3>Partner</h3>
        <img src={frame} alt="frame" />
        
        <div className='contact'>
            <div className='form'>
                <h2>Get in touch with us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci tempora repellendus,</p>

                <span><input type="submit" value="Please send your email" /><button className='btn-primo'>Send</button></span>
            </div>

            <div className='avatar'>
                <img src={lady} alt="lady" />
                <img src={gent} alt="gent" />
            </div>
        </div>
    </div>
  )
}

export default Partner