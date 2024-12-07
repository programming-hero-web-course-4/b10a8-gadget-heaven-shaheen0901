import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HiSortDescending } from "react-icons/hi";
import "react-tabs/style/react-tabs.css";
import "./DashBoard.css";
import { getStoredCart, getStoredWishList } from "../../utilities/addToCart";
import DashboardItems from "../DashboardItems/DashboardItems";
import ReactModal from "react-modal";
import modalImage from "../../assets/Group.png"
import WishListItems from "../WishListItems/WishListItems";
import { Helmet } from "react-helmet-async";

// Set up modal element
ReactModal.setAppElement('#root')


const DashBoard = ({}) => {
  const data = useLoaderData();
  const navigate =useNavigate();
  
  // Managing Cart List
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = getStoredCart();
    const cartItems = data.filter((item) =>
        storedCartItems.includes(item.product_id)
    );
    setCartItems(cartItems);
  }, [data]);

 const removeFromCart =(itemID) =>{
   const updatedCartItems =cartItems.filter((item)=>item.product_id!==itemID);

   setCartItems(updatedCartItems);

   const storedCartItems =getStoredCart();
   const updatedStoredCart =storedCartItems.filter((id)=> id!==itemID);
   localStorage.setItem("cart-list", JSON.stringify(updatedStoredCart))
 };

 // Managing Wishlist
  const [wishListItems, setWishListItems] = useState([]);

  useEffect(() => {
    const storedWishListItems = getStoredWishList();
    const wishListItems = data.filter((item) =>
        storedWishListItems.includes(item.product_id)
    );
    setWishListItems(wishListItems);
  }, [data]);

  const removeFromWishList =(itemID) =>{
    const updatedWishListItems =wishListItems.filter((item)=>item.product_id!==itemID);
 
    setWishListItems(updatedWishListItems);
 
    const storedWishListItems =getStoredWishList();
    const updatedStoredWishListItems =storedWishListItems.filter((id)=> id!==itemID);
    localStorage.setItem("wish-list", JSON.stringify(updatedStoredWishListItems));
  };

  const moveToCart =(itemID) =>{
    
    const itemToMove =wishListItems.find((item)=>item.product_id===itemID);

    const updatedWishListItems =wishListItems.filter((item)=>item.product_id!==itemID);
    setWishListItems(updatedWishListItems);
 
    const storedWishListItems =getStoredWishList();
    const updatedStoredWishListItems =storedWishListItems.filter((id)=> id!==itemID);
    localStorage.setItem("wish-list", JSON.stringify(updatedStoredWishListItems));

    const updatedCartItems =[...cartItems, itemToMove];
    setCartItems(updatedCartItems);

    const storedCartItems =getStoredCart();
    storedCartItems.push(itemID);
    localStorage.setItem("cart-list", JSON.stringify(storedCartItems));
  };

    // Total Cost
    const totalCost =cartItems.reduce((total,item)=>total+item.price,0);


  // Sorting function
  const handleSortCartItems =()=>{
    const shortedCartItems =[...cartItems].sort((a,b)=>b.price -a.price);
    console.log(shortedCartItems);
    setCartItems(shortedCartItems)
  };

  // Modal function
  const [isModalOpen, setIsModalOpen] =useState(false);
  const openModal =() =>setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false)
    navigate('/')
  };

  const [totalForModal, setTotalForModal] =useState(0);
  

  // Purchase Function
  const handlePurchase =()=>{
    const storedPurchasedList= JSON.parse(localStorage.getItem('purchased-list')) || [];
    const purchasedItemsIds = cartItems.map(item =>item.product_id);
    const updatedStoredPurchasedList =[...storedPurchasedList, ...purchasedItemsIds ];
    localStorage.setItem('purchased-list', JSON.stringify(updatedStoredPurchasedList));
    const cartTotalCost = cartItems.reduce((total,item) => total+item.price,0);
    setTotalForModal(cartTotalCost);
    openModal();
    
    setTimeout(()=>{
      setCartItems([]);
   
      localStorage.setItem("cart-list", JSON.stringify([]));
    },1000); 
  };



  return (
    <div className="bg-gray-100">
      <Helmet>
      <title>Dashboard | GadgetHaven</title>
      </Helmet>
      <Tabs>
        <div className="bg-purple-600 pb-12">
          <div className="text-center pt-10 pb-12">
            <h2 className="text-2xl text-white font-bold">Dashboard</h2>
            <p className="text-white text-xs">
              Explore the latest gadgets that will take your experience to the
              next level. From smart device to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="flex gap-3 justify-center mx-auto">
            <TabList className="flex gap-3">
              <Tab className="custom-tab">Cart</Tab>
              <Tab className="custom-tab">Wishlist</Tab>
            </TabList>
          </div>
        </div>
        <div className="mt-5 w-3/4 mx-auto pb-20 p-4 rounded-lg">
          <TabPanel>
            <div className=" space-y-2 md:flex justify-between items-center">
              <h2 className="font-bold">Cart Items</h2>
              <div className=" space-y-2 md:flex gap-2 items-center">
                <h2 className=" font-bold">Total Cost: ${totalCost}</h2>
                <button onClick={handleSortCartItems} className=" border border-purple-600 rounded-xl p-1 flex gap-2 items-center">
                  Sort by Price
                  <HiSortDescending />
                </button>
                <button onClick={handlePurchase} className=" text-white border border-purple-600  bg-purple-500 rounded-xl p-1">
                  Purchase
                </button>
              </div>
            </div>
            <div>
              {cartItems.map((item) => (
                <DashboardItems
                  key={item.product_id}
                  item={item}
                  handleRemove={removeFromCart}
                ></DashboardItems>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="font-bold">Wishlist</h2>
            <div>
              {wishListItems.map((item) => (
                <WishListItems key={item.product_id}
                item={item}
                handleRemove={removeFromWishList}
                handleAddToCartFromWishList={moveToCart}>
                </WishListItems>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>

      <ReactModal 
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Purchase Confirmation"
      className="bg-white w-1/4 mx-auto p-5 rounded-lg shadow-lg"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className=" text-center space-y-5 ">
        <img className="mx-auto" src={modalImage} alt="" />
        <p>Thanks for purchasing. Total ${totalForModal}</p>
        <button onClick={closeModal} className="bg-purple-200 w-1/4 rounded-xl">Close</button>
        </div>
      </ReactModal>
    </div>
  );
};

export default DashBoard;
