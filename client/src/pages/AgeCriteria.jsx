import React from "react";
import { Layout } from "../components/Layout";
import ActivitesBanner from "../assets/age.jpeg";
import { motion } from "framer-motion";
import NavigationPages from "./NavigationPages";
import { Helmet } from "react-helmet";

const ageCriteria = [
  {
    className: "Nursery/PG",
    minAge: "3 Years",
    maxAge: "5 Years",
    bornBetween: "01-Apr-20 - 01-Apr-22",
  },
  {
    className: "LKG",
    minAge: "4 Years",
    maxAge: "6 Years",
    bornBetween: "01-Apr-19 - 01-Apr-21",
  },
  {
    className: "UKG",
    minAge: "5 Years",
    maxAge: "7 Years",
    bornBetween: "01-Apr-18 - 01-Apr-20",
  },
  {
    className: "Class 1",
    minAge: "6 Years",
    maxAge: "8 Years",
    bornBetween: "01-Apr-17 - 01-Apr-19",
  },
  {
    className: "Class 2",
    minAge: "7 Years",
    maxAge: "9 Years",
    bornBetween: "01-Apr-16 - 01-Apr-18",
  },
  {
    className: "Class 3",
    minAge: "8 Years",
    maxAge: "10 Years",
    bornBetween: "01-Apr-15 - 01-Apr-17",
  },
  {
    className: "Class 4",
    minAge: "9 Years",
    maxAge: "11 Years",
    bornBetween: "01-Apr-14 - 01-Apr-16",
  },
  {
    className: "Class 5",
    minAge: "9 Years",
    maxAge: "11 Years",
    bornBetween: "01-Apr-14 - 01-Apr-16",
  },
  {
    className: "Class 6",
    minAge: "10 Years",
    maxAge: "12 Years",
    bornBetween: "01-Apr-13 - 01-Apr-15",
  },
  {
    className: "Class 7",
    minAge: "11 Years",
    maxAge: "13 Years",
    bornBetween: "01-Apr-12 - 01-Apr-14",
  },
  {
    className: "Class 8",
    minAge: "12 Years",
    maxAge: "14 Years",
    bornBetween: "01-Apr-11 - 01-Apr-13",
  },
  {
    className: "Class 9",
    minAge: "13 Years",
    maxAge: "15 Years",
    bornBetween: "01-Apr-10 - 01-Apr-12",
  },
  {
    className: "Class 10",
    minAge: "14 Years",
    maxAge: "16 Years",
    bornBetween: "01-Apr-09 - 01-Apr-11",
  },
];

const AgeCriteria = () => {
  return (
    <Layout>
      <Helmet>
        <title>Age Criteria - GD Goenka Public School Aligarh</title>
        <meta
          name="description"
          content="Check the age requirements for admission to different classes at GD Goenka Public School Aligarh."
        />
      </Helmet>

      {/* Banner Section */}
      <motion.div
        className="relative h-[28vh] md:h-[60vh] lg:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={ActivitesBanner}
          alt="Activities Banner"
          className="h-full w-full object-fill"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.h1
          className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-xl md:text-5xl font-bold text-[#2a3c7e] bg-white bg-opacity-80 px-4 py-2 rounded shadow-md"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Age Criteria
        </motion.h1>
      </motion.div>

      <NavigationPages />

      <div className="max-w-4xl mx-auto my-8 p-6 bg-[#2a3c7e] shadow-lg rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-4">
          Age Criteria for AY 2025-26 Admissions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400">
            <thead className="bg-[#bea05a] text-white">
              <tr>
                <th className="border border-gray-400 px-4 py-2">Class</th>
                <th className="border border-gray-400 px-4 py-2">Min Age</th>
                <th className="border border-gray-400 px-4 py-2">Max Age</th>
                <th className="border border-gray-400 px-4 py-2">
                  Born Between
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-100 text-gray-800">
              {ageCriteria.map((item, index) => (
                <tr key={index} className="hover:bg-[#bea05a]">
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.className}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.minAge}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.maxAge}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.bornBetween}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-700 text-sm text-center">
          <strong>Note:</strong> The minimum age limit to appear for the CBSE
          Class 10th board exam is 14 years, meaning the candidate must have
          completed 14 years of age as of 31st December of the year of the
          examination.
        </p>
      </div>
    </Layout>
  );
};

export default AgeCriteria;
