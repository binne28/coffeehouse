import React from "react";

function ManageProducts() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Quản lý sản phẩm</h1>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Thêm sản phẩm
      </button>
      <button className="mt-4 ml-4 px-4 py-2 bg-yellow-500 text-white rounded">
        Cập nhật sản phẩm
      </button>
      <button className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded">
        Xóa sản phẩm
      </button>
    </div>
  );
}

export default ManageProducts;
