// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mobile: '',
//     email: '',
//     className: '',
//     state: '',
//     city: '',
//     termsAccepted: false,
//     countryCode: '+91',  // Default to India (+91)
//   });

//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [countryCodes, setCountryCodes] = useState([]); // List of country codes and validation patterns
//   const [isStateSelected, setIsStateSelected] = useState(false);

//   // Fetch states and country codes on component mount
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/states');
//         setStates(response.data);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     };

//     const fetchCountryCodes = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/country-codes');
//         setCountryCodes(response.data);
//       } catch (error) {
//         console.error("Error fetching country codes:", error);
//       }
//     };

//     fetchStates();
//     fetchCountryCodes();
//   }, []);

//   // Handle state selection change
//   const handleStateChange = async (e) => {
//     const selectedState = e.target.value;
//     setFormData({
//       ...formData,
//       state: selectedState,
//       city: '', // Reset city when state changes
//     });

//     // Fetch cities for the selected state
//     if (selectedState) {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/cities/${selectedState}`);
//         setCities(response.data);
//         setIsStateSelected(true);
//       } catch (error) {
//         console.error("Error fetching cities:", error);
//         setCities([]);
//         setIsStateSelected(false);
//       }
//     } else {
//       setCities([]);
//       setIsStateSelected(false);
//     }
//   };

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value
//     });
//   };

//   // Validate mobile number based on country code
//   const validateMobile = (mobile) => {
//     const selectedCountry = countryCodes.find(
//       (country) => country.code === formData.countryCode
//     );
//     if (selectedCountry) {
//       return selectedCountry.pattern.test(mobile);
//     }
//     return false;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isStateSelected && validateMobile(formData.mobile)) {
//       alert("Form submitted successfully!");
//     } else {
//       alert("Please enter a valid mobile number and select a state and city.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">Student Registration</h2>
//       <form onSubmit={handleSubmit} className="registration-form">
//         {/* First Name */}
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             placeholder="Enter First Name"
//           />
//         </div>

//         {/* Last Name */}
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Last Name"
//           />
//         </div>

//         {/* Mobile Number with Country Code */}
//         <div className="form-group">
//           <label htmlFor="mobile">Mobile Number:</label>
//           <div className="mobile-input">
//             <select
//               name="countryCode"
//               value={formData.countryCode}
//               onChange={handleChange}
//             >
//               {countryCodes.map((country, index) => (
//                 <option key={index} value={country.code}>
//                   {country.code} ({country.name})
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               placeholder="Enter Mobile Number"
//               maxLength="10"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Email"
//           />
//         </div>

//         {/* Class */}
//         <div className="form-group">
//           <label htmlFor="className">Class:</label>
//           <input
//             type="text"
//             id="className"
//             name="className"
//             value={formData.className}
//             onChange={handleChange}
//             required
//             placeholder="Enter Class"
//           />
//         </div>

//         {/* State Selection */}
//         <div className="form-group">
//           <label htmlFor="state">State:</label>
//           <select
//             name="state"
//             id="state"
//             value={formData.state}
//             onChange={handleStateChange}
//             required
//           >
//             <option value="">Select a state</option>
//             {states.map((state, index) => (
//               <option key={index} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* City Selection */}
//         <div className="form-group">
//           <label htmlFor="city">City:</label>
//           <select
//             name="city"
//             id="city"
//             value={formData.city}
//             onChange={handleChange}
//             disabled={!isStateSelected}
//             required={isStateSelected}
//           >
//             <option value="">Select a city</option>
//             {cities.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Terms and Conditions */}
//         <div className="form-group">
//           <label>
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               checked={formData.termsAccepted}
//               onChange={handleChange}
//               required
//             />
//             Accept Terms and Conditions
//           </label>
//         </div>

//         {/* Submit Button */}

//         </form>
//         </div>
// )}
// export default RegistrationForm

// // server.js (Node.js with Express)
// const express = require('express');
// const app = express();
// const port = 5000;

// // List of country codes and mobile validation rules
// const countryCodes = [
//   { code: '+91', name: 'India', pattern: /^[0-9]{10}$/ },  // India
//   { code: '+1', name: 'USA/Canada', pattern: /^[0-9]{10}$/ },  // USA/Canada
//   { code: '+44', name: 'UK', pattern: /^[0-9]{10}$/ },  // UK
//   { code: '+61', name: 'Australia', pattern: /^[0-9]{9}$/ },  // Australia
//   { code: '+81', name: 'Japan', pattern: /^[0-9]{10}$/ },  // Japan
//   // Add more countries as needed
// ];

// // Endpoint to get country codes and associated mobile validation patterns
// app.get('/api/country-codes', (req, res) => {
//   res.json(countryCodes);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// import React, { Component } from "react";
// import Slider from "react-slick";

// function PauseOnHover() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default PauseOnHover;
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  customTransition="all 1s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  transitionDuration={1000}
>
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 2"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <WithStyles
    description="React Carousel with Server Side Rendering Support – Part 1"
    headline="w3js.com - web front-end studio"
    image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
</Carousel>