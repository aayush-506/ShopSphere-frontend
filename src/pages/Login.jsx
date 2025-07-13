import React, { useState } from 'react';

const Signup = () => {

  const [currentState, setcurrentState] = useState('Sign Up')

 const onSubmitHandler = async (event)=>{
    event.preventDefault();
  }

  return (
    <div className="min-h-screen flex mt-[200px] justify-center bg-white">
      <form onSubmit={onSubmitHandler} className="w-80 space-y-4">
        <h2 className="text-center text-3xl font-serif font-medium mb-6 border-b border-black inline-block pb-1">
          {currentState} —
        </h2>
        {currentState == 'Login' ? "" : <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
        />}

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-400 px-4 py-2 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 hover:bg-gray-800 transition duration-200"
        >
          {currentState}
        </button>
        <div className='flex justify-end text-sm text-zinc-700'>

      {
        currentState === 'Login' ? (
          <p onClick={() => setcurrentState('Sign Up')} className='cursor-pointer '>
            Create account
          </p>
        ) : (
          <p onClick={() => setcurrentState('Login')} className='cursor-pointer'>
            Login Here
          </p>
        )
      }
        </div>
      </form>

    </div>
  );
};

export default Signup;
