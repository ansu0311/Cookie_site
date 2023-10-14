import React from 'react'
import './Offers.css'
import {offerData} from '../../data/offerData'
import right_arrow from '../../assets2/right-arrow.png'


const Reasons = () => {
  return (
    <div className="Reasons" id="Offers">
        <div className="Reasons-header">
        Offers and Gifts
        </div>
        <div className="Reasons-categories">
            {offerData.map((program)=>(
                <div className='reason_box'>
                <div className='Reasons1'>
                  <img  src={program.image} alt="loko" />
                  <div className='Cookie_reason'>{program.heading}</div>
                  <div>
                    <div className='Cookie_reason for'>
                      <span className='number_item'>2</span> For</div>
                    <div className='Cookie_reason line_though price_reason'>{"Rs. "+program.selling}</div>
                    <div className='Cookie_reason price_reason'>{"Rs. "+program.discount}</div>
                  </div>
                </div>
                <div className='Reasons circle_reason'>
                  <img src={right_arrow} alt="right arrow" />
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg"
      height="2.5vw"
      viewBox="0 0 448 512">
        <path fill="#8496ff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            **/}  
              </div>
            ))}
        </div>
    </div>
  )
}

export default Reasons