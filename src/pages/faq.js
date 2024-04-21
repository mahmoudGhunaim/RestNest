import React from 'react'
import "../components/style/FAQ.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Seo from '../components/seo';

const FAQ = () => {
  return (
    <Layout>
                    <Seo
            title="Frequently Asked Questions | RestNest Luxury Rentals"
            description="Have questions about booking your luxury rental in British Columbia? Our FAQ provides all the answers you need for a smooth and unforgettable vacation experience with RestNest."
        />
         <section className='hero-sec-Management'>
            <div className='hero-container-Management'>
                <div className='hero-content-Management'>
                    <h1>Frequently Asked Questions</h1>
                    <p>Dive into details about our luxury short-term rentals and full-service property management across British Columbia.</p>
                </div>
             </div>
        </section>
        <section className='Service-Description-sec1'>
            <div className='Service-Description-container1'>
                <div className='Service-Description-title1'>
                    <h1>Your curiosity, satisfied.</h1>
                    <div className='gold-line'></div>
                    <p>Whether you're indulging in a luxurious stay or considering our property management services, we've got answers to your questions right here.<br/>Can't find what you're seeking? Please feel free to <Link to='/contact-us' >contact us</Link></p>
                </div>
                <div className='Service-Description-img1'>
                    <img src='/Frame 48096235.svg'/>
                </div>
            </div>
        </section>
        <section className='guest-faq-sec'>
            <div className='guest-faq-container'>
                <div className='guest-faq-title'>
                    <h1>As a guest, I’d like to know:</h1>
                    <div className='gold-line'></div>
                </div>
                <div className='guest-faq-acc'>
                    <Accordion defaultExpanded>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-faq"
                            className='acc-title'
                            >
                            Can we host an event at one of your properties?
                            </AccordionSummary>
                            <AccordionDetails>
                            Our properties are sanctuaries of relaxation and luxury, perfect for intimate gatherings and making memories. However, to ensure the quality of stay for everyone and maintain our excellent relationships within the communities, we do not permit large parties or events.
                            Add: Our concierge will happily recommend nearby venues where bigger parties can be held while our property serves as your accommodation.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-faq"
                            className='acc-title'
                            >
                            What adventures await me in British Columbia?
                            </AccordionSummary>
                            <AccordionDetails>
                            British Columbia is a treasure trove of experiences! From Kelowna's vineyards to Whistler's ski slopes, and Vancouver's cultural richness, there's no end to the adventure. Each property comes with a detailed guide to local attractions, and our <Link to='/blog'>blog</Link> is brimming with insider tips for an unforgettable stay.
                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
                            What's your cancellation policy?
                            </AccordionSummary>
                            <AccordionDetails>
                            Our cancellation policy is firm to ensure the availability of our properties for serious bookings. We require a 50% deposit upon booking, which is non-refundable. The remainder of the payment is due 45 days before check-in, and is also non-refundable. This policy helps us provide a committed service to our guests and property owners. However, in the unlikely event that an issue arises with a property making it unavailable for your stay, we will offer a full refund or assist in finding a comparable new listing for your convenience.
                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
                                Are your properties pet-friendly?
                            </AccordionSummary>
                            <AccordionDetails>
                            We understand that pets are family! Policies on pets vary by property, so please review your chosen property's details or <Link to="contact-us"> contact us</Link> for clarification.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
                                How do I make a reservation?
                            </AccordionSummary>
                            <AccordionDetails>
                            Making a reservation with us is a personalized process designed to ensure you get the perfect match for your needs. Here's how it works:
                            <ul class="numbered-list">
                                <li>Reach out to us with your specific requirements, preferences, and any details that can help us understand what you're looking for in a vacation home.</li>
                                <li>Based on your criteria, our team will handpick properties that align with your desires and present you with the options.</li>
                                <li>If you already have a property in mind from our listings, let us know your choice, and we'll do our utmost to accommodate your preference.</li>
                                <li>Once you've selected a property, we'll guide you through the booking process, ensuring it's a seamless, hassle-free experience.</li>
                                We're here to assist you in every step of the way, making sure your reservation sets the stage for an unforgettable stay.
                            </ul>

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
                                What payment methods do you accept?

                            </AccordionSummary>
                            <AccordionDetails>
                            For the convenience and security of our guests, we accept payments through credit cards and wire transfers. This allows us to process transactions swiftly and ensure all financial interactions are secure and documented. Please note that we do not accept cash payments. Our commitment is to make your booking and payment process as seamless and straightforward as possible, with every step clearly communicated and professionally handled.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
                                What are the check-in and check-out times?
                            </AccordionSummary>
                            <AccordionDetails>
                            Our standard check-in time is at 4 PM, and check-out is at 10 AM. These times ensure that our team can maintain the high standards of cleanliness and order that our guests expect. However, we understand that travel plans can vary, so we strive to accommodate early check-ins or late check-outs whenever possible. Please contact us in advance if you'll require special arrangements, and we'll do our best to accommodate your needs based on our booking schedule.
                            </AccordionDetails>
                    </Accordion>
                                   
                </div>
            </div>
        </section>
        <section className='property-owner-faq-sec'>
            <div className='property-owner-faq-container'>
                <div className='property-owner-faq-title'>
                    <h1>as an owner, I’d like to know:</h1>
                    <div className='gold-line'></div>
                </div>
                <div className='property-owner-faq-acc'>
                <Accordion defaultExpanded>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-faq"
                            className='acc-title'
                            >
                         What does your property management service include?
                            </AccordionSummary>
                            <AccordionDetails>
                            We offer a bespoke approach to property management. From guest vetting and communication to professional cleaning and local law compliance, we handle it all. Our goal is to make your property investment a stress-free experience.
                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-faq"
                            className='acc-title'
                            >
                            What are your fees?
                            </AccordionSummary>
                            <AccordionDetails>
                            Our fees are as customized as our services. We believe in transparent pricing tailored to your property's specific needs and the level of management required.
                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
                            How do you ensure guests respect my property?
                            </AccordionSummary>
                            <AccordionDetails>
                            Respect for your property is paramount. We employ a thorough screening process for potential guests, including background checks and previous rental histories. Ensuring your property's safety and your peace of mind is at the heart of what we do.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
How do you determine rental prices for my property?
                            </AccordionSummary>
                            <AccordionDetails>
                            Our pricing strategy is rooted in data-driven insights. We collaborate with specialized data analysis firms to scrutinize competitor pricing, availability, and property types in your area. This rigorous analysis allows us to pinpoint the optimal price for specific dates, ensuring your property's rates are competitive yet profitable.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
What is the process for preparing my property for rental?
                            </AccordionSummary>
                            <AccordionDetails>
                            Once we solidify our partnership, our team will conduct a thorough assessment to ensure your property is impeccably equipped for guests. Following this, we arrange a professional photo shoot to capture your property's best features. We then leverage our comprehensive market analysis to set just the right price. Finally, your property is showcased across multiple high-traffic channels, and we monitor and manage bookings as they flow in.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
How do you market my property?
                            </AccordionSummary>
                            <AccordionDetails>
                            We employ a multi-faceted marketing approach. Your property will be featured on major platforms like Airbnb and VRBO, as well as on secondary channels such as Booking.com and Google. For our most exclusive properties, we also collaborate with global luxury travel agents to match your premium listings with discerning clients seeking high-end homes.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
What are your fees for property management?
                            </AccordionSummary>
                            <AccordionDetails>
                            Our comprehensive service comes at a fee of 30% of the total rental value. For example, on a $10,000 rental value with a $500 cleaning fee and $1,000 in taxes, the owner receives a $7,500 payout, with the remainder covering our services. Please note, taxes, cleaning, and any other additional fees are charged to the guest.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
How do you handle property maintenance and repairs?
                            </AccordionSummary>
                            <AccordionDetails>
                            We maintain partnerships with skilled tradespeople across all sectors, ensuring that any maintenance or repair needs are addressed promptly and professionally, keeping your property in peak condition.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
How often will I receive updates or reports on my property?

                            </AccordionSummary>
                            <AccordionDetails>
                            Communication is key to our service. You'll be immediately notified of any damages. Additionally, we provide monthly reports detailing your property's performance, upcoming market forecasts, and proposed pricing strategies.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
What measures do you take to ensure the security of my property?
                            </AccordionSummary>
                            <AccordionDetails>
                            Your property's security is paramount. We partner with Superhog for premium insurance and thorough guest screening, including ID verification and blacklist cross-referencing. We also secure a deposit from each guest as an added safeguard.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
How do you handle legal and regulatory requirements?
                            </AccordionSummary>
                            <AccordionDetails>
                            We navigate the legal landscape for you, assisting in obtaining necessary licenses and managing tax payments and other regulatory obligations, ensuring your operation is fully compliant.

                            </AccordionDetails>
                    </Accordion>
                    <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-faq"
                            className='acc-title'
                            >
What happens if a guest damages my property?
                            </AccordionSummary>
                            <AccordionDetails>
                            In the rare event of property damage, rest assured that costs are covered by the guest's deposit, providing peace of mind and financial protection for your investment.
                            </AccordionDetails>
                    </Accordion>
                    
                </div>
            </div>

        </section>
    </Layout>
  )
}

export default FAQ