import React from 'react';
import './Footer.css';
import Logo from '../../assets2/full-logo-white.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <div className=" flex-column-footer Footer-container">
      <div className='links_dis'>
        <div className='left-side flex-column-footer'>
          <div className='footer_link'>About</div>
          <div className='footer_link'>Contact Us</div>
          <div className='footer_link'>Baker's Journal</div>
          <div className='footer_link'>The Sunday Letter</div>
          <div className='footer_link'>Privacy Policy</div>
          <div className='footer_link'>Return Policy</div>
          <div className='footer_link'>Terms Of Service</div>
        </div>
        <div></div>
        <div className=' flex-column-footer right-side'>
            <div className='footer_text_container'>
            <div className='heading_footer'>Hey there, Lets Treat you!</div>
            <div className='description_footer'>
            I think we all have too many balls juggling in the air - at work & at home. 
            Too many tabs open in our brains & in our browsers. 
            Dohful is a reason to take a moment & collect ourselves. 
            To celebrate each small sprint in this life long marathon.
            </div>
          </div>
        </div>
      </div>
        <div className=" flex-column-footer footer">
            <div className="social-links">
                <GitHubIcon style={{fontSize: '3.4vw'}} className='customIcon' />
                <LinkedInIcon style={{fontSize: '3.4vw'}} className='customIcon' />
                <FacebookIcon style={{fontSize: '3.4vw'}} className='customIcon' />
                <InstagramIcon style={{fontSize: '3.4vw'}} className='customIcon' />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer