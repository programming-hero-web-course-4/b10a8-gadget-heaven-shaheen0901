import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Cart Related function

const getStoredCart = () => {
    const cartListStr = localStorage.getItem('cart-list');
    if (cartListStr) {
        const cartList = JSON.parse(cartListStr)
        return cartList;
    }
    else {

        return [];

    }
};

const addToCartList = (id) => {
    const cartList = getStoredCart();
    if (cartList.includes(id)) {
        toast.warning("Item is already added to the cart",{
            position:"top-center"
        });
        
    }
    else {
        cartList.push(id);
        const cartListStr=JSON.stringify(cartList);
        localStorage.setItem('cart-list', cartListStr);
        toast.success("You have added the item in the cart successfully",{
            position:"top-center"
        });
        // setCartItems(cartList);
    }
};




// Wishlist related Functions
const getStoredWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if (wishListStr) {
        const wishList = JSON.parse(wishListStr)
        return wishList;
    }
    else {

        return [];

    }
};

const addToWishList = (id) => {
    const wishList = getStoredWishList ();
    if (wishList.includes(id)) {
        toast.warning("Item is already added to the wish List",{
            position:"top-center"
        });
    }
    else {
        wishList.push(id);
        const wishListStr=JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
        toast.success("You have added the item successfully",{
            position:"top-center"
        });
    }
};

const getStoredPurchasedList=() =>{
    const purchasedListStr = localStorage.getItem('purchased-list');
    if(purchasedListStr){
        const purchasedList=JSON.parse(purchasedListStr)
        return purchasedList;
    } else{

        return [];

    }
};

const addToPurchasedList =(id)=>{
    const purchasedList =getStoredPurchasedList();
    purchasedList.push(id);
    localStorage.setItem('purchased-list', JSON.stringify(purchasedList));
};


export {addToCartList, getStoredCart, addToWishList, getStoredWishList, getStoredPurchasedList, addToPurchasedList};