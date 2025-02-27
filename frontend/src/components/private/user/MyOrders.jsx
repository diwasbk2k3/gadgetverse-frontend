import React, { useEffect, useState }  from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

function MyOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const customer_id = localStorage.getItem("customer_id");

      if (!customer_id) {
        console.error("No customer ID found in localStorage");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/orders/customer-orders?customer_id=${customer_id}`);
        setOrders(response.data);
      } catch (err) {
        toast.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Orders</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mt-6 min-w-max">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Total Price</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={order.order_id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{order.order_id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.product_id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.product_name}</td>
                <td className="border border-gray-300 px-4 py-2">{order.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">RS {order.price}</td>
                <td className="border border-gray-300 px-4 py-2">RS {order.total_price}</td>
                <td className="border border-gray-300 px-4 py-2">{order.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{order.email}</td>
                <td className="border border-gray-300 px-4 py-2">{order.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center py-4">
                No orders found for this customer
              </td>
            </tr>
             )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
