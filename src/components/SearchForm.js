// src/components/SearchForm.js
import React, { useState } from 'react';
import { getProperties } from '../services/hostaway';
import { Link } from "gatsby"

const SearchForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  
  const handleSearch = async () => {
    try {
      const results = await getProperties(checkInDate, checkOutDate, adults + children);
      // Do something with the results
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <div>
      <div className="button-container">
         <Link to='/Properties'> <button type="submit"><img src='/search-normal.svg'/></button></Link>
        </div>
      {/* Bind the input values to your state and on submit call handleSearch */}
    </div>
  );
};

export default SearchForm;
