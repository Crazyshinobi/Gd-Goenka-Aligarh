import React from 'react';
import BookSellerPdf from '../assets/ListofAuthorisedBookSellers.pdf';

const BookSeller = () => {
  document.title = 'Book Seller';
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <iframe
        src={BookSellerPdf}  // Correctly use `src` here
        title="Book Seller List"
        className="w-full h-full"  // Make the iframe fill the screen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default BookSeller;
