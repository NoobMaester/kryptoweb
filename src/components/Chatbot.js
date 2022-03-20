import React from 'react'
import bot from '../assets/ChatBot.png';

const Chatbot = () => {
  return (
    <div className='chatbot'>
        <div className='upper-content'>
            <h3>We have one of the best technology for the bitcoin industry</h3>

            <button className='btn-prime'>See more</button>
        
            <h4>we are committed to processing the information in order to contact you and talk about your project.</h4>

            <div className='stats'>
                <div>
                    <h2>100K</h2>
                    <p>5 Reasons To Purchase Desktop Computers</p>
                </div>

                <div>
                    <h2>2.5K</h2>
                    <p>5 Reasons To Purchase Desktop Computers</p>
                </div>

                <div>
                    <h2>399K</h2>
                    <p>5 Reasons To Purchase Desktop Computers</p>
                </div>
            </div>
        </div>

        <img src={bot} alt="chatbot" />
    </div>
  )
}

export default Chatbot;