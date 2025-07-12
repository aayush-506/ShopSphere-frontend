import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='px-16 py-8 w-full flex'>

        <div className='w-[40%]'>
          <div className='h-[5vh] w-fit overflow-hidden'>
            <img className='object-cover h-full w-full' src={assets.logo} alt="" />
          </div>
          <p className='mt-9 text-zinc-600 text-sm leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, perspiciatis aspernatur amet tenetur expedita...
          </p>
        </div>

        <div className='w-[60%] flex'>

          <div className='w-[20%] p-4 ml-[160px] mt-[30px]'>
            <h1 className='text-base mb-7'>COMPANY</h1>
            <ul className='flex flex-col gap-2 text-sm text-zinc-700'>
              <li className='mb-1'><Link to="/">Home</Link></li>
              <li className='mb-1'><Link to="/about">About us</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
            </ul>
          </div>

          <div className='w-[30%] p-4 ml-[160px] mt-[30px]'>
            <h1 className='text-base mb-7'>GET IN TOUCH</h1>
            <ul className='flex flex-col gap-2 text-sm text-zinc-700'>
              <li>+91 9457XXXXXX</li>
              <li>shopsphere@gmail.com</li>
            </ul>
          </div>

        </div>
      </div>

      <hr />

      <div className='py-4 w-full flex items-center justify-center'>
        <h1 className='text-zinc-700'>
          Copyright 2025 © Aayush Chauhan - All Right Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
