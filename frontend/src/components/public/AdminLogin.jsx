import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import { toast } from "react-toastify";

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/admins/login', { email, password });

      // On successful login, store the user data in localStorage
      localStorage.setItem("adminToken", response.data.token); // Store the token

      // Alert the user and redirect to the shop page
      toast.success('Login successful!');
      navigate('/admin/dashboard');

    } catch (err) {
      // Show alert with the error message if login fails
      toast.error(err.response?.data?.error || "Login failed, please try again.");
    }
  };

  return (
    <>
      <div className="h-[125px] flex w-full bg-white shadow-lg">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">Admin Login</h2>
          <p className="text-gray-600 text-center">Secure access to your admin panel</p>
        </div>
      </div>

      <div className="h-auto flex flex-col md:flex-row w-full bg-white shadow-lg">
        <div className="w-full md:w-[60%] flex justify-center">
          <img className="w-full h-auto md:h-full object-cover" src="/admin_login.jpg" alt="Login" />
        </div>

        <div className="w-full md:w-[40%] bg-gradient-to-r from-blue-400 via-teal-500 to-pink-400 p-6 md:p-10">
          <form className="m-2 md:m-5" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-gray-800 text-center mt-6 md:mt-12">Welcome Back!</h2>
            <p className="text-gray-600 text-center mb-6 md:mb-12">Manage your platform with ease</p>
            <div className="mb-4 md:mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="mb-6 md:mb-12">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
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
            Login as User?{' '}
            <Link to="/login" className="text-blue-900 font-semibold hover:underline">Click here</Link>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AdminLogin;