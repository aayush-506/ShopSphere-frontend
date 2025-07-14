import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import Title from '../components/Title';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
const { setCartItems, currency, delivery_fee, cartTotal } = useContext(ShopContext);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if (!paymentMethod) {
    toast.error('Please select a payment method.');
    return;
  }
  toast.success(`Order placed using: ${paymentMethod}`);
    setCartItems([]);
  navigate("/")
};


const subtotal = cartTotal

  const total = subtotal + delivery_fee;

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10 mb-56">

      <form onSubmit={handleSubmit} className="w-full lg:w-2/3 space-y-4">
       <div className='text-left pb-6 text-2xl uppercase'>
          <Title text1="Delivery" text2="Information" />
        </div>

        <div className="flex gap-4">
          <input required name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} className="w-1/2 border p-2 rounded" />
          <input required name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} className="w-1/2 border p-2 rounded" />
        </div>

        <input required name="email" placeholder="Email address" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input required name="street" placeholder="Street" value={form.street} onChange={handleChange} className="w-full border p-2 rounded" />

        <div className="flex gap-4">
          <input required name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-1/2 border p-2 rounded" />
          <input required name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-1/2 border p-2 rounded" />
        </div>

        <div className="flex gap-4">
          <input required name="zip" placeholder="Zip code" value={form.zip} onChange={handleChange} className="w-1/2 border p-2 rounded" />
          <input required name="country" placeholder="Country" value={form.country} onChange={handleChange} className="w-1/2 border p-2 rounded" />
        </div>

        <input required name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" />
              <button
         type='submit'
          className="w-full bg-black text-white py-3 rounded hover:opacity-90"
        >
          PLACE ORDER
        </button>
      </form>

     
      <div className="w-full lg:w-1/3 space-y-6">
      <div className='text-left pb-4 text-2xl uppercase'>
          <Title text1="CART" text2="Total" />
        </div>

        <div className="border-t pt-2 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{currency}{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span>{currency}{delivery_fee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{currency}{total.toFixed(2)}</span>
          </div>
        </div>

        <div>
          <p className="uppercase text-sm font-light mb-2">
            Payment <span className="font-semibold">Method</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {[ 'Cash on Delivery'].map((method) => (
              <label
                key={method}
                className="flex items-center gap-2 border px-4 py-2 rounded cursor-pointer"
              >
                <input required
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                <span
                  className={`${
                    method === 'Stripe'
                      ? 'text-blue-600 font-semibold'
                      : method === 'Razorpay'
                      ? 'text-blue-700 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {method}
                </span>
              </label>
            ))}
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default PlaceOrder;
