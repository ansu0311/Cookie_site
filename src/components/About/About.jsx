import React from 'react'
import './About.css'
import total_text from '../../assets3/text design.png';

const About = () => {
  return (
    <div className="plans-container" id='About'>
        {/* <div className="plans">
        Enjoy egg free &nbsp;
        <div className='plans_span'>
          <img src={eggFree} alt="Egg Logo" className='egg_logo'/>
        </div>
        &nbsp;cookie perfection with&nbsp;<span className='brand'>Dohful</span>! &nbsp;
        <div className='plans_img'>satisfy</div>
        &nbsp;Satisfy your sweet cravings with every bite Try them today.&nbsp;
        <div className='plans_img plans_img1'>perfection</div>
        </div> */}
        <div className='image_cont_about'>
          <img className='total_text' src={total_text} alt="text design" />
        </div>
    </div>
  )
}

export default About