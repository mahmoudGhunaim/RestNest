import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "gatsby"
import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import Form from '../components/Form';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LazyLoad from 'react-lazyload';
import "../components/style/Properties.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Seo from '../components/seo';
const Properties = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [areListingsEmpty, setAreListingsEmpty] = useState([]);
  async function fetchRequest(url, headers) {
    setIsLoading(true);
    setAreListingsEmpty(false);
    fetch(url, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setListings(data.result); // Assuming 'result' is the array of listings
        if (data.result.length === 0) {
          setAreListingsEmpty(true);
        }
      })
      .catch(error => {
        setError(error.message);
      }).finally(() => setIsLoading(false));
  }

  const [listings, setListings] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
    numAdults: 0,
    numChildren: 0,
    city: '',
  });

  useEffect(() => {
    const totalGuests = filter.numAdults + filter.numChildren;

    const url = new URL('https://api.hostaway.com/v1/listings');
    const headers = new Headers({
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw` // Use your actual API token
    });
    console.log('Filter Called');
    url.search = new URLSearchParams({
      availabilityDateStart: filter.startDate,
      availabilityDateEnd: filter.endDate,
      availabilityGuestNumber: totalGuests,
      city: filter.city,
    }).toString();

    fetchRequest(url, headers);
  }, [filter]); // Dependency array now includes `filter`

  const handleFilter = (startDate, endDate, numAdults, numChildren, city) => {
    setFilter({ startDate, endDate, numAdults, numChildren, city }); // Now includes city
  };

  useEffect(() => {
    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const startDate = queryParams.get('start_date') || '';
    const endDate = queryParams.get('end_date') || '';
    const numAdults = parseInt(queryParams.get('num_adults'), 10) || 0;
    const numChildren = parseInt(queryParams.get('num_children'), 10) || 0;
    const totalGuests = numAdults + numChildren;
    const city = queryParams.get('city') || '';;

    // Hostaway API token
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw';

    // Prepare the API request
    const url = new URL('https://api.hostaway.com/v1/listings');
    const headers = new Headers({
      'Authorization': `Bearer ${token}`
    });

    url.search = new URLSearchParams({
      availabilityDateStart: startDate,
      availabilityDateEnd: endDate,
      availabilityGuestNumber: totalGuests,
      city: city,
    }).toString();

    // Make the API call
    fetchRequest(url, headers);
  }, []); // Empty dependency array means this effect runs once on mount

  // Display the returned listings
  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log('adad', listings);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Layout>
      <Seo title="Premier Luxury Rentals in Kelowna, Whistler, Vancouver"
      description="Explore our handpicked selection of luxury rental properties across British Columbia. From waterfront grandeur to serene poolside retreats, find your perfect getaway with exclusive amenities and breathtaking views."/>
      <section className='form-property'>
        <Form onFilter={handleFilter} />
      </section>
      <section className='properties-sec'>
      <div className="properties-container">
          {areListingsEmpty ? (
            <div className='not-found-elements'>
              <img src='/Frame 48096312141414.svg' alt="No properties found" />
              <p>The property you are looking for is not available.<br/>Please feel free to search another property :)</p>
            </div>
          ) : (
            listings.map((listing, index) => {
        
                              
              return (
                <div className="property-card" key={listing.id}>
                  <Link to={`/PropertiesDetail/?listingMapId=${listing.id}`}>
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                    >
                     
                     {listing.listingImages.map((image, imageIndex) => {
    const listingId = listing.id; 
    let defaultImage = image.url[0];
    switch (listingId) {
        case 152960:
            defaultImage = '/Waterfront Grandeur.jpg';
            break;
        case 162405:
            defaultImage = '/Serenity Poolside Retreat.jpg';
            break;
        case 162409:
            defaultImage = '/Waterfront Splendor.jpg';
            break;
        case 162410:
            defaultImage = '/Okanagan Valley Villa.jpg';
            break;
        case 162411:
            defaultImage = '/Zenith Bluff.jpeg';
            break;
        case 165599:
            defaultImage = '/Casa Lakeview.jpeg';
            break;
        case 168852:
            defaultImage = '/Catbird House.jpeg';
            break;
        case 174759:
            defaultImage = '/Country_Home_near.jpg';
            break;
        case 180624:
            defaultImage = '/Downtown Delight.jpg';
            break;
        case 193813:
            defaultImage = '/Alpine Elegance Estate.jpg';
            break;
        case 193828:
            defaultImage = '/Santorini Skies Lakehouse.jpeg';
            break;
        case 245619:
            defaultImage = '/Serene Lakefront Haven_ 4BR.jpg';
            break;
        default:
            defaultImage = image.url;
            break;
    }
    if (imageIndex === 0) {
        return (
            <SwiperSlide key={image.id || imageIndex} className='properties-slide'>
                <LazyLoad height={200} once>
                    <img src={defaultImage} alt={listing.listingImages[0]?.caption} />
                </LazyLoad>
            </SwiperSlide>
        );
    } else {
        return (
            <SwiperSlide key={image.id || imageIndex} className='properties-slide'>
                <LazyLoad height={200} once>
                    <img src={image.url} alt={image.caption} />
                </LazyLoad>
            </SwiperSlide>
        );
    }
})}


                    </Swiper>
                    <div className='properties-card-des'>
                      <h3>{listing.externalListingName}</h3>
                      <div className='card-des'>
                        <span><img src='/bed-solid 1.svg' alt="bed" /> {listing.bedroomsNumber}</span>
                        <span><img src='/bath-solid 1.svg' alt="bath" /> {listing.bathroomsNumber}</span>
                        <span><img src='/users-solid 1.svg' alt="guests" /> {listing.guestsIncluded}</span>
                        <span><img src='/ruler-combined-solid 1.svg' alt="area" /> {listing.squareMeters ? `${listing.squareMeters}m²` : 'N/A'}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </section>
    </Layout>
  );
}
export default Properties;