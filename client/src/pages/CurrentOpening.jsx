import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useFetchData } from '../hooks/useFetchData'; 
import { useNavigate } from 'react-router-dom';
import NavigationPages from './NavigationPages';

const CurrentOpening = () => {
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/job/`;
  const { data, loading, error} = useFetchData(apiURL);

  const [selectedJob, setSelectedJob] = useState(null); 
  const navigate = useNavigate()
  const jobs = data?.data || [];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    navigate('/application-form', { state: { job } });
  };

  return (
    <Layout>

        <NavigationPages/>

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Current Job Openings</h1>

        {/* Loading State */}
        {loading && <p>Loading job listings...</p>}

        {/* Error State */}
        {error && <p className="text-red-500">{`Error: ${error}`}</p>}

        {/* Jobs List */}
        {!loading && !error && jobs.length === 0 && <p>No job openings at the moment.</p>}

        <ul className="space-y-4">
          {jobs.map((job) => (
            <div key={job._id} className='border p-4 rounded-lg shadow-md flex flex-row items-center' >
              <div className='w-5/6'>
                  <h3 className="text-xl font-semibold">Profile: {job.name}</h3>
                  <p className="text-black font-bold">Subject: {job.subject}</p>
                  <p className="text-gray-500">Posted on: {new Date(job.createdAt).toLocaleDateString("en-GB")}</p>
              </div>

              <div className='w-2/12 flex justify-end'>
                <button
                  onClick={() => handleApplyClick(job)} 
                  className="text-blue-500 hover:underline"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </ul>

      </div>
    </Layout>
  );
};

export default CurrentOpening;