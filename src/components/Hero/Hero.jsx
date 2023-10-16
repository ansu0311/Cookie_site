import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
// import front_tape from "../../assets2/Front tape.png"
// import back_tape from "../../assets2/back tape.png"
// import half_circle from "../../assets2/half_circle.png"
// import cookie_tub from "../../assets2/kiko-camaclang-RkwpBigY0y4-unsplash 1.png"
import total_pic from "../../assets3/Tape and Image small.png"
import total_pic2 from "../../assets2/Subtract.png"

const Hero = () => {

  const transition = {type:'spring', duration: 3}
  const mobile = window.innerWidth<=768?true:false;

  return (
    <div className='hero' id='home'>
        <div>
          <Header/>
          {/*<div className='text_box'>
             <div className='welcome_text'>
                <div className='hero_center_text'>
                  <div>FUDGY</div>
                  <div className='small_hero_text'>DECADENT</div>
                </div>
                <div className='and_text'>&</div>
              </div>
              <img className='half_circle image_layout' src={half_circle} alt="half circle image" />
          </div>
          <div className='cookie_box'>
            <img className='cookie_bucket image_layout' src={cookie_tub} alt="cookie tub image" />
            <img className='front_tape image_layout' src={front_tape} alt="front tape image" />
            <img className='back_tape image_layout' src={back_tape} alt="back tape image" />
          </div> */}
        </div>
        <dir className='image_cont'>
          <img className='total_image ' src={total_pic} alt="All image" />
        </dir>
    </div>
  )
}

export default Hero