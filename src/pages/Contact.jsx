import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const ContactUs = () => {
  return (
    <div className="px-6 py-16 bg-white text-gray-800">

      <div className="text-center pb-6 text-3xl">
        <Title text1="CONTACT" text2="US" />
      </div>


      <div className="flex flex-row gap-12">
        
        <div className="w-1/2  h-[550px] overflow-hidden">
          <img
            src={assets.contact_img}
            alt="Office setup with coffee and laptop"
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>

    
        <div className="w-1/2 mt-[100px] space-y-10 text-gray-700 text-sm leading-relaxed mb-[500px]">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-black">OUR STORE</h3>
            <p>54709 abc<br />xyz, INDIA</p>
            <p className="mt-2">Tel: +91 9457XXXXXX</p>
            <p>Email: shopsphere@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-black">CAREERS AT SHOPSPHERE</h3>
            <p>Learn more about our teams and job openings.</p>

            <button className="mt-4 px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
