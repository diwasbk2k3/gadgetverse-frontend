import React, { useState } from 'react'
import Location from './Location';
import Footer from './Footer';
import axios from "axios";
import { toast } from 'react-toastify';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/messages", formData);
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("Error sending message.");
    }
  };

  return (
    <>
      <div className="h-[125px] flex w-full bg-white">
        <div className="w-full bg-gradient-to-r from-pink-400 via-teal-500 to-blue-400">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">
              Get in Touch!
          </h2>
          <p className="text-gray-600 text-center">We'd love to hear from you</p>
        </div>
      </div>
      {/* Contact Form */}
      <div>
        <form class="m-5" onSubmit={handleSubmit}>
          <div class="mb-6">
            <label htmlFor="name" class="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="mb-6">
            <label htmlFor="message" class="block text-gray-700 font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Enter your message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <Location/>
      <Footer/>
    </>
  )
}

export default Contact