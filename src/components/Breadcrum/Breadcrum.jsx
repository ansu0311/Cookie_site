import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../assets3/breadcrum_arrow.png'
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        <Link to="/" className='Link_button'>home</Link> <img src={arrow_icon} alt="arrow icon" /> <Link to="/menupage" className='Link_button'>product</Link> <img src={arrow_icon} alt="arrow icon" /> <span>{product.heading}</span>
    </div>
  )
}

export default Breadcrumbs