import React from "react";

const PurchasedItems = ({item}) => {

    const {
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
 
      </div>
    </div>
  );
};

export default PurchasedItems;
