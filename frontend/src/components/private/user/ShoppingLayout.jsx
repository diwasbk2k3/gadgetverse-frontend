import React from 'react';
import { Outlet } from 'react-router-dom';

function ShoppingLayout() {
  return (
    <div>
      {/* This will render Shopping or PlaceOrder depending on the route */}
      <Outlet />
    </div>
  );
}

export default ShoppingLayout;
