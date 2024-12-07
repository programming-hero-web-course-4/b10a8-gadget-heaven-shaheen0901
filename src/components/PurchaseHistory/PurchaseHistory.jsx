import React, { useEffect, useState } from "react";

import PurchasedItems from "../PurchasedItems/PurchasedItems";
import { useLoaderData } from "react-router-dom";
import { getStoredPurchasedList } from "../../utilities/addToCart";
import { Helmet } from "react-helmet-async";

const PurchaseHistory = () => {
  const data = useLoaderData();

  const [purchasedHistory, setPurchasedHistory] = useState([]);

  useEffect(() => {
    const storedPurchasedItems = getStoredPurchasedList();
    const itemsPurchased = data.filter((item) =>
      storedPurchasedItems.includes(item.product_id)
    );
    setPurchasedHistory(itemsPurchased);
  }, [data]);

  return (
    <div>
        <Helmet>
            <title>Purchase History | GadgetHaven</title>
        </Helmet>
      <div className="bg-purple-600 pb-12">
        <div className="text-center pt-10 pb-12">
          <h2 className="text-2xl text-white font-bold">Purchase History</h2>
          <p className="text-white text-xs">
            Explore the latest gadgets that will take your experience to the
            next level. From smart device to the coolest accessories, we have it
            all!
          </p>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-lg font-bold mx-5">
          Items you have bought in the past{" "}
        </h1>
      </div>
      <div>
        {purchasedHistory.map((item) => (
          <PurchasedItems key={item.product_id} item={item}></PurchasedItems>
        ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
