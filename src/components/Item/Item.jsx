import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({item }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
  } = item;

  return (
    <div className="mb-6">
      <div className="card bg-base-100 w-72 shadow-xl h-96 border">
        <figure >
          <img 
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="text-lg font-bold">{product_title}</h2>
          <p>Price: ${price}</p>
          
          <div className="card-actions justify-end">
          <Link to={`items/${product_id}`} key={product_id}>
          <button className="text-purple-600 border border-orange-700 border-x-purple-700 rounded-2xl p-2">View Details</button>
          </Link>
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

Item.propTypes={
item: PropTypes.object,
};

export default Item;
