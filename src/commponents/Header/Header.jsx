import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
export const Header = () => {
  return (
     
   <div className="">
         <img className='logo' src={Logo} alt="" />

         <ul className='header-menu'>
            <li>Home</li>
            <li>Programms</li>
            <li>Why us</li>
            <li>PLans</li>
            <li>Testimonials</li>
         </ul>

   </div>
  )
}
