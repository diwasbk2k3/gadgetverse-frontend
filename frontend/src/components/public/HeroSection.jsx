import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection() {
  const [products, setProducts] = useState([]); // Stores all products from DB
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered results
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product state
  const navigate = useNavigate();

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/products") // Adjust the URL if needed
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Update filtered products when the search query changes
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  // Handle search button click
  const handleSearch = () => {
    if (selectedProduct) {
      navigate("/shop"); // Navigate to the shop page or search results page
    }
  };

  // Handle product selection from search results
  const handleProductClick = (product) => {
    setSearchQuery(product.name); // Set selected product name in input field
    setSelectedProduct(product); // Set the selected product
  };

  return (
    // Main Container
    <div className="h-auto md:h-[400px] bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400 flex flex-col md:flex-row items-center px-4">
      {/* Left Container */}
      <div className="w-full md:w-[60%] flex flex-col items-start mb-8 md:mb-0">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl md:mt-1 font-bold text-white mb-6 md:mb-14 mt-8">
          Buy your <span className="text-[#142441]"><i>Favorite Gadgets</i></span>
          <br />
          <span className="text-[#142441]"><i>for the</i></span> best prices
        </h1>

        {/* Search Bar */}
        <div className="flex w-full md:w-[600px] mb-6 ">
          <input
            type="text"
            placeholder="Search gadgets here"
            className="flex-grow px-5 py-2 rounded-l-lg text-black outline-none bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className={`px-4 md:px-6 rounded-r-lg text-white ${selectedProduct ? "bg-black hover:bg-gray-800 cursor-pointer" : "bg-slate-900"
              }`}
            onClick={handleSearch}
            disabled={!selectedProduct}
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="bg-gray-700 text-white cursor-pointer hover:bg-gray-800  w-[300px] md:w-[500px] rounded-lg shadow-lg p-2 max-h-40 overflow-y-auto mb-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.product_id}
                  onClick={() => handleProductClick(product)}
                >
                  {product.name} - ${product.price}
                </div>
              ))
            ) : (
              <div className="text-white">No products available</div>
            )}
          </div>
        )}

        {/* Subheading */}
        <p className="text-white text-lg mb-2">
          From affordable finds to premium picks, we’ve got something for
          everyone.
        </p>
        <p className="text-[#142441] text-lg font-bold italic">
          Your Gateway to Next-Gen Gadgets!
        </p>
      </div>

      {/* Right Container */}
      <div className="w-full h-[100px] md:w-[40%] flex items-center justify-center md:m-5 mb-8">
        <motion.img
          src="gadgetverse_img.png"
          alt="Gadget Collection"
          className="md:h-[300px] h-[175px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
