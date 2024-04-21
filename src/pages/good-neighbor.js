import React from 'react'
import Layout from "../components/layout"
import "../components/style/RentalAgreement.css"
import { Link } from "gatsby"
import Seo from '../components/seo'
const GoodNeighbor = () => {
  return (

    <Layout>
        <Seo 
        title="Good Neighbour Guide | RestNest – Enhancing Community Well-being in the Okanagan"
        description="Discover RestNest's Good Neighbour Guide, dedicated to fostering a welcoming community environment in the Okanagan. Our guide outlines our commitment to promoting responsible behavior, maintaining high-quality standards, and ensuring comprehensive guest support services. Learn about our policies on noise, occupancy, parking, trash, and local contact to ensure a harmonious stay for all."/>
    <section className='hero-sec-Management'>
       <div className='hero-container-Management'>
           <div className='hero-content-Management RentalAgreement-hero'>
               <h1>Good Neighbour Guide</h1>
               <p>Striving to Foster a Welcoming Community Environment by Promoting Responsible Behavior, Maintaining High-Quality Standards, and Providing Comprehensive Guest Support Services in the Okanagan.</p>
           </div>
        </div>
   </section>
   <section className='RentalAgreement-sec'>
       <div className='RentalAgreement-container'>
           <div className='RentalAgreement-list'>
               <h2>List agreements</h2>
               <Link to='#RestNest-Hospitality'>RestNest Hospitality</Link>
               <Link to='#NOISE'>NOISE</Link>
               <Link to='#OCCUPANCY'>OCCUPANCY</Link>
               <Link to='#PARKING'>PARKING</Link>
               <Link to='#TRASH'>TRASH</Link>
               <Link to='#LOCAL-CONTACT'>LOCAL CONTACT</Link>
               
           </div>
           <div className='RentalAgreement-data'>
               <div className='RentalAgreement-single-data'>
                   <h1 id='RestNest-Hospitality'>RestNest Hospitality</h1>
                   <div className='gary-line'></div>
                   <p>In accordance with City of West Kelowna and Kelowna Good Neighbor Guidelines, continuously strives to be good neighbors throughout the Okanagan community and expects our guests to do the same. Prior to confirming reservations, guests must agree to abide by all house rules and neighborhood policies.
                        To prevent any potential problems, our strict screening process ensures guests will treat our homes and community with respect, just as a good neighbor does. Additionally, RestNest inspects each property after every guest departs to ensure a high-quality standard within our community.
                        It is important to us that each guest is given the appropriate information to make his or her stay as comfortable as possible. As a result, every home includes a web app Welcome Guide outlining details about the home and community. Below are a few highlighted sections from our Welcome Guides.</p>
               </div>
               <div className='RentalAgreement-single-data'>
                   <h1 id='NOISET'>NOISE</h1>
                   <div className='gary-line'></div>
                   <p>Our homes are intended for relaxing getaways, not rowdy beach parties. Music and other noise are to be kept at an appropriate level and in a manner that is mindful to neighbours. Noise that can be heard 50 feet away from the home is prohibited. Parties of any kind are not allowed.</p>
               </div>
               <div className='RentalAgreement-single-data'>
                   <h1 id='OCCUPANCY'>OCCUPANCY</h1>
                   <div className='gary-line'></div>
                   <p>We strictly adhere to our advertised maximum occupancy levels at each home. No exceptions are made for any reason. The number of guests cannot exceed the listed maximum occupancy for the property.</p>
               </div>
               <div className='RentalAgreement-single-data'>
                   <h1 id='PARKING'>PARKING</h1>
                   <div className='gary-line'></div>
                   <p>To ensure guests know where they can and cannot park, detailed parking instructions are provided including images of designated spots. We encourage guests to adhere to posted parking regulations and be mindful not to block neighbouring driveways.</p>
               </div>
               <div className='RentalAgreement-single-data'>
                   <h1 id='TRASH'>TRASH</h1>
                   <div className='gary-line'></div>
                   <p>Part of being a good neighbour is cleaning up after yourself. Guests are provided with trash pick-up days and instructed to bring bins out during applicable days. RestNest utilizes a trash valet service at select properties to ensure our properties are kept clean of trash and debris.</p>
               </div>
               <div className='RentalAgreement-single-data'>
                   <h1 id='LOCAL'>LOCAL CONTACT</h1>
                   <div className='gary-line'></div>
                   <p>A good neighbor can always be reached, and we make sure guests, as well as neighbors, can contact us should any issues arise. Every guest is provided with our office and emergency phone numbers. Our contact info is also located on our management signs outside our homes.</p>
               </div>

           </div>
       </div>
   </section>
</Layout>

  )
}

export default GoodNeighbor