import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import NavigationPages from './NavigationPages';
import JobBanner from "../assets/JobBanner.jpeg";
import axios from 'axios';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function FacultyPage() {
    document.title = "Our Faculty - GDGPS Aligarh";
    const [facultyData, setFacultyData] = useState([]);
    
    const apiUrl = process.env.REACT_APP_BASE_URL;

    const fetchFacultyData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/v1/faculty`);
            const result = response?.data?.data
            setFacultyData(result);
        } catch (error) {
            console.error("Error fetching faculty data:", error);
        }
    };

    useEffect(() => {
        fetchFacultyData();
    }, []); // Runs only once when component mounts

    return (
        <Layout>
          <Helmet>
  <title>Meet Our Faculty - GD Goenka Public School Aligarh</title>
  <meta name="description" content="Meet the dedicated teachers and educators who drive excellence at GD Goenka Public School Aligarh." />
</Helmet>

            <div className="relative bgImage">
                <h1 className="absolute bottom-4 shadow-md md:bottom-6 left-4 md:left-8 text-3xl md:text-5xl font-bold text-red-600 bg-white bg-opacity-80 px-4 py-2 rounded">
                    Faculty
                </h1>
                <img
                    src={JobBanner}
                    alt="Job Application Banner"
                    className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[40vh] w-full object-cover"
                />
            </div>

            <NavigationPages />

            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
  <div className="max-w-7xl mx-auto">
    {/* Animated Header */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Our <span className="relative inline-block">
          <span className="text-blue-600">Faculty Team</span>
          <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100/70 transform -skew-x-12"></span>
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Meet the dedicated educators guiding your learning journey
      </p>
    </motion.div>

    {/* Interactive Faculty Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {facultyData.map((teacher, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-center cursor-pointer"
        >
          {/* Interactive Profile Card */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 mb-4 group">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-100">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Animated Background Element */}
            <div className="absolute inset-0 rounded-full bg-blue-100 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
            
           
          </div>

          {/* Name with Hover Effect */}
          <div className="text-center px-2">
            <h3 className="font-semibold text-gray-800 text-sm md:text-base transition-colors group-hover:text-blue-600">
              {teacher.name.split(' ')[0]}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              {teacher.name.split(' ').slice(1).join(' ')}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
        </Layout>
    );
}
