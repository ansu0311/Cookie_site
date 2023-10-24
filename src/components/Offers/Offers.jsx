import React from 'react'
import './Offers.css'
import right_arrow from '../../assets2/right-arrow.png'
import allData from '../../data/AllData'


const Reasons = () => {
  return (
    <div className="Reasons" id="Offers">
        <div className="Reasons-header">
        Offers and Gifts
        </div>
        <div className="Reasons-categories">
            {allData.map((item,i) =>{
              if(item.offer === true){
                return(
                  <div className='reason_box'>
                <div className='Reasons1'>
                  <img  src={item.image} alt="loko" />
                  <div className='Cookie_reason'>{item.heading}</div>
                  <div>
                    <div className='Cookie_reason for'>
                      <span className='number_item'>2</span> For</div>
                    <div className='Cookie_reason line_though price_reason'>{"Rs. "+ Math.round(item.selling*2)}</div>
                    <div className='Cookie_reason price_reason'>{"Rs. "+ Math.round(item.selling *2 *0.8)}</div>
                  </div>
                </div>
                <div className='Reasons circle_reason'>
                  <img src={right_arrow} alt="right arrow" />
                </div>
              </div>
                )
              }
              else{
                return null
              }
            })}
        </div>
    </div>
  )
}

export default Reasons