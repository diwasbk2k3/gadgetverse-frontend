import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminLayout() {

  const isAdminLoggedIn = localStorage.getItem('adminToken') !== null;

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login"/>; // Redirect to login if not logged in
  }
  
  return (
    <div>
        <AdminNavbar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout