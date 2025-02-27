import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ShopCard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (err) {
        toast.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product) => {
    navigate("/user/shopping/placeorder", { state: { product } });
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.product_id}
          className="bg-white text-black rounded-lg p-4 w-full sm:w-[300px] h-auto sm:h-[420px] ml-0 sm:ml-3 mb-3 flex flex-col justify-between shadow-lg"
        >
          <img
            src={`http://localhost:5000${product.image_path}`}
            alt={product.name}
            className="w-full h-[200px] object-cover rounded"
          />
          <div>
            <p className="text-lg font-semibold">{product.name}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> RS {product.price}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
          </div>
          <div>
            <button
              onClick={() => handleBuyNow(product)}
              className="bg-slate-900 text-white w-full py-2 rounded-lg hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShopCard;
