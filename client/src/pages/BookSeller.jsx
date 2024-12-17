import React from 'react'
import BookSellerPdf from '../assets/ListofAuthorisedBookSellers.pdf'

const BookSeller = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src={BookSellerPdf}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="PDF Viewer"
      ></iframe>
    </div>
  )
}

export default BookSeller
