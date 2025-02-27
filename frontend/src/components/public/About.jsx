import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeadset, FaTruck, FaShieldAlt } from 'react-icons/fa';

function About() {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400 text-gray-800">
        <div className="flex flex-col items-center px-4 py-8">
          <h1 className="text-3xl font-bold sm:text-4xl">About Us</h1>
          <p className="text-base text-gray-700 p-6 text-center sm:text-lg sm:px-12 lg:px-32">
            Welcome to Gadgetverse, your ultimate destination for cutting-edge
            technology and the latest gadgets. Our mission is to provide you with
            the best gadgets at unbeatable prices, catering to all your tech
            needs. Explore our wide range of products, from smartphones to
            smart home devices, all designed to make your life more convenient and
            enjoyable.
          </p>
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-gray-50 text-black flex flex-col items-center py-8">
        <motion.img
          src="satisfaction.png"
          alt="Satisfaction"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="md:w-20 w-20 sm:w-32 mb-6"
        />

        <h2 className="text-gray-900 text-3xl font-bold mb-2 sm:text-4xl">Our Services</h2>
        <div className="bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400 w-[250px] h-[5px] rounded-lg mb-6"></div>

        {/* Service Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-12 md:px-16">
          {/* Service 1 - Gadget Sales */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 p-4 rounded-lg shadow-lg">
            <FaShoppingCart className="text-6xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Gadget Sales</h3>
            <p className="text-gray-600 text-lg">Explore our wide range of top-rated gadgets and devices, curated to suit every need and budget.</p>
          </div>

          {/* Service 2 - Expert Support */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 p-4 rounded-lg shadow-lg">
            <FaHeadset className="text-6xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Support</h3>
            <p className="text-gray-600 text-lg">Our team of experts is here to assist you with all your tech-related queries and troubleshooting needs.</p>
          </div>

          {/* Service 3 - Free Delivery */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 p-4 rounded-lg shadow-lg">
            <FaTruck className="text-6xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Free Delivery</h3>
            <p className="text-gray-600 text-lg">Enjoy free delivery on all orders, ensuring that your gadgets reach you in perfect condition, fast and free.</p>
          </div>

          {/* Service 4 - Warranty Services */}
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 p-4 rounded-lg shadow-lg">
            <FaShieldAlt className="text-6xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Warranty Services</h3>
            <p className="text-gray-600 text-lg">We offer comprehensive warranty services to ensure your peace of mind with every purchase.</p>
          </div>
        </div>
      </div>

      {/* Our Brands */}
      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">Our Trusted Brands</h2>
          <div className="bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400 h-[5px] rounded-lg mb-6 mx-auto w-[350px]"></div>
          <p className="text-lg text-gray-500 mt-4">Discover the world-class brands we feature in our exclusive collection.</p>
        </div>

        <div className="flex justify-evenly gap-16 flex-wrap">
          {/* Brand Logos */}
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/69341/apple-logo.svg"
              alt="Apple"
              className="h-20 mb-6 hover:opacity-80"
            />
            <p className="text-gray-700 font-medium">Apple</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/342186/samsung.svg"
              alt="Samsung"
              className="h-20 mb-6 hover:opacity-80"
            />
            <p className="text-gray-700 font-medium">Samsung</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/443435/brand-sony.svg"
              alt="Sony"
              className="h-20 mb-6 hover:opacity-80"
            />
            <p className="text-gray-700 font-medium">Sony</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/443015/brand-dji.svg"
              alt="DJI"
              className="h-20 mb-6 hover:opacity-80"
            />
            <p className="text-gray-700 font-medium">DJI</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
