import React from 'react';
import {FaMobileAlt, FaTwitter, FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='rescources'>
            <div className='all'>
                <h4>All</h4>
                <h5>Home</h5>
                <h5>Examples</h5>
                <h5>Pricing</h5>
                <h5>Updates</h5>
            </div>
            <div className='all'>
                <h4>Resources</h4>
                <h5>Home</h5>
                <h5>Examples</h5>
                <h5>Pricing</h5>
                <h5>Updates</h5>
            </div>
            <div className='all'>
                <h4>About</h4>
                <h5>Home</h5>
                <h5>Examples</h5>
                <h5>Pricing</h5>
                <h5>Updates</h5>
            </div>
        </div>
        <div className='social'>
            <span><FaMobileAlt/> +49 1631111111</span>
            <span><MdOutlineAlternateEmail/> believeme@gmail.com</span>
            <div>
                <FaTwitter/>
                <FaFacebookSquare/>
                <FaLinkedin/>
            </div>
        </div>
    </div>
  )
}

export default Footer