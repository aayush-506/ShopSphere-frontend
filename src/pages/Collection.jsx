import React, { useContext, useState, useEffect } from 'react';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products, search } = useContext(ShopContext); 
  const [allProducts, setallProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setcategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setsubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    if (search.trim() !== '') {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setallProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);

  useEffect(() => {
    setallProducts(products);
  }, [products]);

  return (
    <div className='flex px-16'>
      <div className='h-[40vh] mt-24 w-[19vw]'>
        <h1 className='text-xl mb-2'>FILTERS</h1>

        <div className='border border-zinc-400 h-[135px] mb-5'>
          <h1 className='my-2 ml-5'>CATEGORIES</h1>
          <p className='flex items-center mb-1 gap-2 ml-5 text-zinc-700'>
            <input className='h-5 w-5' type="checkbox" value="Men" onChange={toggleCategory} /> Men
          </p>
          <p className='flex items-center mb-1 gap-2 ml-5 text-zinc-700'>
            <input className='h-5 w-5' type="checkbox" value="Women" onChange={toggleCategory} /> Women
          </p>
          <p className='flex items-center gap-2 ml-5 text-zinc-700'>
            <input className='h-5 w-5' type="checkbox" value="Kids" onChange={toggleCategory} /> Kids
          </p>
        </div>

        <div className='border border-zinc-400 h-[135px] mb-5'>
          <h1 className='my-2 ml-5'>TYPES</h1>
          <p className='flex items-center mb-1 gap-2 ml-5 text-zinc-700'>
            <input className='h-5 w-5' type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear
          </p>
          <p className='flex items-center mb-1 gap-2 ml-5 text-zinc-700'>
            <input className='h-5 w-5' type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
          </p>
          <p className='flex items-center gap-2 ml-5 text-zinc-700'>
            <input className='h-5 w-5' type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
          </p>
        </div>
      </div>

      <div className='ml-9 mt-16 w-full pb-20'>
        <div className='text-left pb-6 text-2xl'>
          <Title text1="ALL" text2="COLLECTIONS" />
        </div>

        <div className='grid grid-cols-4 gap-5'>
          {allProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
