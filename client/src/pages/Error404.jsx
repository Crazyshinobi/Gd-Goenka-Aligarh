import React from "react";
import error404 from "../assets/error404.png";
import { Helmet } from "react-helmet";
export const Error404 = () => {
  document.title = "Error 404";
  return (
    <>
    <Helmet>
  <title>404 - Page Not Found | GD Goenka Aligarh</title>
  <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to the homepage or explore our other sections." />
</Helmet>

    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <img src={error404} alt="" className="h-[400px]" />
      </div>
      <p>The page you are looking for doesn't exist.</p>
    </div>
    </>
  );
};
