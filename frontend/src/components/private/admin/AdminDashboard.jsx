import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
  });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  useEffect(() => {
    // Fetch stats from the API using Axios
    async function fetchStats() {
      try {
        const response = await axios.get("http://localhost:5000/stats");
        setStats(response.data);
      } catch (error) {
        toast.error("Error fetching stats:", error);
      }
    }
    
    fetchStats();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Greeting */}
      <h1 className="text-2xl font-semibold text-gray-800">{greeting}, Admin!</h1>
      <p className="mt-2 text-gray-600">Manage your dashboard and track overall performance.</p>

      {/* Dashboard Section*/}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-xl font-bold">{stats.totalOrders}</p>
        </div>
        <div className="p-6 bg-orange-500 text-white rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-xl font-bold">{`$${stats.totalRevenue || 0}`}</p>
        </div>
        <div className="p-6 bg-purple-500 text-white rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-xl font-bold">{stats.totalProducts}</p>
        </div>
      </div>
    </div>
  );
}
