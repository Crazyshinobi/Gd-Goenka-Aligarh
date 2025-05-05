import React from "react";
import mainImage from "../assets/admission_banner.png";
import "../css/ImageSection.css";
import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <div className="imageSection w-full flex flex-col bg-gradient-to-r  from-blue-50  to-blue-100 ">
      <div className="img  w-full">
        <Link
          to={`${process.env.REACT_APP_PDF_URL}/admission/application-form`}
        >
          <img
            className="w-full object-contain lg:rounded-b-[250px] lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:rounded-b-none"
            src={mainImage}
            alt="Gd-Goenka-School"
          />
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
