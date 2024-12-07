import PropTypes from "prop-types";
import React from "react";
import { RxCross2 } from "react-icons/rx";


const DashboardItems = ({item, handleRemove}) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
  } = item;


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
          <div>
            <h2 className="font-bold">{product_title}</h2>
            <p className="text-xs">{description}</p>
            <p className="text-xs">Price: ${price}</p>
          </div>
        </div>
        <div >
          <button onClick={()=>handleRemove(product_id)}>
          <h3 className="text-red-500">
            <RxCross2 />
          </h3>
          </button>
          
        </div>
      </div>
    </div>
  );
};

DashboardItems.propTypes ={
  item: PropTypes.object,
  handleRemove: PropTypes.func

}


export default DashboardItems;
