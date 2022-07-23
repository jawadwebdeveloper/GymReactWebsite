import React from 'react'
import './Program.css'

import {programsData} from "../../data/programsData";
import rightArrow from '../../assets/rightArrow.png'

export const Program = () => {
  return (
    <div className="programs" id="programs">
        {/* header */}
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-catories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <span><img src={rightArrow} alt="" /></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
