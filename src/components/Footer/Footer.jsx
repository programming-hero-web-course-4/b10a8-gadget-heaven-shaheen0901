import React from "react";
import logo from "../../assets/Logo.webp"

const Footer = () => {
  return (
    <footer className=" bg-base-300 p-10">
      <div className="text-center border-b border-b-gray-400 pb-8 pt-12">
        <a className="text-xl font-extrabold ">
        <img className='h-8 mx-auto' src={logo} alt="GadgetHeaven" /></a>
        <p className="text-xs mt-3">Leading the way in cutting-edge technology and innovation</p>

      </div>
      <div className="footer text-base-content mt-8 ml-12">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
