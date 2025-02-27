import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from './Footer';
import { toast } from "react-toastify";

function Signup() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate(); 
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password||! confirmPassword) {
          toast.error("All fields are required.");
          return;
        }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/users/signup", { email, password });
        console.log(response.data);  // Handle success, maybe redirect user to login page
        toast.success("Signup Successful!");
        navigate("/login"); // Redirect to /login page after successful signup
      } catch (error) {
        toast.error(error.response ? error.response.data.error : "An error occurred");
      }
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="h-[125px] flex w-full bg-white shadow-lg">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">
            Signup
          </h2>
          <p className="text-gray-600 text-center">
            Create an account to get started
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-auto w-full bg-white shadow-lg">
        {/* Left Container (Image Section) */}
        <div className="lg:w-[60%] w-full lg:h-auto flex items-center">
          <img
            className="h-full w-full object-cover"
            src="/signup.jpg"
            alt="Signup"
          />
        </div>

        {/* Right Container (Signup Form Section) */}
        <div className="lg:w-[40%] w-full bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 px-6 py-8">
          <form className="m-auto max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-4">
              Create Your Account
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Join Gadgetverse today!
            </p>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-900 font-semibold hover:underline"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup;