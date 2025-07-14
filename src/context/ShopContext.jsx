import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);


  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [products, setproducts] = useState([]);
  const [token, settoken] = useState("");

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

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setproducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

 const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
    addToCart,
    backendUrl,
    settoken,
    token,
    cartTotal
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
