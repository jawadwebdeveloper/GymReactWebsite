import React from 'react'
import { useRef } from 'react'
import './Join.css'
// import emailjs from '@emailjs/browser'
import emailjs from '@emailjs/browser'
// import emailjs from 'emailjs/browser'
export const Join = () => {

    const form = useRef() 

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vnnbgpo', 'template_28ch4ub', form.current, 'BWYtHtvfwwvZ18v5p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join-us">
        <div className="left-j">
        <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span >YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email' />
                <input type="number" name='user_number' placeholder='Enter your Number' />
                <button className='btn btn-j'>Join Now</button>
            </form>


        </div>
    </div>
    
  ) 
}
