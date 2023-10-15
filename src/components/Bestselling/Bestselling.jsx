import React from 'react'
import './Bestselling.css'
import {bestSellingData} from '../../data/bestSellingData'
import right_arrow from '../../assets2/right-arrow.png'
import { Link } from "react-router-dom";

const Bestselling = () => {
  return (
    <div className="Programs flex-column-bestselling" id="Bestselling">
        <div className="programs-header">
        Indulge In Our Bestselling Cookies
        </div>
        <div className="program-categories">
            {bestSellingData.map((program)=>(
                <div className='flex-column-bestselling category1'>
                  <img  src={program.image} alt="loko" />
                  <div className='flex-column-bestselling text_child'>
                    <div className='Cookie_heading'>{program.heading}</div>
                    <div className='Cookie_heading for'>For</div>
                    <div className='Cookie_heading price_cookie'>{"Rs. "+program.details}</div>
                  </div>
                  <div className='flex-column-bestselling circle_button'>
                  <img src={right_arrow} className='custom_button' alt="right arrow" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg"
        height="2.5vw"
        viewBox="0 0 448 512">
          <path fill="#8496ff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            */}
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Bestselling