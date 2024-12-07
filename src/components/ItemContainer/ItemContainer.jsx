import { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemContainer = () => {
  const [allItems, setAllItems] =useState([])
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data)
        setItems(data)
      });
  }, []);

  const handleCategory =(category)=>{
    if (category==="All"){
      setItems(allItems);
    }else {
      const filteredItems=allItems.filter((item)=>item.category===category);
      setItems(filteredItems);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="mt-12 space-y-3  md:grid grid-cols-4">
        <div className="p-2 space-x-2  md:flex flex-col col-span-1 items-center space-y-2">
          <button onClick={()=>handleCategory("All")} className="btn w-32">All Products</button>
          <button onClick={()=>handleCategory("Laptops")} className="btn w-32">
            Laptops
          </button>
          <button onClick={()=>handleCategory("Phones")} className="btn w-32">Phones</button>
          <button onClick={()=>handleCategory("Accessories")} className="btn w-32">Accessories</button>
          <button onClick={()=>handleCategory("SmartWatches")} className="btn w-32">SmartWatches</button>
        </div>
        <div className="col-span-3 text-center">
          <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {items.map((item) => (
              <Item key={item.product_id} item={item}></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;
