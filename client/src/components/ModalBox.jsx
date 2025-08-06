import React, { useState } from 'react';
import EnquiryForm from '../pages/EnquiryForm';
import { RxCross1 } from "react-icons/rx";

const ModalBox = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="absolute min-h-screen hidden lg:flex md:flex">
      <button
        onClick={openModal}
        className="fixed -rotate-90 top-1/2 -right-[4.2rem] px-6 py-5 bg-[#bea05a]  text-white font-semibold rounded-t-lg z-50 shadow-lg text-sm sm:text-base"
      >
        Admission Enquiry
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[20000] p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-4 sm:p-6 md:p-6">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-xl text-white bg-[#bea05a] rounded-full p-2"
              >
                <RxCross1 />
              </button>
              <EnquiryForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalBox;

