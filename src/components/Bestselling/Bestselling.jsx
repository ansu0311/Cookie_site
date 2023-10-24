import React from 'react'
import './Bestselling.css'
import all_data from '../../data/AllData'
import Item from '../Item/Item'

const Bestselling = () => {
  return (
    <div className="Programs flex-column-bestselling" id="Bestselling">
        <div className="programs-header">
        Our Bestselling Cookies
        </div>
        <div className="program-categories">
            {all_data.map((item,i) => {
              if(item.bestSeller === true){
                return (
                <Item 
                key = {i}
                id ={item.id}
                image ={item.image}
                heading ={item.heading}
                selling ={item.selling}
                bestSeller ={item.bestSeller}
                offer ={item.offer}/>);
                }
                else{
                  return null
                }
                })}
        </div>
    </div>
  )
}

export default Bestselling