import React from 'react'
import { Header } from '../Header/Header'
import './Hero.css'

import heroimage from '../../assets/hero_image.png'
import heroimageback from '../../assets/hero_image_back.png'
import heroheart from '../../assets/heart.png'
import herocalories from '../../assets/calories.png'

import { motion } from 'framer-motion'
export const Hero = () => {
    const transtion = {type: 'spring', duration:3}
  return (
    <div className="hero">

        <div className="blur hero-blur"></div>
        {/* Left Section */}
        <div className="left-h">
            <Header/>

            {/* the best add */}
            <div className="the-bes-add">
                <motion.div
                    initial={{left: '238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transtion,type:'tween'}}
                >
                </motion.div>

                {/* <div></div> */}
                <span>The best fitness club in the town</span>
            </div>
            {/* the hero section */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your 
                            ideal body and live up your life to fullest
                        </span>

                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn more</button>
                </div>

        </div>

        {/* Right Section */}
        <div className="right-h">
            <button className='btn'>Join Now</button>
            <div className="heart-rate">
                <img src={heroheart} alt="" />
                <span>Heart Rate</span><span> 116 bpm</span>
            </div>
            <img src={heroimage} alt="" className='hero-image' />
            <img src={heroimageback} alt="" className='hero-image-back'/>
            {/* calories */}
            <div className="calories">
                <img src={herocalories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}
