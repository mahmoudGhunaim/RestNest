import React, { useState } from 'react';
import Layout from "../components/layout"
import "../components/style/ContactUs.css"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import RECAPTCHA from 'react-google-recaptcha';

import { Link } from "gatsby"
const ContactUs = (props) => {
  const [capVal, setCapVal] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        companyName: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
      
      const mapStyles = {
        width: '100%',
        height: '400px',
      };
      const google = props.google || null;
      
  return (
    <Layout>
        <section className='contact-sec'>
            <div className='contact-container'>
                <div className='contact-map-sec'>
                    <div className='contact-map-sec-width'>
                    <span>contact Information</span>
                    <h1>Talk to our team</h1>
                    <div className='gold-line'></div>
                <Map    className="google-mapI"
                         google={props?.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat: 49.8625, // Replace with actual latitude of 3635 Carrington Rd
                            lng: -119.5837 // Replace with actual longitude of 3635 Carrington Rd
                        }}
                    >
                      <Marker
                        position={{
                            lat: 49.8625, // Replace with actual latitude of 3635 Carrington Rd
                            lng: -119.5837 // Replace with actual longitude of 3635 Carrington Rd
                        }}
                        />
                 </Map>
                 <div className='data-contact'>
                    
                    <Link to="/Services"><img src="/map-marked-alt-solid 1.svg"/>3635 Carrington Rd West <br/>Kelowna, BC</Link>
                    <Link to="/Services"><img src="/phone-solid 1.svg"/>7788584942</Link>
                    <Link to="/Services"><img src="/envelope-open-text-solid 1.svg"/>info@restnest.ca</Link>
                 </div>
                </div>
                </div>
                <div className='contact-form'>
                <form onSubmit={handleSubmit}   
                action="https://getform.io/f/navvwkza" method="POST"
               >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="contactNumber">Contact number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />

                    

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                        <RECAPTCHA sitekey="6LctCbMpAAAAAKSKgZmiz60XZ2swg3YG8LxKXxmd"
                          style={{marginTop:"15px"}}
                          onChange={(val) => { setCapVal(val) }}
                        /> 
                    <button type="submit"  disabled={!capVal}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAUOQUcvKESf8w4AobaXLdh56y3eR8QXKw'
  })(ContactUs);