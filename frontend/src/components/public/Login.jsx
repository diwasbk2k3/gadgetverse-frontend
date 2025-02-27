import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from './Footer';
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
          toast.error("All fields are required.");
          return;
        }
    try {
      const response = await axios.post("http://localhost:5000/users/login", {email,password,});

      // On successful login, store the user data in localStorage
      localStorage.setItem("customer_id", response.data.customer_id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("userToken", response.data.token); // Store the token

      // Alert the user and redirect to the shop page
      toast.success('Login successful!');
      navigate("/user/dashboard");

    } catch (err) {
      // Show alert with the error message if login fails
      toast.error(err.response?.data?.error || "Login failed, please try again.");
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="h-[125px] flex w-full bg-white shadow-lg">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">
            Login
          </h2>
          <p className="text-gray-600 text-center">
            Login to access your personal space
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-auto w-full bg-white shadow-lg">
        {/* Left Container (Image Section) */}
        <div className="lg:w-[60%] w-full lg:h-auto flex items-center">
          <img
            className="h-full w-full object-cover"
            src="/login.jpg"
            alt="Login"
          />
        </div>

        {/* Right Container (Login Form Section) */}
        <div className="lg:w-[40%] w-full bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 px-6 py-8">
          <form className="m-auto max-w-sm" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-4">
              Welcome Back!
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Please login to your account
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:cursor-pointer hover:bg-blue-600 transition-colors"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-900 font-semibold hover:underline"
            >
              Signup here
            </Link>
          </p>
          <p className="text-center text-gray-600 mt-4">
            Login as Admin?{" "}
            <Link to="/admin/login" className="text-blue-900 font-semibold hover:underline">
              Click here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
