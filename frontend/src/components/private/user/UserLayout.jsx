
import React from "react";
import { Outlet, Navigate  } from "react-router-dom";
import UserNavbar from "./UserNavbar";

function UserLayout() {

  const isUserLoggedIn = localStorage.getItem("userToken") !== null;

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />; // Redirect to login if not logged in
  }
  
  return (
    <>
      <UserNavbar/>
      <Outlet />
    </>
  );
}

export default UserLayout;
