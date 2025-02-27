import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove admin data from localStorage
    localStorage.removeItem('adminToken');
    toast.success("Logout Successfully!")
    navigate('/admin/login');
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white w-full p-5 flex flex-wrap justify-between">
        <Link to="dashboard" className="hover:text-red-400">
        <i class="fa-solid fa-clapperboard pr-2"></i>
        Dashboard
        </Link>

        <Link to="upload-product" className="hover:text-red-400">
        <i class="fa-solid fa-upload pr-2"></i>
        Upload Product
        </Link>

        <Link to="manage-product" className="hover:text-red-400">
        <i class="fa-solid fa-pen-to-square pr-2"></i>
        Manage Product</Link>

        <Link to="orders" className="hover:text-red-400">
        <i class="fa-solid fa-cart-shopping pr-2"></i>
        Orders
        </Link>

        <Link to="users" className="hover:text-red-400">
        <i class="fa-solid fa-users pr-2"></i>
        Users
        </Link>

        <Link to="messages" className="hover:text-red-400">
        <i class="fa-solid fa-comment-dots pr-2"></i>
        Messages
        </Link>

        {/* Modify the Logout link */}
        <button onClick={handleLogout} className="hover:text-red-400 hover:cursor-pointer">
          <i className="fa-solid fa-sign-out pr-2"></i>
          Logout
        </button>
      </nav>

    </div>
  );
}

export default AdminNavbar;