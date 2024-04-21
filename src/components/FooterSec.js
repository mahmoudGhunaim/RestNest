import React from 'react'
import "./style/FooterSec.css"
import { Link } from "gatsby"
const FooterSec = () => {
  return (
    <section className='FooterSec-sec'>
      <div className='FooterSec-container'>
        <div className='FooterSec-content'>
          <h1>Discover your dream stay iN </h1>
          <h2>British Columbia</h2>
          <Link to='/properties'><button>Explore Our Properties</button></Link>
        </div>
      </div>
    </section>
  )
}

export default FooterSec