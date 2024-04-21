import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import amenityImages from "../jsonFolder/amenities.json"
import DatePicker from 'react-datepicker';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import Hostaway from '../services/hostaway';
import 'react-datepicker/dist/react-datepicker.css';
import "../components/style/PropertiesDetail.css";
import Layout from "../components/layout";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImportData from './importData';
import SinglePrice from '../components/singlePrice';
import Seo from '../components/seo';
import { Map, Circle, GoogleApiWrapper, InfoWindow } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '450px',
};
const PropertiesDetail = (props) => {
  const [calendarAvailability, setCalendarAvailability] = useState({});
  const totalGuests = 1;
  const [properties, setProperties] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Auto');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [guests, setGuests] = useState(1);
  const [listings, setListings] = useState(null);
  const [error, setError] = useState('');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false);
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState([]); 
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [nights, setNights] = useState(0);
  const[ unavailable, setUnavailable] = useState([]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const milliseconds = ('00' + date.getMilliseconds()).slice(-3);
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  };
  const calculateNumberOfNights = (startDate, endDate) => {
    if (startDate && endDate) {
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      const start = new Date(startDate);
      const end = new Date(endDate);
      const calculatedNights = Math.round(Math.abs((end - start) / oneDay));
      setNights(calculatedNights); // Update nights in the component state
      return calculatedNights;
    } else {
      setNights(0); // Set nights to 0 if startDate or endDate is missing
      return 0;
    }
  };
  const handleDateChange = (newStartDate, newEndDate) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);

    if (newStartDate && newEndDate) {
      // Check if "Auto" is selected (modify the condition accordingly)
      if (selectedOption === 'Auto') {
        calculateNumberOfNights(newStartDate, newEndDate);
      }
    }
  };
  const handleBooking = (e) => {
    e.preventDefault(); 
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const nights = calculateNumberOfNights(startDate, endDate);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const queryParamsId = new URLSearchParams(window.location.search);
  const bookingId=queryParamsId.get('listingMapId');
    const url = `https://58620_1.holidayfuture.com/checkout/${bookingId}?start=${formattedStartDate}&end=${formattedEndDate}&numberOfGuests=${guests}&nights=${nights}`;
    window.location.href = url;
  };
  const onMapClicked = (props, map, clickEvent) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };
  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };
  var data;
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const fetchData = async () => {
      const id = queryParams.get('listingMapId');
      const baseUrl = 'https://api.hostaway.com/v1/listings';
      const url = `${baseUrl}/${id}`;
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw'; // Use the provided token
      try {
        const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        data = await response.json();
        setListings([data.result]); // Assuming 'result' contains the listing data including amenities
        setAmenities(data.result.amenities || []); // Assuming amenities are part of the listing data
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchData();
  }, []);


  
const fetchData = async () => {
  try {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('listingMapId');
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw'; // Replace with your actual token value

    const response = await fetch(`https://api.hostaway.com/v1/listings/${id}/calendar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
  } catch (error) {
   
  }
};

fetchData();

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch('/api/dates');
        const data = await response.json();

      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };
    if (listings && listings.length > 0) {
      setDescription(listings[0].description);
      setAmenities(listings[0].listingAmenities || []);
    }
  }, [listings]);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const fetchData = async () => {
      const id = queryParams.get('listingMapId');
      const baseUrl = 'https://api.hostaway.com/v1/listings';
      const url = `${baseUrl}/${id}`;
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw'; // Use the provided token
      try {
        const response = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setListings([data.result]); 
        setAmenities(data.result.amenities || []);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchData();
  }, []);

;
useEffect(() => {
  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('listingMapId');
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw'; // Replace with your actual token

      const calendarUrl = `https://api.hostaway.com/v1/listings/${id}/calendar`;
      const queryParamsCalendar = new URLSearchParams({
        availabilityDateStart: startDate,
        availabilityDateEnd: endDate,
        availabilityGuestNumber: totalGuests,
      });

      const headers = {
        'Authorization': `Bearer ${token}`,
      };

      const response = await fetch(`${calendarUrl}?${queryParamsCalendar}`, {
        headers: headers,
      });
      const data = await response.json();
      const listingsdate = data.result;

      let blockedDates = [];
      let availableDates = [];

      
      listingsdate.forEach((calendarDay) => {
        if (calendarDay.isAvailable == 0) {
          // Update state with new unavailable date
          setUnavailable(prevUnavailable => [...prevUnavailable, calendarDay.date]);
  
        }
        if (calendarDay.status === 'blocked') {
          blockedDates.push(calendarDay.date); // Keep as string if not manipulating dates
        } else if (calendarDay.status === 'available') {
          availableDates.push(calendarDay.date); // Keep as string if not manipulating dates
        }
      });

      // Update the state with the new arrays
      setBlockedDates(blockedDates);
      setAvailableDates(availableDates);

      // Process the calendar dates into a map of availability
      const calendarMap = processCalendarDates(blockedDates, availableDates);
      setCalendarAvailability(calendarMap);

    } catch (error) {
      console.error('Error fetching calendar data:', error);
    }
  };


    fetchData();
  
}, [startDate, endDate, totalGuests]);

// Function to create a map of date availability
const processCalendarDates = (blocked, available) => {
  const formatYmd = date => date.slice(0, 10); // Helper to format dates as YYYY-MM-DD if needed

  let day = new Date(startDate);
  const endDay = new Date(endDate);
  const calendarMap = {};

  // Initialize all dates in the range to unavailable (0)
  while (day <= endDay) {
    const formattedDate = formatYmd(day.toISOString());
    calendarMap[formattedDate] = 0; // Assume unavailable by default
    day.setDate(day.getDate() + 1);
  }

  // Set available dates to 1
  available.forEach(date => {
    const formattedDate = formatYmd(date);
    calendarMap[formattedDate] = 1;
  });

  // Set blocked dates to 0
  blocked.forEach(date => {
    const formattedDate = formatYmd(date);
    calendarMap[formattedDate] = 0;
  });

  return calendarMap;

}; 

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
 
  const toggleAmenities = () => {
    setIsAmenitiesExpanded(!isAmenitiesExpanded);
  };
  // Logic for displaying the description and amenities with "Read More"
  const descriptionLines = description.split('\n');
  const displayDescriptionn = ["Your", "Array", "Of", "Strings", "THE SPACES"];
  const shouldShowReadMoreDescription = descriptionLines.length > 8;
  const displayDescription = isDescriptionExpanded ? descriptionLines : descriptionLines.slice(0, 8);
  if (shouldShowReadMoreDescription && (
    <span id="toggleButton" onClick={toggleDescription}>
      {isDescriptionExpanded  ? 'Show Less' : 'Read More'}
    </span>
  ));

  const shouldShowReadMoreAmenities = amenities.length > 12;
  const displayAmenities = isAmenitiesExpanded ? amenities : amenities.slice(0, 12);
  if (shouldShowReadMoreAmenities && (
    <span id="toggleButton" onClick={toggleDescription}>
      {isAmenitiesExpanded   ? 'Show Less' : 'Show More'}
    </span>
  ));
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!listings) {
    return   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
              <CircularProgress />
            </Box>;
  }


  const firstListing = listings[0];
  const listingImages = firstListing.listingImages ? firstListing.listingImages.slice(0) : [];
  const firstImage = listingImages.length > 0 ? listingImages[0] : null;
 const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
 const queryParams2 = new URLSearchParams(window.location.search);
 const id2 = queryParams2.get('listingMapId');
 const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
      // Define the API URL

  return (
    <Layout>
        <Seo title={firstListing.externalListingName} />
      <section className='image-sec-det'>
         <div className='image-container-det'>  
          <div className="image-list-inner">
            <div className='Big-image-d'>
              <img src={firstImage.url} alt={firstImage.name || 'Listing'} />
              <button className="view-all-photos" onClick={() => setIsGalleryOpen(true)}>
                View All Photos
              </button>
              {
                  isGalleryOpen && (
                    <div className="gallery-modal" onClick={() => setIsGalleryOpen(false)}>
                      <div className="gallery-content" onClick={e => e.stopPropagation()}>
                        {listings[0].listingImages.map((image, index) => (
                          <img key={index} src={image.url} alt={`Listing ${index}`} />
                        ))}
                      </div>
                    </div>
                  )
                }
            </div>            
            <div className='small-image-d'>
            {listingImages.slice(1, 5).map((listing, index) => {
            const borderRadiusStyle = index === 1
                ? { borderRadius: '0 10px 0 0' }
                : index === 3
                ? { borderRadius: '0 0 10px 0' }
                : {};
        
            return (
                <div className={`listing-image-container-list${index === 0 ? ' separate-div' : ''}`} key={listing.url} data-toggle="modal" data-target="#exampleModalLong">
                <img
                    src={listing.url}
                    alt={listing.name || 'Listing'}
                    className="listing-image-list"
                    style={borderRadiusStyle}
                />
        
                </div>
            );
            })}
        </div>
          </div>
        </div>
      </section>
      <section className='detail-pro-sec'>
        <div className='detail-pro-container'>
          <div className='detail-pro-des'>
            <h1>{firstListing.externalListingName}</h1>
            <h6>House in {firstListing.city} , {firstListing.state}</h6>
            <div className='card-des-detail'>
            <span><img src='/bed-solid 1.svg'/> {firstListing.bedroomsNumber}</span>
            <span><img src='/bath-solid 1.svg'/> {firstListing.bathroomsNumber}</span>
            <span><img src='/users-solid 1.svg'/> {firstListing.guestsIncluded}</span>
            <span><img src='/ruler-combined-solid 1.svg'/> {firstListing.squareMeters ? `${firstListing.squareMeters}m²` : 'N/A'}</span>
          </div>
         

          {displayDescription.map((line, index) => (
      <p 
        key={index} 
        className="space-detail" 
        style={ line === "THE SPACES" || line === "PROPERTY OVERVIEW" ?  {
          fontSize: "24px",
          fontFamily: "'Cinzel'",
          fontWeight: 400,
          color: "#364250",
          marginTop: "15px",
          marginBottom: "15px",
        } : {}}
      >
        {line}
      </p>
    ))}
            <div className='space-for-space'></div>
            {shouldShowReadMoreDescription && (
              
            <span id="toggleButton" onClick={toggleDescription}>
              {isDescriptionExpanded  ? 'Show Less' : 'Read More'}
            </span>
  )}
               <h2>Amenities</h2>
               <div className="amenities-list">
               <div className='amenity-detail'>
               {displayAmenities.map((amenity, index) => {
                            const icon = amenityImages[amenity.amenityName];
  
                            return (
                                <div key={index} className='amenity-detail-single'>
                                  <i className={"fa " + icon}></i>
                                   {icon && <FontAwesomeIcon icon={['fas', icon]} />}
                                    <p className='amenity-single-detail'>{amenity.amenityName}</p>
                                </div>
                            );
                        })}
    </div>
             </div>
            {shouldShowReadMoreAmenities && (
              <span id="toggleButton" onClick={toggleAmenities}>
                {isAmenitiesExpanded  ? 'Show Less' : 'Show More'}
              </span>
            )}
          </div>
          <div className='pay-detail'>
          <h2><SinglePrice
          id55={id2}
          setStartDate={formattedStartDate}
          setendDate={formattedEndDate}
          nights={nights}
          /></h2>
        <form onSubmit={handleBooking}>
        <div className='form-data'>
          <div className="form-group">
            <label htmlFor="checkIn">Check In</label>
            <DatePicker
  selected={startDate}
  
        onChange={(date) => {
          setStartDate(date);
                  handleDateChange(date, endDate);// Adjust to call handleDateChange
        }}
        dateFormat="yyyy-MM-dd"
        id="checkIn"
        className="form-control"
        placeholderText="Select Check-In Date"
        minDate={currentDate}
        excludeDates={unavailable.map(date => new Date(date))}

/>
          </div>
          <div className="form-group">
            <label htmlFor="checkOut">Check Out</label>
            <DatePicker
  selected={endDate}
  onChange={(date) => {
    setEndDate(date);
    handleDateChange(startDate, date); // Adjust to call handleDateChange
  }}
  dateFormat="yyyy-MM-dd"
  id="checkOut"
  className="form-control"
  placeholderText="Select Check-Out Date"
  minDate={addDays(startDate, 1)} // Ensure check-out is at least the day after check-in
excludeDates={[...unavailable.map(date => new Date(date)), ...(startDate ? [startDate] : [])]}

/>
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <select
  id="guests"
  className="form-control"
  value={guests}
  onChange={(e) => setGuests(e.target.value)}
>
  {Array.from({ length: 10 }, (_, i) => i + 1).map((option) => (
    <option key={option} value={option}>
      {option} {option === 1 ? 'Guest' : 'Guests'}
    </option>
  ))}
</select>
          </div>        
          <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
            <ImportData
            id55={id2}
            setStartDate={formattedStartDate}
            setendDate={formattedEndDate}
            nights={nights}
            />
            <p>{firstListing.Tax}</p>
           </div>
        </div>
        
      </section>
      <section className='map-detail'>
      <div className='map-detail-des'>
              <h2>property location</h2>
              <Map
          google={props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{
            lat: firstListing.lat,
            lng: firstListing.lng
          }}
          className="map-map"
          onClick={onMapClicked}
        >
          <Circle
            center={{
              lat: firstListing.lat,
              lng: firstListing.lng
            }}
            radius={1000}
            strokeColor='#0000FF'
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor='#0000FF'
            fillOpacity={0.2}
            onClick={onMarkerClick}
          />
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={onMapClicked}
          >
            {/* Add your info window content here */}
            <div>
              <h3>{firstListing.name}</h3>
              {/* Add more listing details you want to show in the InfoWindow */}
            </div>
          </InfoWindow>
        </Map>
        
        </div>
      </section>
     
      <section className='checkout-mobile-sec'>
        <div className='checkout-mobile-container'>
        <div className="form-group form-group-mobile ">
        <h2 className='in-mobile-space'><SinglePrice
          id55={id2}
          setStartDate={formattedStartDate}
          setendDate={formattedEndDate}
          nights={nights}
          /></h2>
          <form className='check-in-out-mob-container'  onSubmit={handleBooking}>
          <div className='check-in-out-mob' onClick={() => document.querySelector('.check-in-out-mob .react-datepicker-wrapper input').click()}>
      <label>Check-In / Check-Out</label>
          <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => { 
                    const [startDate, endDate] = date;
                    setStartDate(startDate);
                    setEndDate(endDate);       
                    handleDateChange(startDate, endDate);
                }}
                isClearable={true}
                placeholderText="Select a date range"
                minDate={currentDate}
                excludeDates={unavailable.map(date => new Date(date))}
            />
        </div>
         <button type="submit" className="btn btn-primary">Book Now</button>
         </form>
    </div>
        </div>
       
      </section>
    </Layout>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAUOQUcvKESf8w4AobaXLdh56y3eR8QXKw'
})(PropertiesDetail);