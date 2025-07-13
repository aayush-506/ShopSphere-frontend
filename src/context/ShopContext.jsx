import { createContext, useState } from "react";
import { products } from '../assets/frontend_assets/assets';




export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItems, setCartItems] = useState([]);

const addToCart = (item) => {
  console.log("Adding item to cart:", item);

  const exists = cartItems.find(
    (cartItem) => cartItem._id === item._id && cartItem.size === item.size
  );

  if (exists) {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem._id === item._id && cartItem.size === item.size
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    console.log("Updated cart (existing):", updatedCart);
    setCartItems(updatedCart);
  } else {
    const newCart = [...cartItems, { ...item, quantity: 1 }];
    console.log("Updated cart (new):", newCart);
    setCartItems(newCart);
  }
};


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
