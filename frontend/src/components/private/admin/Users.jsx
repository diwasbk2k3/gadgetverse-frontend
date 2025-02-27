import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

function Users() {

  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        toast.error("Failed to fetch users:");
      }
    };

    fetchUsers();
  }, []);

  // Handle Remove functionality
  const handleRemove = async (customerId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${customerId}`);
      toast.success("User Removed successfully!");
      setUsers(users.filter((user) => user.customer_id !== customerId)); // Remove user from UI
    } catch (err) {
      console.error("Failed to Remove user:", err);
      toast.error("Failed to Remove user.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Customer ID</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.customer_id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.customer_id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleRemove(user.customer_id)} // Remove user on button click
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
