import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./style/Form.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Form = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1); // Default to 1 adult
  const [numChildren, setNumChildren] = useState(0); // Default to 0 children
  const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
  const [selectedCity, setSelectedCity] = useState('');

  // Function to format date to 'YYYY-MM-DD'
  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Parse URL parameters and set form state
    const queryParams = new URLSearchParams(window.location.search);
    const start = queryParams.get('start_date');
    const end = queryParams.get('end_date');
    const adults = queryParams.get('num_adults');
    const children = queryParams.get('num_children');
    const city = queryParams.get('city');
    if (start) setStartDate(new Date(start));
    if (end) setEndDate(new Date(end));
    if (adults) setNumAdults(parseInt(adults, 10));
    if (children) setNumChildren(parseInt(children, 10));
    if (city) setSelectedCity(city);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    // Call the onFilter prop, passing the additional selectedLocation
    if (onFilter) {
      onFilter(formattedStartDate, formattedEndDate, numAdults, numChildren, selectedCity);
    }
  };;
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
      setSelectedCity(option.value);
      console.log('Selected city:', option.value);
    }
  };
  return (
    <>
      <form id="lmpm-property-search-filters" onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className="lmpm-search-fields DateRangePickerInput DateRangePickerInput_1">
          <div className="form-field DateInput DateInput_1">
          <h3>City</h3>
          <Dropdown
          options={options}
          onChange={(option) => setSelectedCity(option.value)}
          value={selectedCity || "Select  city"}
          placeholder="Select city"
        />
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
                excludeDates={[startDate]} // Exclude check-in date from selectable dates
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
    </>
  );
};

export default Form;
