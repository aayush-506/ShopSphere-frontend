import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productID } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const product = products.find((item) => item._id === productID);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [mainImage, setMainImage] = useState(product?.image?.[0]);

  if (!product) {
    return <div className="p-10 text-lg">Product not found.</div>;
  }

  const handleAddToCart = () => {
    const item = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image[0],
      size: selectedSize,
    };
    addToCart(item);
    toast.success("Item added to cart! 🛒");
  };

  return (
    <>
      <div className="flex gap-10 p-10">
        <div className="flex w-1/2 gap-5">
          <div className="flex flex-col gap-3">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                onClick={() => setMainImage(img)}
                className="w-16 h-16 object-cover cursor-pointer border border-gray-300 hover:border-black"
              />
            ))}
          </div>
          <img
            src={mainImage}
            alt="Selected"
            className="w-[400px] h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="flex items-center my-2">
            <span className="text-red-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-sm text-gray-600">(122)</span>
          </div>
          <p className="text-2xl font-bold my-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-5">
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? 'border-black bg-gray-200' : 'border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            ADD TO CART
          </button>
          <ul className="text-sm text-gray-700 mt-5 space-y-1">
            <li>✔️ 100% Original product</li>
            <li>✔️ Cash on delivery available</li>
            <li>✔️ Easy return and exchange within 7 days</li>
          </ul>
        </div>
      </div>

      <div className="px-10 mt-6 mb-56">
        <div className="flex gap-10 border-b pb-3">
          <button className="font-medium border-b-2 border-black pb-1">Description</button>
          <button className="text-gray-500">Reviews (122)</button>
        </div>
        <div className="mt-4 text-gray-700 text-sm leading-6">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace for businesses and individuals.
          </p>
          <p className="mt-3">
            E-commerce websites typically include detailed product pages with descriptions, images, prices, and variations
            like size or color. They offer users the ability to view, select, and purchase items seamlessly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
