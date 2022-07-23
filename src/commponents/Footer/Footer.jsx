import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkdin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
export const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="sochial-link">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkdin} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
            <small style={{color:'white'}}>&copy;Muhammad Jawad Created by jd.</small>
        </div>
        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>
    </div>
  )
}
