import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import tape from "../../assets2/Tape and image 3.png"

const Join = () => {
  const form  = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_40n7zxu', 'template_db41bh2', form.current, 'nbKGnsagFJD94__oV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='flex_column Join' id='join-us'>
        <div className='tape_join'>
          <img src={tape} alt="Brand Tape" />
        </div>
        <div className='Email_sub flex_column'>
          <div className='Join_heading'>
            Win Free Dohful Cookies Box!
          </div>
          <div className='join_discription'>
            Subscribe for a chance to win Assorted cookies box. We select 4 winners every month.
          </div>
          <div>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email"  name='user_email' placeholder='Email'/>
                <button className='btn btn-j'>Join Now</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Join