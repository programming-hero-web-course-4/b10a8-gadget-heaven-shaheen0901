import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import { addToCartList, addToWishList } from "../../utilities/addToCart";
import ReactStars from 'react-rating-stars-component';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ItemDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const item = data.find((item) => item.product_id === product_id);

  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    rating,
    brand,
    warranty,
    specification,
  } = item;

  const [isWishListed, setISWishListed] = useState(false);

  const handleAddToCart = (id) => {
    addToCartList(id);
  };

  const handleWishList = (id) => {
    addToWishList(id);
    setISWishListed(true);
  };

  return (
    <div className="bg-gray-100 pb-96">
      <div className="relative bg-purple-600  ">
        <div className="text-center pt-10 pb-32">
          <h2 className="text-2xl text-white font-bold">Product Details</h2>
          <p className="text-white text-xs">
            Explore the latest gadgets that will take your experience to the
            next level. From smart device to the coolest accessories, we have it
            all!
          </p>
        </div>

        <div className="absolute border-2 rounded-3xl p-4 border-white bg-white  w-3/4 left-1/2 -bottom-20 file:transform -translate-x-1/2 translate-y-1/2 z-10">
          <div className="flex  gap-6">
            <div className="w-60">
              <img
                className="rounded-2xl"
                src={product_image}
                alt={product_title}
              />
            </div>
            <div className="text-left space-y-2">
              <h1 className="text-lg font-bold">{product_title}</h1>
              <p>Price: ${price}</p>
              <button className="text-xs text-green-700 border border-green-600 bg-green-100 rounded-xl p-1">
                {availability ? "In Stock" : "Out of Stock"}
              </button>
              <p className="text-xs">{description}</p>
              <h6 className="text-xs font-bold">Brand: {brand}</h6>
              <h6 className="text-xs font-bold">Specifications:</h6>
              <div>
                {specification.map((spec, index) => (
                  <li key={index} className="text-xs">
                    {spec}
                  </li>
                ))}
              </div>
              <h6 className="text-xs font-bold">Warranty: {warranty}</h6>
              <div className=" flex gap-2 items-center">
                <h6 className="text-xs font-bold">Ratings</h6>
                <h6 className="text-yellow-600">
                  <IoStarHalf />
                </h6>
                
              </div>
              <div className=" flex gap-2 items-center">
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <h6 className="text-xs font-bold">{rating}</h6>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleAddToCart(product_id)}
                  className="bg-purple-600 rounded-2xl p-1 flex gap-2 items-center text-white"
                >
                  <h6 className="text-xs font-bold">Add To Cart </h6>
                  <IoCartOutline />
                </button>
                <button
                  onClick={() => handleWishList(product_id)}
                  className=" bg-white border  border-gray-500 rounded-full p-1"
                  disabled={isWishListed}
                >
                  <h2
                    className={
                      isWishListed ? "text-gray-400" : "text-purple-600"
                    }
                  >
                    <FaRegHeart />
                  </h2>
                </button>

                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
