import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BestSellingGadgets() {

  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/stats/top-selling");
        console.log("API Response:", response.data);
        setTopSellingProducts(response.data.slice(0, 5)); // Ensure only top 5 products
      } catch (error) {
        console.error("Failed to fetch top-selling products:", error);
      }
    };

    fetchTopSellingProducts();
  }, []);

  const handleProductClick = (product) => {
    navigate("/user/shopping/placeorder", { state: { product } }); // ✅ Navigate on click
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl text-white font-bold">Best Selling Gadgets</h1>
        <div className="bg-gradient-to-r via-white w-[300px] sm:w-[550px] h-[10px] flex justify-center items-center rounded-lg mt-5"></div>
      </div>

      <div className="bg-gray-50 flex flex-wrap justify-center gap-6 px-4 py-8">
        {topSellingProducts.length > 0 ? (
          topSellingProducts.map((product) => (
            <div
              key={product.product_id}
              onClick={() => handleProductClick(product)}
              className="flex flex-col items-center w-full sm:w-[220px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={`http://localhost:5000${product.image_path}`}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded-md"
              />
              <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">{product.name}</h2>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 flex flex-col items-center py-10">
        <h1 className="text-3xl sm:text-4xl text-white font-bold italic">Revolutionizing the way you experience technology!</h1>
        <div className="bg-gradient-to-r via-white w-[300px] sm:w-[550px] h-[10px] flex justify-center items-center rounded-lg mt-5"></div>
      </div>
    </div>
  );
}

export default BestSellingGadgets;
