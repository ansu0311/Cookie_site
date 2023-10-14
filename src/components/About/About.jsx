import React from 'react'
import './About.css'
import Cookie from '../../assets2/cookie.png';

const About = () => {
  return (
    <div className="plans-container" id='About'>
        <div className="plans">
        Enjoy egg free &nbsp;
        <div className='plans_span'>
          <img src={Cookie} alt="Egg Logo" className='egg_logo'/>
        </div>
        &nbsp;cookie perfection with&nbsp;<span className='brand'>Dohful</span>! &nbsp;
        <div className='plans_img'>satisfy</div>
        &nbsp;Satisfy your sweet cravings with every bite Try them today.&nbsp;
        <div className='plans_img plans_img1'>perfection</div>
        </div>
    </div>
  )
}

export default About