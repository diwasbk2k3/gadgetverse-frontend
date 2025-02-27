import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function UserDashboard() {
  const [greeting, setGreeting] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [userStats, setUserStats] = useState({ totalOrders: 0, totalSpent: 0 });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
    const customer_id = localStorage.getItem("customer_id");
    axios.get(`http://localhost:5000/stats/user/${customer_id}`).then((response) => {
      setUserStats({
        totalOrders: response.data.totalOrders,
        totalSpent: response.data.totalSpent,
      });
    })
      .catch((error) => console.error("Error fetching user stats:", error));
  }, []);

  const handlePasswordUpdate = () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
          toast.error("All fields are required.");
          return;
    }
    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }
    const customer_id = localStorage.getItem("customer_id");
    axios
      .put("http://localhost:5000/users/update-password", {
        customer_id,
        currentPassword,
        newPassword,
      })
      .then((response) => {
        toast.success("Password updated successfully!");
        setShowPasswordForm(false); // Hide the form after successful update
      })
      .catch((error) => {
        toast.error(error.response?.data?.error || "Error updating password");
      });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Greeting */}
      <h1 className="text-2xl font-semibold text-gray-800">{greeting}, User!</h1>
      <p className="mt-2 text-gray-600">Manage your profile and track your purchase summary.</p>
      {/* Dashboard Section*/}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="p-4 bg-green-500 text-white rounded-lg shadoRw-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setShowPasswordForm(true)}
        >
          <h2 className="text-lg font-semibold">Profile</h2>
          <p className="text-sm">Manage your account details.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-xl font-bold">{userStats.totalOrders}</p>
          </div>

          <div className="p-4 bg-purple-500 text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h2 className="text-lg font-semibold">Spent Money</h2>
            <p className="text-xl font-bold">${userStats.totalSpent}</p>
          </div>
        </div>
      </div>

      {showPasswordForm && (
        <div className="mt-8 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full p-2 rounded mt-5"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 rounded mt-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full p-2 rounded mt-3"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-8 py-2 mt-4 rounded hover:cursor-pointer"
            onClick={handlePasswordUpdate}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
