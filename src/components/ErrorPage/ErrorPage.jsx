import React from "react";
import logo from "../../assets/Logo.webp";

const ErrorPage = () => {
  return (
    <div>
      <div className=" flex py-10 bg-purple-600 pb-12 h-96 items-center justify-center">
        <div className="text-center">
          <h2 className="text-7xl font-bold text-white"> 404 </h2>
          <h2 className="text-xl font-bold text-gray-200">
            {" "}
            Sorry, the page is not found{" "}
          </h2>
          <p className="text-sm  text-gray-200">
            {" "}
            The link you followed probably broken or the page has been removed
          </p>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
