import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Placeorder from './pages/Placeorder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
       <ToastContainer position="top-right" autoClose={3000} />
      <div className="px-16">
        <Navbar />
        <hr />
        <SearchBar/>
      </div>

      <main className="flex-grow px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<Placeorder />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
        </Routes>
      </main>

      <div className="px-16">
        <Footer />
      </div>
    </div>
  );
};

export default App;
