import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/public/AppLayout";
import Home from "./components/public/Home";
import Shop from "./components/public/Shop";
import About from "./components/public/About";
import Contact from "./components/public/Contact";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
import AdminLogin from "./components/public/AdminLogin";

import UserLayout from "./components/private/user/UserLayout";
import UserDashboard from "./components/private/user/UserDashboard";
import ShoppingLayout from "./components/private/user/ShoppingLayout";
import Shopping from "./components/private/user/Shopping";
import PlaceOrder from "./components/private/user/PlaceOrder";
import MyOrders from "./components/private/user/MyOrders";

import AdminLayout from "./components/private/admin/AdminLayout";
import AdminDashboard from "./components/private/admin/AdminDashboard";
import UploadProduct from "./components/private/admin/UploadProduct";
import ManageProduct from "./components/private/admin/ManageProduct";
import Orders from "./components/private/admin/Orders";
import Users from "./components/private/admin/Users";
import Messages from "./components/private/admin/Messages";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/login" element={<AdminLogin/>} />
        </Route>

        {/* User routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserDashboard />} /> 
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="shopping" element={<ShoppingLayout />}>
            <Route index element={<Shopping />} />
            <Route path="placeorder" element={<PlaceOrder />} />
          </Route>
          <Route path="myorders" element={<MyOrders />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="upload-product" element={<UploadProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="messages" element={<Messages />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
