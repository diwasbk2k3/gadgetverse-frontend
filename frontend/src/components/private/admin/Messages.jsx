import React, { useEffect, useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from backend
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/messages");
        setMessages(response.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
        toast.error("Error fetching messages:");
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Messages</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-2 text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No messages available
                </td>
              </tr>
            ) : (
              messages.map((msg, index) => (
                <tr key={msg.id}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{msg.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{msg.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{msg.contact}</td>
                  <td className="border border-gray-300 px-4 py-2">{msg.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
