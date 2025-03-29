import React, { useState } from 'react'
import { Layout } from '../components/Layout';
import NavigationPages from './NavigationPages';
import JobBanner from "../assets/JobBanner.jpeg";

export default function FacultyPage() {
    document.title = "Our Faculty - GDGPS Aligarh";
    const [facultyData , setFacultyData] = useState([]);

    // useEffect(() => {

    // },[])
  return (
    <Layout>
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

        <NavigationPages/>

        <div>

        </div>
    </Layout>
  )
}
