import React from 'react'
import './Feedback.css'
import {testimonialsData} from '../../data/testimonialsData'

const Feedback = () => {
    return (
        <div className="flex-column testimonials " id="Feedback">
            <div className="testimonials-header">
            Feedbacks
            </div>
            <div className="testimonials-categories">
                {testimonialsData.map((program)=>(
                    <div className='flex-column testimonials1 '>
                      <div className='flex-row review_heading '>
                        <img  src={program.image} alt="loko" />
                        <div className='Cookie_testimonials'>{program.heading}</div>
                      </div>
                      <div className=' flex-row review_star'>
                        <div className='star right'>{" -"+program.name}</div>
                      </div>
                      <div>
                        <div className=' description_testimonials'>{"Rs. "+program.discription}</div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
      )
    }

export default Feedback