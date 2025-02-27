import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

function PlaceOrder() {

  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Get the selected product from the passed state
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [customerId, setCustomerId] = useState(null); // Store customer_id
  const [email, setEmail] = useState(null);          // Store email

  // Retrieve customer_id and email from localStorage
  useEffect(() => {
    const storedCustomerId = localStorage.getItem("customer_id");
    const storedEmail = localStorage.getItem("email");

    if (!storedCustomerId || !storedEmail) {
      // Redirect to login if credentials are missing
      navigate("/login");
    } else {
      setCustomerId(storedCustomerId);
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    if (!quantity || !phone || !locationInput) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const orderData = {
        product_id: product.product_id,
        product_name: product.name,
        quantity: parseInt(quantity, 10),
        price: product.price,
        phone,
        location: locationInput,
        customer_id: customerId, // Use state variable
        email: email,            // Use state variable
      };

      const response = await axios.post("http://localhost:5000/orders", orderData);

      if (response.status === 201) {
        toast.success("Order placed successfully!");
        navigate("/user/myorders");
      } else {
        setError(response.data.error || "Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting order:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  if (!product) {
    return <p>No product selected</p>;
  }

  return (
    <>
      <div className="h-[125px] flex w-full bg-white">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">Place Your Order!</h2>
          <p className="text-gray-600 text-center">Fill out the details below</p>
        </div>
      </div>

      <div className="m-5">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Product Details</h3>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> RS{product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <img
            src={`http://localhost:5000${product.image_path}`}
            alt={product.name}
            className="h-[200px] object-cover rounded mt-5"
          />
        </div>

        <form onSubmit={handleOrderSubmit}>
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-gray-700 font-semibold mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="Enter your location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors hover:cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  )
}

export default PlaceOrder