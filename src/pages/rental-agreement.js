import React from 'react'
import Layout from "../components/layout"
import "../components/style/RentalAgreement.css"
import { Link } from "gatsby"
import Seo from '../components/seo'
const RentalAgreement = () => {
  return (
    <Layout>
                    <Seo
            title="RestNest's Good Neighbour Guide | Promoting Community & Responsibility in Okanagan"
            description="Explore RestNest's Good Neighbour Guide, a cornerstone of our commitment to fostering a welcoming community environment in the Okanagan. Learn about our responsible guest behavior standards, from noise control to trash management, and discover how we ensure high-quality standards and comprehensive guest support services. Together, we make the Okanagan a better place for everyone"
        />
         <section className='hero-sec-Management'>
            <div className='hero-container-Management'>
                <div className='hero-content-Management RentalAgreement-hero'>
                    <h1>Rental Agreement</h1>
                    <p>Here you can find details of RestNest Vacation Homes (herein referred to as “RN”) policies. the following Policies, Responsibilities and Disclaimers apply to each confirmed reservation</p>
                </div>
             </div>
        </section>
        <section className='RentalAgreement-sec'>
            <div className='RentalAgreement-container'>
                <div className='RentalAgreement-list'>
                    <h2>List agreements</h2>
                    <Link to='#RENTER-REQUIREMENTS'>RENTER REQUIREMENTS</Link>
                    <Link to='#DOWN-PAYMENT'>DOWN PAYMENT/ PAYMENT</Link>
                    <Link to='#BALANCE-PAYMENT'>BALANCE PAYMENT</Link>
                    <Link to='#ARRIVAL-TIME'>ARRIVAL TIME</Link>
                    <Link to='#DEPARTURE-TIME'>DEPARTURE TIME</Link>
                    <Link to='#CANCELLATIONS'>CANCELLATIONS</Link>
                    <Link to='#NUMBER'>NUMBER OF GUESTS/CONDUCT OF GUESTS</Link>
                    <Link to='#UPON-ARRIVAL'>UPON ARRIVAL</Link>
                    <Link to='#DAMAGE-POLICY'>DAMAGE POLICY</Link>
                    <Link to='#EMERGENCIES'>EMERGENCIES/ MAINTENANCE</Link>
                    <Link to='#POWER'>POWER/ WEATHER RELATED CANCELLATION</Link>
                    <Link to='#CLEANING-FEE'>CLEANING FEE</Link>
                    <Link to='#CLEANING-REQUIREMENTS'>CLEANING REQUIREMENTS</Link>
                    <Link to='#LINENS'>LINENS & TOWELS</Link>
                    <Link to='#SMOKING'>SMOKING</Link>
                    <Link to='#PLUMBING'>PLUMBING</Link>
                    <Link to='#SATELLITE'>SATELLITE TV & INTERNET</Link>
                    <Link to='#LEFT-ITEMS'>LEFT ITEMS</Link>
                </div>
                <div className='RentalAgreement-data'>
                    <div id='RENTER-REQUIREMENTS' className='RentalAgreement-single-data'>
                        <h1 >RENTER REQUIREMENTS</h1>
                        <div className='gary-line'></div>
                        <p>For legal and accounting purposes, the person placing the reservation must be the same as the credit/debit card holder & an occupant in the home. This person is considered to be the Guest. All other persons involved with the rental are considered to be the Guest’s invitees, and all discussions regarding reservation, cancellation and damage policies will be discussed with the Guest, not the Guest’s invitees. The Guest understands that RN rents to responsible adults with a minimum age of 30. If your group is all adults, then all guests must meet our minimum age of 30.</p>
                    </div>
                    <div id='DOWN-PAYMENT' className='RentalAgreement-single-data'>
                        <h1 >DOWN PAYMENT/ PAYMENT</h1>
                        <div className='gary-line'></div>
                        <p>A 50% deposit must be paid at the time of booking to confirm property and is considered non-refundable however it is considered transferable in the form of a CREDIT with NO EXPIRY if you choose to cancel prior to Final Payment. The remaining balance will be due 45 days prior to arrival. Upon receipt of payment, all final payments are considered non-refundable but transferable in the form of a CREDIT with NO EXPIRY if you cancel up to 31 days prior to arrival. Where full payment is required at the time of booking, all monies are deemed non-refundable upon receipt of payment but transferable in the form of a CREDIT with NO EXPIRY if you cancel up to 31 days prior to arrival. Within 31 days of arrival, all reservations are considered non-refundable and non-transferable. Please review our FORCE MAJEURE policy in the case of circumstances beyond our control.</p>
                    </div>
                    <div id='BALANCE-PAYMENT' className='RentalAgreement-single-data'>
                        <h1 >BALANCE PAYMENT</h1>
                        <div className='gary-line'></div>
                        <p>If no other payment is received 45 days prior to arrival, we will automatically run the balance on the credit card on file. Balance is due no later than 45 days prior to your arrival date. We can keep the balance payment on the same credit card used for the initial payment or you can call with a different credit card.</p>
                    </div>
                    <div id='ARRIVAL-TIME' className='RentalAgreement-single-data'>
                        <h1 >ARRIVAL TIME</h1>
                        <div className='gary-line'></div>
                        <p>For legal and accounting purposes, the person placing the reservation must be the same as the credit/debit card holder & an occupant in the home. This person is considered to be the Guest. All other persons involved with the rental are considered to be the Guest’s invitees, and all discussions regarding reservation, cancellation and damage policies will be discussed with the Guest, not the Guest’s invitees. The Guest understands that RN rents to responsible adults with a minimum age of 30. If your group is all adults, then all guests must meet our minimum age of 30.</p>
                    </div>
                    <div id='DEPARTURE-TIME' className='RentalAgreement-single-data'>
                        <h1 >DEPARTURE TIME</h1>
                        <div className='gary-line'></div>
                        <p>Check-out is at 10 am. Your prompt departure is appreciated so we can prepare the home for any incoming guests. A 1-hour late departure may be arranged pending other reservations and the housekeeping schedule. If you have not arranged for a late checkout, you may be charged $35 for each hour beyond 10 am you are still on the property, at a minimum of one hour. If the home has not been vacated by 3 pm, a fee equal to the rental rate of 2 ½ days may be assessed.</p>
                    </div>
                    <div id='CANCELLATIONS' className='RentalAgreement-single-data'>
                        <h1 >CANCELLATIONS</h1>
                        <div className='gary-line'></div>
                        <p>Cancellations and reschedules made by the Guest may be made up to 60 days before the first day of your reservation. Full refund for cancellations made within 48 hours of booking, if the check-in date is at least 14 days away.  Cancellations or reschedules made by Guest with less than 60 days notice will result in 100% loss of all payments less any security deposit or damage waiver.  All reservation changes must be acknowledged in writing.</p>
                    </div>
                    <div id='NUMBER' className='RentalAgreement-single-data'>
                        <h1 >NUMBER OF GUESTS/CONDUCT OF GUESTS</h1>
                        <div className='gary-line'></div>
                        <p>Our maximum occupancy refers to the number of people allowed in the home at any given time (ie includes guests & visitors), some of which may be mandated by certain regulations. Exceptions towards the maximum number of people allowed may be made for children under the age of 2. Guest(s) agrees that more than the number of people stated on the reservation shall not occupy the premises. The number of guests includes visitors, even if they are not staying overnight. Unauthorized people at the home at any time will result in a double charge for each additional guest or a maximum occupancy charge (whichever is more), and loss of any security deposit, in addition to any and all damage, disturbance, and cleaning charges. The rental is not intended for parties, nor gatherings at any time of anyone except those who have paid to occupy the property. Exceptions are made on an individual basis – please contact RN for prior approval. If there is excessive noise or music, any illegal activity, or evidence of a violation of these policies, you may be asked to vacate the premise without any refund and additional charges may be assessed. Please inform us of any change in the number of guests before your arrival to avoid these charges and so the home can be prepared appropriately for your group. No exceptions or refunds are given for changes in the number of guests after your arrival.</p>
                    </div>
                    <div id='UPON-ARRIVAL' className='RentalAgreement-single-data'>
                        <h1 >UPON ARRIVAL</h1>
                        <div className='gary-line'></div>
                        <p>Take a look around the home. If there are concerns or issues with your rental property, please immediately contact our office (leave a message if there is no answer). No refunds or considerations are given unless were notified of problems during your stay. We will provide a form for you to document any pre-existing damage so you won’t be held responsible, as well as a claim form for any damage that happens during your stay (if you purchased the Vacation Rental Damage insurance).</p>
                    </div>
                    <div  id='DAMAGE-POLICY' className='RentalAgreement-single-data'>
                        <h1>DAMAGE POLICY</h1>
                        <div className='gary-line'></div>
                        <p>Every reservation requires a $79 Property Damage Protection policy (“PDP”). This PDP plan covers unintentional damages to the rental unit interior that occur during your stay, provided they are disclosed to management prior to check out. The policy will pay a maximum benefit of $1,500. Any damages that exceed $1,500 will be charged to the credit card on file. If you damage the real or personal property assigned to your rental accommodation during the trip, the Insurer will reimburse the lesser of the cost of repairs or replacement of the property, up to $1,500.
                        As a condition to the rental of all Vacation Properties, RN reserves the right to charge the Guest’s credit card for any and all uncovered Guest/Invitee caused losses and damages sustained to the Vacation Property throughout the duration of their period of occupancy. In the event of any uncovered Guest/Invitee-caused loss or damage to the Vacation Property, including, but not limited to, undue cleaning, eviction, service calls, service charges, fines/assessments, repairs or replacements, plus all applicable taxes, RN is hereby granted the right to charge the Guest’s credit card. An itemized statement outlining all associated costs will be sent via regular or electronic mail to the address submitted by the Guest at such time as the reservation was booked. By written or electronic endorsement of this Agreement, the Guest hereby agrees to pay for all such charges, as defined above and on the proceeding pages.  </p>
                    </div>
                    <div id='EMERGENCIES' className='RentalAgreement-single-data'>
                        
                        <h1 >EMERGENCIES/ MAINTENANCE</h1>
                        <div className='gary-line'></div>
                        <p>In the event of a problem getting in the home or if there are problems with the condition or functionality of the home, please immediately contact the RN office (leave a voice message if there is no answer) at (778) 858-4942. If it is after office hours we will make every effort to return your call as soon as possible.  For after-hours emergencies only, please contact (leave a voice message if there is no answer and text) (778) 858-4942.</p>
                    </div>
                    <div id='POWER' className='RentalAgreement-single-data'>
                        <h1 >POWER/ WEATHER RELATED CANCELLATION</h1>
                        <div className='gary-line'></div>
                        <p>RN does NOT issue refunds due to acts of nature such as weather, road conditions, snow conditions, power outages or fires. If the property is uninhabitable due to such circumstances and you did not purchase insurance, reservations can be rescheduled for future dates within one year of the reservation date.</p>
                    </div>
                    <div id='CLEANING-FEE' className='RentalAgreement-single-data'>
                        <h1 >CLEANING FEE(s)</h1>
                        <div className='gary-line'></div>
                        <p>A non-refundable cleaning fee is required with all reservations. This fee is for our housekeepers who dust, vacuum, sanitize, clean linens and towels, maintain the hot tub and remove refuse from the property. Guest(s) are required to follow all check-out procedures detailed in this agreement and leave the property in the same general and good habitable condition it was in when the Guest(s) arrived. Undue and/or unreasonable cleaning of the cabin shall be charged to the Guest’s/Cardholder’s credit card as an Additional Cleaning Charge at a rate of up to $75/hour, with a one-hour minimum. This also applies to the property exterior, grounds, BBQs and hot tubs (if so equipped).</p>
                    </div>
                    <div id='CLEANING-REQUIREMENTS' className='RentalAgreement-single-data'>
                        <h1 >CLEANING REQUIREMENTS</h1>
                        <div className='gary-line'></div>
                        <p>A starter supply of expendable supplies such as paper goods and soap is provided; please bring additional if you feel this will not be adequate. Basic cleaning supplies are stocked to do your own cleaning during your stay. Housekeeping is not provided during your stay unless previously arranged. Failure to comply with pre-departure cleaning requirements resulting in excessive cleaning will be charged to your credit card at $75/hour, with a one-hour minimum:</p>
                        <ul>
                            <li>Place soiled towels in the bathtub.</li>
                            <li>All dirty dishes, cookware and eating utensils should be washed, rinsed, dried and put away in the proper location.</li>
                            <li>Floors should be in generally good condition and ready to be vacuumed by our housekeepers.</li>
                            <li>All household trash & garbage should be picked up & put in the appropriate waste bins/containers.</li>
                            <li>Refrigerator and microwave should be left clean and free of food.</li>
                            <li>All appliances (stove, oven, BBQ, etc.) should be left in a clean condition and free of spills and grease.</li>
                            <li>Please wipe down counters and other surfaces.</li>
                            <li>All litter must be picked up from the premises and placed in the outside garbage cans, tied securely in trash bags.</li>
                            <li>Please try not to leave any pet hair in the home! Duct tape works great on furniture</li>
                            <li>GLITTER AND CONFETTI ARE NOT ALLOWED AT ANY PROPERTY, INSIDE OR OUTSIDE.</li>
                        </ul>
                    </div>
                    <div id='LINENS' className='RentalAgreement-single-data'>
                        <h1 >LINENS & TOWELS</h1>
                        <div className='gary-line'></div>
                        <p>Bath towels, sheets, pillows and blankets are provided. DO NOT take the home’s linens or bath towels outside. Bring items with you that you may need for beach use, sunbathing, or smoking outside. Please allow us to wash the home’s linens unless you need clean linens during your stay.</p>
                    </div>
                    <div id='SMOKING' className='RentalAgreement-single-data'>
                        <h1 >SMOKING</h1>
                        <div className='gary-line'></div>
                        <p>Smoking is NOT permitted on any RN Property or anywhere outside the premises. If there is any tobacco smell in the home after your departure, there will be a minimum $250 charge. Oil lamps and incense are not permitted due to the long-lasting odour. If these policies are violated, there will be a charge for excessive cleaning.</p>
                    </div>
                    <div id='PLUMBING' className='RentalAgreement-single-data'>
                        <h1 >PLUMBING</h1>
                        <div className='gary-line'></div>
                        <p>Do not put any feminine products in the toilet. The toilets may be water-saving models and don’t have a strong flush – limiting the amount of toilet paper used will help prevent a clog. Plungers are provided if a clog occurs. Please do not pour grease down the drain.</p>
                    </div>
                    <div id='SATELLITE' className='RentalAgreement-single-data'>
                        <h1 >SATELLITE TV & INTERNET</h1>
                        <div className='gary-line'></div>
                        <p> All properties are privately owned and have different subscription packages for cable and/or satellite and internet. RN does not guarantee any programs, events or reception. Guest(s) are liable for ordering any Pay Per View.</p>
                    </div>
                    <div id='LEFT-ITEMS' className='RentalAgreement-single-data'>
                        <h1 >LEFT ITEMS</h1>
                        <div className='gary-line'></div>
                        <p>Please check carefully for belongings before you leave. Guests must send RN a self-addressed prepaid stamped envelope to have left items returned OR remit at $25 payment via PayPal (larger/heavier items may require an additional fee).  Pick-up may also be arranged at our West Kelowna office. RN is not responsible for lost or stolen items.  Any left items not claimed within 30 days will be donated to Goodwill.</p>
                    </div>

                </div>
            </div>
        </section>
    </Layout>
  )
}

export default RentalAgreement