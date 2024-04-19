/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt=""  style={{ width: '150px', height: 'auto', background:'gray'}}/>
        <p>Our mission is to satisfy your cravings and elevate your dining experience.</p>
        <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        {/* space */}
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
        </div>
  {/* space */}
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
 <ul>
            <li>+1-212-456-7890</li>
            <li>support@hungary.com</li>
           
        </ul>

        </div>

        </div>
<hr />
<p className="footer-copyright">
   Copyright 2024 © Hungary.lakshayjain.in -All Rights Reserved.
</p>
    </div>
  )
}

export default Footer