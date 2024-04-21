import React from 'react'
import "./style/CustmerSay.css"
import { Link } from 'gatsby';
const CustmerSay = ({imgSrc,des,location,Name,linkpage}) => {
  return (
    <div className='slider-sec'>
        <div className='slider-container'>
            <div className='slider-img'>
              <Link to={linkpage}>
                <img src={imgSrc}/>
              </Link>
            </div>
            <div className='slider-right'>
                <img src='quat.svg'/>
                <p className='des'>{des}</p>
                <h3>{Name}</h3>
                <p className='location'>{location}</p>
            </div>
        </div>
    </div>
  )
}

export default CustmerSay