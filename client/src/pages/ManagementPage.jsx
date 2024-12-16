import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import NavigationPages from './NavigationPages';
import School from '../assets/School.jpg'; // Replace with relevant image path
import PrincipalPhoto from '../assets/principal1.jpeg'; // Replace with the actual image path for Dr. Anubhav Lodhi

const ManagementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* Banner Section */}
      <div className='bgImage relative'>
        <h1 className='text-5xl absolute bottom-6 left-8 text-[#e1b671]'>ABOUT</h1>
        <img src={School} alt="GD Goenka School" className='h-[50vh] md:h-[40vh] lg:h-[80vh] w-full object-fill' />
      </div>

      {/* Navigation Section */}
      <NavigationPages />

      {/* Management Content Section */}
      <div className="managementMessageSection px-4 py-8 md:py-12">
        <h1 className='text-center text-4xl text-blue-900 mb-8'>Management Message</h1>

        <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Photo Section */}
          <div className="w-full md:w-1/3 flex justify-center items-center p-4">
            <img
              src={PrincipalPhoto}
              alt="Dr. Anubhav Lodhi"
              className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Principal's Content Section */}
          <div className="w-full md:w-2/3 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
              Dr. ANUBHAV LODHI
            </h2>
            <p className="italic text-gray-500 mb-4">M.Com, LLB, B.Ed, Ph.D.</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              “Education is not merely about filling a child’s mind with information but nurturing their ability to think critically, innovate, and embrace lifelong learning.”
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Anubhav Lodhi, the Principal of GD Goenka Public School, Aligarh, brings over two decades of expertise in education. Holding multiple prestigious degrees—M.Com, LLB, B.Ed, and Ph.D.—he is a dynamic leader committed to academic excellence and holistic student development. His vision is to create a learning environment that fosters curiosity, creativity, and leadership.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Dr. Lodhi’s leadership, GD Goenka Public School has emerged as a beacon of innovation and excellence, focusing on building strong values, critical thinking, and adaptability among students. His philosophy centers on empowering students with knowledge, ethics, and the confidence to face the challenges of a globalized world.
            </p>
          </div>
        </section>

        {/* Co-Manager Section */}
        <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Mrs. [Name of Co-Manager/Director]
          </h2>
          <p className="italic text-gray-500 mb-4">- Co-Manager/Director</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As part of the leadership team, Mrs. [Co-Manager's Name] is dedicated to ensuring the seamless operation of the school. Her passion for student welfare and attention to detail help create a positive, nurturing environment where children thrive academically and emotionally.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Together with Dr. Lodhi, she strives to maintain GD Goenka Aligarh’s reputation as a school committed to academic excellence, innovation, and student-centric education.
          </p>
        </section>

        
      </div>
    </Layout>
  );
};

export default ManagementPage;
