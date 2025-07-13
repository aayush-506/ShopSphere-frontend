import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const AboutUs = () => {
  return (
    <div className="px-6 py-16 bg-white text-gray-800">

      <div className="text-center pb-6 text-3xl">
        <Title text1="ABOUT" text2="US" />
      </div>


      <div className="flex flex-row items-start gap-12">

        <div className="w-1/2">
          <img
            src={assets.about_img}
            alt="Clothing and accessories"
            className="rounded-lg w-full h-auto object-cover shadow-md"
          />
        </div>

        <div className="w-1/2 mt-[13%] space-y-4 text-gray-700 text-sm leading-relaxed">
          <p>
            ShopSphere was born out of a passion for innovation and a desire to revolutionize the way people shop online.
            Our journey began with a simple idea: to provide a platform where customers can easily discover, explore,
            and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we’ve worked tirelessly to curate a diverse selection of high-quality products that
            cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an
            extensive collection sourced from trusted brands and suppliers.
          </p>
          <div>
            <h3 className="font-semibold text-black mb-1">Our Mission</h3>
            <p>
              Our mission at ShopSphere is to empower customers with choice, convenience, and confidence. We're dedicated
              to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to
              delivery and beyond.
            </p>
          </div>
        </div>
      </div>

    
      <div className="mt-24 mb-56">
        <h2 className="text-center text-2xl font-semibold tracking-wide uppercase relative inline-block after:block after:mt-2 after:w-16 after:h-0.5 after:bg-black after:mx-auto">
          Why <span className="font-bold">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-12 text-center text-gray-700 text-sm">
          <div className="border p-6 rounded">
            <h4 className="font-semibold mb-2">QUALITY ASSURANCE:</h4>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="border p-6 rounded">
            <h4 className="font-semibold mb-2">CONVENIENCE:</h4>
            <p>
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>
          <div className="border p-6 rounded">
            <h4 className="font-semibold mb-2">EXCEPTIONAL CUSTOMER SERVICE:</h4>
            <p>
              Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top
              priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
