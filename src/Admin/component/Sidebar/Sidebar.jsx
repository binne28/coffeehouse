import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link to="/admin/users" className="block p-2 hover:bg-gray-700">Quản lý người dùng</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/products" className="block p-2 hover:bg-gray-700">Quản lý sản phẩm</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
