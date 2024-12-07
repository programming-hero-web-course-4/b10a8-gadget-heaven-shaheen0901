import React from "react";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";

const WishListItems = ({ item, handleRemove, handleAddToCartFromWishList }) => {
  const { product_id, product_title, product_image, price, description } = item;

  return (
    <div>
      <div className="flex justify-between  mt-4 p-4 bg-white">
        <div className="flex gap-3">
          <figure className="w-32 rounded-xl">
            <img
              className="rounded-xl"
              src={product_image}
              alt={product_title}
            />
          </figure>
          <div className="space-y-2">
            <h2 className="font-bold">{product_title}</h2>
            <p className="text-xs"> <span className="font-bold">Description:</span> {description}</p>
            <p className="text-xs">Price: ${price}</p>
            <button onClick={()=>handleAddToCartFromWishList(product_id)} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-2xl">Add to Cart</button>
            
          </div>
        </div>
        <div>
          <button onClick={() => handleRemove(product_id)}>
            <h3 className="text-red-500">
              <RxCross2></RxCross2>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

WishListItems.propTypes={
  item:PropTypes.object, 
  handleRemove:PropTypes.func, 
  handleAddToCartFromWishList:PropTypes.func, 
}

export default WishListItems;
