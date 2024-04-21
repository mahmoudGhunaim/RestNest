import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../components/style/index.css";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/style/index.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/Form"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CustmerSay from "../components/CustmerSay"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import FooterSec from '../components/FooterSec';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const IndexPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
   const swiper = useSwiper();
  const [listings, setListings] = useState([]);
  const [error, setError] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const currentDate = new Date(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams({
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
      num_adults: numAdults,
      num_children: numChildren,
      city: selectedLocation,
    }).toString();
  
    window.location.href = `../Properties?${searchParams}`;
  };  

  useEffect(() => {
    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const startDate = queryParams.get('start_date') || '';
    const endDate = queryParams.get('end_date') || '';
    const numAdults = parseInt(queryParams.get('num_adults'), 10) || 0;
    const numChildren = parseInt(queryParams.get('num_children'), 10) || 0;
    const totalGuests = numAdults + numChildren;
    const city = queryParams.get('city') || '';

    // Hostaway API token
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw';
  
    // Prepare the API request
    const url = new URL('https://api.hostaway.com/v1/listings');
    url.search = new URLSearchParams({
      availabilityDateStart: startDate,
      availabilityDateEnd: endDate,
      availabilityGuestNumber: totalGuests,
      location: city,
    }).toString();

  
    const headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
  
    // Make the API call
    fetch(url, { method: 'GET', headers: headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("aaa",data);
        setListings(data.result); // Update listings state with fetched data
      })
      .catch(error => {
        // Handle any errors here
        console.error('There was a problem with your fetch operation:', error);
      });
  }, [startDate, endDate, numAdults, numChildren, selectedLocation]);

  const options = [
    { value: 'placeholder', label: 'Select city', className: 'dropdown-placeholder' },
    { value: 'Whistler', label: 'Whistler' },
    { value: 'Kelowna', label: 'Kelowna' },
    { value: 'West Kelowna', label: 'West Kelowna' },
    { value: 'Peachland', label: 'Peachland' }
  ];
  const defaultOption = options[0];
  const _onSelect = (option) => {
    if (option.value !== 'placeholder') {
      setSelectedLocation(option.value); // Update the state with the selected city
      console.log('Selected city:', option.value);
    } else {
      setSelectedLocation(''); // Reset or handle the placeholder selection appropriately
    }
  };
const SliderButtons = ()=> {
  const swiper = useSwiper();
  return(
    <div className="btn-sliider">
          <button onClick={()=> swiper.slidePrev()} className=''><img src='/arrow-left.svg' /></button>
          <button onClick={()=> swiper.slideNext()} className=''><img src='/arrow-right.svg'/></button>
      </div>
  )
}
  return (
  <Layout>
                <Seo
            title="Luxury Vacation Rentals in British Columbia "
            description="Discover exclusive luxury vacation rentals in Kelowna, Whistler, and Vancouver with RestNest. Book waterfront grandeur, gardenside getaways, and serene poolside retreats. Enjoy premier properties with personal concierge services and quality insurance for peace of mind."
        />
    <section className='Home-Head-sec'>
      <div className='Home-Head-container'>
        <div className='Home-left-sec'>
          <h1>Book your <span>Luxury rentals</span>  British Columbia experience</h1>
          
        </div>
        <div className='Home-right-sec'>
          <div>
          <p>
          Treat yourself to the perfect getaway with our selection of British Columbia’s most exquisite short-term rental properties in Kelowna, Whistler, and Vancouver.
          </p>
          <Link to='/properties'><button>Explore all properties</button></Link>
          </div>
          
        </div>
        
      </div>
    </section>
    <div className="sec-img-home">
    <Swiper
                       breakpointsInverse= {true}
                       breakpoints={{
                         640: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                         },
                         768: {
                           slidesPerView: 1,
                           spaceBetween: 40,
                         },
                         1024: {
                           slidesPerView: 1,
                           spaceBetween: 50,
                         },
                         1030: {
                           slidesPerView: 1,
                           spaceBetween: 50,
                         },
                       }}
                 modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              // slidesPerView={4}
              // navigation
              direction="horizontal"
              autoplay={{ // Configure autoplay here
                delay: 5000, // Flip every 5 seconds
                
              }}
              loop={true} 
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide><img src='/1-min.jpg'/></SwiperSlide>
                <SwiperSlide><img src='/2-min.jpg'/></SwiperSlide>
                <SwiperSlide><img src='/3-min.jpg'/></SwiperSlide>
                <SwiperSlide><img src='/4-min.jpg'/></SwiperSlide>
                <SwiperSlide><img src='/5-min.jpg'/></SwiperSlide>
              </Swiper>
    </div>
    <div>
      <div>
      <form id="lmpm-property-search-filters" onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className="lmpm-search-fields DateRangePickerInput DateRangePickerInput_1">
          <div className="form-field DateInput DateInput_1">
          <h3>City</h3>
            <Dropdown  options={options}
              onChange={_onSelect}
              value={options.find(option => option.value === selectedLocation) || defaultOption}
              placeholder="Select city" />
          </div>
            <div className="form-field DateInput DateInput_1">
              <h3>Check in</h3>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={currentDate}
                placeholderText="Select Check-In Date"
              />
            </div>
            <div className="form-field DateInput DateInput_1">
              <h3>Check out</h3>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate ? new Date(startDate.getTime() + 86400000) : currentDate} // Add 1 day to start date for minDate
              
                placeholderText="Select Check-Out Date"
              />
            </div>
            <div className="form-field">
              <h3>Guests</h3>
              <select name="num_adults" id="num_adults" value={numAdults} onChange={(e) => setNumAdults(e.target.value)}>
                {/* Options for num_adults */}
                {Array.from({ length: 17 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} Adults
                  </option>
                ))}
              </select>
              <select name="num_children" id="num_children" value={numChildren} onChange={(e) => setNumChildren(e.target.value)}>
                {/* Options for num_children */}
                {Array.from({ length: 17 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} Children
                  </option>
                ))}
              </select>
            </div>
            <div className="button-container">
              <button type="submit"><img src='/search-normal.svg' alt="Search"/></button>
            </div>
          </div>
        </div>
      </form>
  
      </div>
      <section className="description-home-sec">
        <div className="description-home-container">
          <div className="description-home-title">
            <h1>Elevate Your Vacation Experience.</h1>
          </div>
          <div className="description-home-line"></div>
          <div className="description-home-p">
            <p>From the moment you arrive at your stunning vacation home, whether it's amidst the beautiful vineyards of Kelowna, the majestic mountains of Whistler, or the vibrant cityscape of Vancouver, you’ll be enamored by the charm and luxury we offer.</p>
            <p>Indulge in first-class comfort with our lavish properties, complete with luxury amenities and concierge service dedicated to your every desire. Focus on the finer aspects of life, like creating unforgettable memories with your loved ones in British Columbia's most desirable destinations.</p>
          </div>
        </div>
      </section>
    </div>
    <section className='Premier-sec'>
        <div className='Premier-container'>
          <div className='Premier-title'>
            <div className='Premier-h1'>
              <h1>Premier Properties Across BC <span>Guest favorites</span></h1>
              <div className='gold-line space-line'></div>
            </div>
            <div className='Premier-p'>
              <p>Experience the pinnacle of comfort and luxury with our guest-adored selections in British Columbia's most sought-after destinations: Kelowna, Whistler, and Vancouver.</p>
            </div>
          </div>
          <div className='Premier-card'>
                  {listings.length > 0 ? (
          <div className='Premier-card-big' >
            <h3>{listings[0].externalListingName}</h3>
            <div className='card-des-big'>
              <span><img src='/Vector (2).svg'/> {listings[0].bedroomsNumber}</span>
              <span><img src='/Vector (3).svg'/> {listings[0].bathroomsNumber}</span>
              <span><img src='/Vector (4).svg'/> {listings[0].guestsIncluded}</span>
              <span><img src='/Vector (5).svg'/> {listings[0].squareMeters ? `${listings[0].squareMeters} sqft` : 'N/A'}</span>
            </div>
            <Link to={`/PropertiesDetail/?listingMapId=${listings[0].id}`}><button>Learn more</button></Link>
          </div>
        ) : (
          <p>No listings found.</p>
        )}

    
            <div className='Premier-card-small'>
                
                {listings.length > 0 ? (
          <div className='Premier-card-small-f'>
            <h3>{listings[1].externalListingName}</h3>
            <div className='card-des-big'>
              <span><img src='/Vector (2).svg'/> {listings[1].bedroomsNumber}</span>
              <span><img src='/Vector (3).svg'/> {listings[1].bathroomsNumber}</span>
              <span><img src='/Vector (4).svg'/> {listings[1].guestsIncluded}</span>
              <span><img src='/Vector (5).svg'/> {listings[1].squareMeters ? `${listings[1].squareMeters} sqft` : 'N/A'}</span>
            </div>
            <Link to={`/PropertiesDetail/?listingMapId=${listings[1].id}`}><button>Learn more</button></Link>
          </div>
        ) : (
          <p>No listings found.</p>
        )}
                
                {listings.length > 0 ? (
          <div className='Premier-card-small-f'>
            <h3>{listings[2].externalListingName}</h3>
            <div className='card-des-big'>
              <span><img src='/Vector (2).svg'/> {listings[2].bedroomsNumber}</span>
              <span><img src='/Vector (3).svg'/> {listings[2].bathroomsNumber}</span>
              <span><img src='/Vector (4).svg'/> {listings[2].guestsIncluded}</span>
              <span><img src='/Vector (5).svg'/> {listings[2].squareMeters ? `${listings[2].squareMeters} sqft` : 'N/A'}</span>
            </div>
            <Link to={`/PropertiesDetail/?listingMapId=${listings[2].id}`}><button>Learn more</button></Link>
          </div>
        ) : (
          <p>No listings found.</p>
        )}
            </div>
          </div>
        </div>
    </section>
    <section className="card-sec-home">
      <div className="card-container-home">
        <div className="card-title-home">
          <h1>The benefits of booking direct</h1>
          
        </div>
        <div className="card-content-home">
              <div className="cards-home">
                <img src="gem 1.svg"/>
                <h1>Luxury, for less</h1>
                <p>Enjoy pristine landscapes and sparkling pools at a rate more affordable than any other platform. Booking directly saves you 15% compared to other sites. Our prices come straight from property owners, guaranteeing that we have the best offer available.</p>
              </div>
              <div className="cards-home">
                <img src="user-shield-solid 1.svg"/>
                <h1>Personal concierge service</h1>
                <p>Every RestNest booking includes a dedicated concierge, local to your chosen city, committed to making your stay memorable and comfortable. No middle man, just personalized service.</p>
              </div>
              <div className="cards-home">
                <img src="peace-solid 1.svg"/>
                <h1>Quality Insurance for Peace of Mind.</h1>
                <p>In addition to offering lower rates, booking directly through RestNest ensures higher quality insurance than competing platforms, providing you with the assurance you need to relax and enjoy.</p>
              </div>
        </div>
      </div>
    </section>
    <section className="slider-home">
      <div className="slider-container-home">
        <div className="slider-title-home-con">
        <div className="slider-title-home">
       
          <h1 >Don't just take our word for it—read what our guests have to say!</h1>
        </div>
        </div>
        {listings.length > 0 ? (
      <Swiper
                       breakpointsInverse= {true}
                       breakpoints={{
                         640: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                         },
                         768: {
                           slidesPerView: 1,
                           spaceBetween: 40,
                         },
                         1024: {
                           slidesPerView: 1,
                           spaceBetween: 50,
                         },
                         1030: {
                           slidesPerView: 1,
                           spaceBetween: 50,
                         },
                       }}
                 modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              // slidesPerView={4}
              // navigation
              direction="horizontal"
              autoplay={{ // Configure autoplay here
                delay: 5000, // Flip every 5 seconds
                
              }}
              loop={true} 
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              >
              <div className="clients-slider">
                  <SwiperSlide><SliderButtons />
                    <CustmerSay
                    linkpage={`/PropertiesDetail/?listingMapId=${listings[4].id}`}
                  imgSrc={listings[4].listingImages[0].url}
                  des="Perfection, that is the word that sums it all up.

                  We will only use RestNest for our holiday experiences from now on.
                  
                  What a great company that handles everything. From having bottled water chilled and ready, to checking in and making sure our stay was everything we imagined.
                  
                  Thanks for making our holiday great!
                  
                  I would also not hesitate to have them take care of our property rental, they seem to want the owner and the customer to both feel safe and happy with the rental agreement.
                  
                  " 
                  Name="Amanda"
                  location="Google review - 5 star"
                  />
              

                  </SwiperSlide>
                  <SwiperSlide><SliderButtons />
                    <CustmerSay
                    linkpage={`/PropertiesDetail/?listingMapId=${listings[1].id}`}
                  imgSrc={listings[1].listingImages[0].url}
                  des="We had such a wonderful time, we were sad to leave. The house is huge with lot of room for our family of 7. Very convenient location close to wineries, lake, beaches, and shopping. Shervin, the property manager, was very responsive to our requests and was very pleasant to deal with. He went out of his way to ensure our stay was a happy, comfortable and memorable one. My family fell in love with this home and can't wait to go back next year

                  Harry" 
                  Name="Harry"
                  location="Google review - 5 star"
                  />
              

                  </SwiperSlide><SwiperSlide><SliderButtons />
                    <CustmerSay
                    linkpage={`/PropertiesDetail/?listingMapId=${listings[11].id}`}
                  imgSrc={listings[11].listingImages[0].url}
                  des="We had a lovely stay. The house was spotless and very comfortable with lots of amenities (hot tub, sauna, steam room and built in wireless speakers). Short ride to the slopes/town. The host was friendly and responsive. We couldn't have been happier with the house." 
                  Name="Daniel"
                  location="Airbnb Review - 5 star"
                  />
              

                  </SwiperSlide><SwiperSlide><SliderButtons />
                    <CustmerSay
                    linkpage={`/PropertiesDetail/?listingMapId=${listings[1].id}`}
                  imgSrc={listings[1].listingImages[0].url}
                  des="Great stay. The house is big, lots of room for everyone. House has everything you need! Very convenient location, close to wineries and to the lake. The host is amazing, quick to respond. Highly recommend." 
                  Name="Yana"
                  location="Airbnb Review - 5 star"
                  />
              

                  </SwiperSlide><SwiperSlide><SliderButtons />
                    <CustmerSay
                    linkpage={`/PropertiesDetail/?listingMapId=${listings[3].id}`}
                    imgSrc={listings[3].listingImages[0].url}
                    des="Will stay again at this exact place when back in Kelowna. Responsive host, stunning views, beautiful interior. Within minutes (literally, minutes) of Mission Hill and other wineries." 
                    Name="Daniel"
                    location="Airbnb Review - 5 star"
                  />
              

                  </SwiperSlide>
                  
              </div>
              
          </Swiper>
           ) : (
            <p>No listings found.</p>
          )}
      </div>
    </section>
    <FooterSec/>
  </Layout>
  );
};



export default IndexPage
