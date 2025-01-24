import React, { useState } from 'react';
import { usePostRequest } from '../../hooks/usePostRequest';
import { useNavigate } from 'react-router-dom';
import {Toaster, toast } from 'react-hot-toast'
import { UserLayout } from '../components/UserLayout';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const apiUrl = usePostRequest(
    `${process.env.REACT_APP_BASE_URL}/api/v1/admission-application-query/`
  );

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the field being edited
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
        setLoading(true);
  
        try {
          // Submit admission form
          const queryResponse = await apiUrl.postRequest(formData);
  
          if (queryResponse?.success) {
              toast.success("Your Query submitted successfully!")
              setFormData({
                name:"",
                email : "",
                message : ""
              })
                navigate("/user/admission-query") 
  
            
          } else {
            toast.error("Admission submission failed!");
          }
        } catch (error) {
          console.error("Error in form submission:", error);
          toast.error("An error occurred. Please try again later.");
        } finally {
          setLoading(false);
        }
      } else {
       }


  };

  return (
    <>
    <UserLayout/>
    <Toaster/>
    <div className="lg:p-6 sm:ml-64 dark:bg-gray-800 min-h-screen md:mt-20 mt-20 lg:mt-0">
      <div className="p-6 border-2 border-gray-200 rounded-lg dark:border-white mt-14 bg-white dark:bg-gray-700 shadow-lg">

      <h2 className="text-2xl font-bold mb-6 text-center">Query Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            required
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
           {loading ? <div className="loader2"></div> : "Submit"}
          </button>
        </div>
      </form>
    </div>
    </div>
    <style>{`.loader2 {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }`}</style>
    </>
  );
};

export default QueryForm;