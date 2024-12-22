import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero quia dolor suscipit qui deleniti accusantium, corporis eveniet rerum minus. Fugit, quos officia. Exercitationem aliquam commodi unde totam. Dolorum, sequi?</p>
                <div className='footer-cscial-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN ROUCH</h2>
                <ul>
                    <li>+1-223-224-5849</li>
                    <li>comtact@myo.com</li>
                </ul>
            </div>   
            
        </div>
        <hr />
            <p className='footer-copyright'>
                Copyright 2024@ tomato.com - All Reight Reserved.
            </p>
    </div>
  )
}

export default Footer