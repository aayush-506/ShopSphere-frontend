import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL


const Login = () => {
  const [currentState, setcurrentState] = useState('Sign Up');
  const { settoken, token} = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onSubmitHandler = async (event) => {
  event.preventDefault();

  try {
    if (currentState === 'Sign Up') {
      const response = await axios.post(backendUrl + `/api/user/register`, {
        name,
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Account created! Please login.");
        setcurrentState('Login');
        setname('');
        setemail('');
        setpassword('');
        navigate('/login'); // Redirect after signup
      } else {
        toast.error(response.data.message);
      }
    } else {
      // Login Flow
      const response = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Login successful!");
        settoken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Redirect to homepage
      } else {
        toast.error(response.data.message);
      }
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div className="min-h-screen flex mt-[200px] justify-center bg-white">
      <form onSubmit={onSubmitHandler} className="w-80 space-y-4">
        <h2 className="text-center text-3xl font-serif font-medium mb-6 border-b border-black inline-block pb-1">
          {currentState} —
        </h2>

        {currentState === 'Login' ? null : (
          <input
            onChange={(e) => setname(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="w-full border border-gray-400 px-4 py-2 outline-none"
          />
        )}

        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
        />

        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-black text-white py-2 hover:bg-gray-800 transition duration-200"
        >
          {currentState}
        </button>

        <div className="flex justify-end text-sm text-zinc-700">
          {currentState === 'Login' ? (
            <p onClick={() => setcurrentState('Sign Up')} className="cursor-pointer">
              Create account
            </p>
          ) : (
            <p onClick={() => setcurrentState('Login')} className="cursor-pointer">
              Login Here
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
