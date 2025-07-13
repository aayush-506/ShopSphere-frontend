import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import delete_icon from '../assets/frontend_assets/bin_icon.png'; 
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const {
    cartItems,
    currency,
    delivery_fee,
    setCartItems
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const removeFromCart = (item) => {
    setCartItems((prev) =>
      prev.filter(
        (cartItem) =>
          !(cartItem._id === item._id && cartItem.size === item.size)
      )
    );
  };

const updateQuantity = (item, quantity) => {
  console.log("Requested quantity change:", item._id, "to", quantity);

  if (quantity < 1) return removeFromCart(item);

  setCartItems((prev) => {
    const updated = prev.map((cartItem) =>
      cartItem._id === item._id && cartItem.size === item.size
        ? { ...cartItem, quantity }
        : cartItem
    );
    console.log("Updated cart:", updated);
    return updated;
  });
};



  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery_fee;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Your <span className="font-bold">Cart</span>
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={`${item._id}-${item.size}`}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image} 
                alt={item.name}
                className="w-[60px] h-[80px] object-cover rounded"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">
                  {currency}
                  {item.price}
                </p>
              </div>
              <span className="border px-2 py-1 ml-4 text-sm">
                Size: {item.size}
              </span>
            </div>

<div className="flex justify-between items-center space-x-4">
  <input
    type="number"
    min={1}
    value={item.quantity}
    onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
    className="border w-[100px] px-2 py-1"
  />
  <button onClick={() => removeFromCart(item)}>
    <img
      src={delete_icon}
      alt="Delete"
      className="w-5 h-5 cursor-pointer hover:opacity-70"
    />
  </button>
</div>


          </div>
        ))
      )}


      {cartItems.length > 0 && (
        <div className="mt-10 w-full max-w-md ml-auto">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Cart <span className="font-bold">Totals</span>
          </h3>
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>
              {currency}
              {subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>
              {currency}
              {delivery_fee}
            </span>
          </div>
          <div className="flex justify-between font-bold py-2 border-t mt-2">
            <span>Total</span>
            <span>
              {currency}
              {total.toFixed(2)}
            </span>
          </div>
          <button  onClick={()=>navigate("/place-order")} className="bg-black cursor-pointer text-white px-6 py-3 mt-6 w-full">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
