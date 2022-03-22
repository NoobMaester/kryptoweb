import React from 'react';
import {FaMobileAlt, FaTwitter, FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='resources'>
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
            <span className='right'><FaMobileAlt className='fa'/><h5>+49 1631111111</h5></span>
            <span className='right'><MdOutlineAlternateEmail className='fa'/><h5>believeme@gmail.com</h5></span>

            <div className='sm'>
                <FaTwitter className='fa'/>
                <FaFacebookSquare className='fa'/>
                <FaLinkedin className='fa'/>
            </div>

            <span className='right'>
            <h5>All Right Reserved</h5><AiOutlineCopyrightCircle/></span>
        </div>
    </div>
  )
}

export default Footer