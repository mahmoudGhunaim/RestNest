import React, { useState, useEffect } from 'react';
import "../components/style/PropertiesDetail.css";

const ImportData = ({ id55, setStartDate, setendDate, nights }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [listingsDate, setListingsDate] = useState(null);
  const [taxDetails, setTaxDetails] = useState([]);
  const [feeDetails, setFeeDetails] = useState([]);
  const [priceDetails, setPriceDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const calendarUrl = `https://api.hostaway.com/v1/listings/${id55}/calendar/priceDetails`;
      const payload = {
        endingDate: setendDate,
        startingDate: setStartDate,
        numberOfGuests: '5',
      };
      const options = {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      };

      try {
        const response = await fetch(calendarUrl, options);
        const data = await response.json();
        setListingsDate(data.result);

        // Assuming 'data.result.components' contains arrays for tax, fee, and price details
        setTaxDetails(data.result.components.tax || []);
        setFeeDetails(data.result.components.fee || []);
        setPriceDetails(data.result.components.price.map(price => ({
          ...price,
          pricePerNight: price.total / nights
        })));
        setTotalPrice(data.result.totalPrice);
      } catch (error) {
        
      }
    };

    fetchData();
  }, [id55, setStartDate, setendDate, nights]);

  return (
    <div className="inner-details">
      {listingsDate ? (
        <div>
          {priceDetails.map((price, index) => (
            <div key={index} className='desc-booking-detail'>
              <p>CA${price.pricePerNight} x {nights} nights</p>
              <p>CA${price.total.toLocaleString()}</p>
            </div>
          ))}
          {feeDetails.map((fee, index) => (
            <div key={index} className='desc-booking-detail'>
              <p>{fee.name}</p>
              <p>CA${fee.total.toLocaleString()}</p>
            </div>
          ))}
          {taxDetails.map((tax, index) => (
            <div key={index} className='desc-booking-detail'>
              <p>{tax.name}</p>
              <p>CA${tax.total.toLocaleString()}</p>
            </div>
          ))}
          <div className='desc-booking-detail'>
            <p>Total Price</p>
            <p>CA${totalPrice.toLocaleString()}</p>
          </div>
        </div>
      ) : (
        <p className='reservation'></p>
      )}
    </div>
  );
};

export default ImportData;
