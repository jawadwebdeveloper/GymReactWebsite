import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'


export const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plan-blur1"></div>
        <div className="blur plan-blur2"></div>
        <div className="program-header">

            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        {/* plans cards */}
        <div className="plans">
            {plansData.map((plan, i)=> (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whitetick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benifites -></span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}
 