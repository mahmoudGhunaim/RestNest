import axios from 'axios';

const BASE_URL = 'https://api.hostaway.com/v1/';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ODYyMCIsImp0aSI6ImMyZmI1YjRiM2UxOGIyNWE0N2IwYWU5MmRiZDRlMjljNGY2MTg3MDRlY2M5MWM5ZTA5MDJlYzg4MWMzMjc4Y2MwOTZiODlkYjA0Y2ZmMjE3IiwiaWF0IjoxNjgwMjAxODE3LCJuYmYiOjE2ODAyMDE4MTcsImV4cCI6MTc0MzM2MDIxNywic3ViIjoiIiwic2NvcGVzIjpbImdlbmVyYWwiXSwic2VjcmV0SWQiOjEzNzAyfQ.ILnp24OkuH18ylsP6DDMWYX11fywUNi1XU_D5iPfpuDOFLpW4tcEQHlaYb94u8O3pERnv1iYENz_KPT6WGI6qFhL-gBA_tM10GWhJuZrSukIJYDWyv7x-WWsmfpUMcsvcQYXyWksAWY-wcCS4RmFtVIw0KWtVGJMy_h_yRs8Ypw';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-type': 'text/plain',
  },
});

export const getProperties = async (checkIn, checkOut, guests) => {
  try {
    const response = await axiosInstance.get('/listings', {
      params: { checkIn, checkOut, guests },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

export const calculateReservationPrice = async (listingId, data) => {
  try {
    const response = await axiosInstance.post(`/listings/${listingId}/calendar/priceDetails`, data);
    return response.data;
  } catch (error) {
    console.error('Error calculating reservation price:', error);
    throw error;
  }
};

export const getPropertyById = async (propertyId) => {
  try {
    const response = await axiosInstance.get(`/listings/${propertyId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching property by ID:', error);
    throw error;
  }
};

const Hostaway = {
  getProperties,
  calculateReservationPrice,
  getPropertyById,
};

export default Hostaway;
