import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './head.scss';
import Modal from 'react-bootstrap/Modal';

function Head() {
  const [username, setUsername] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (query.length < 3) return; 
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}&addressdetails=1&limit=3`
    );
    const data = await res.json();
    setSuggestions(data);
  };

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    navigate("/dang-nhap");
  }

  return (
    <div className='head'>
      <Link to="/trang-chu"><img src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg" alt="Logo" /></Link>
      <div className='head_delivery'>
        <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
        <div className='text_delivery' onClick={() => setShow(true)}>
          <h5>Giao hàng</h5>
          <p>Tại: Nhập địa chỉ giao hàng</p>
        </div>
        {/* start modal */}
        <Modal show={show} onHide={() => setShow(false)} className='mt-[8rem] relative'>
          <div className="absolute border-[1px] border-dotted py-[5px] px-2 border-orange-600 bg-white rounded-[40px]" style={{ top: '1%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="flex items-center rounded-[40px] bg-[#fb8d17] px-2">
              <img className="w-[35px] h-[35px]" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="Giao hàng" />
              <p className="pt-[12px] ml-2 text-white text-[13px]">Giao hàng</p>
            </div>
          </div>
          <Modal.Body >
            <input type="text" value={query} onChange={(e) => {
              setQuery(e.target.value);
              fetchSuggestions(e.target.value);
            }} placeholder='Vui lòng nhập địa chỉ' className="w-full focus:outline-none shadow-[0px_10px_22px_4px_rgba(0,0,0,0.4)] rounded py-2 pl-4 mt-10 mb-1" />
            <ul className="mt-2 border rounded">
              {suggestions.length > 0 ? suggestions.map((item) => (
                <li key={item.place_id} className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setQuery(item.display_name);
                    setSuggestions([]);
                  }}>
                  {item.display_name}
                </li>
              )) : <></>}
            </ul>
          </Modal.Body>
        </Modal>
        {/* end modal */}
        <i className="fas fa-chevron-down"></i>
      </div>
      <ul className='menu_header'>
        <li><Link to="/trang-chu" >Trang chủ</Link></li>
        <li><Link to="/tin-tuc" >Tin tức</Link></li>
        <li><Link to="/dat-hang" >Đặt hàng</Link></li>
        <li><Link to="/khuyen-mai" >Khuyến mãi</Link></li>
        <li><Link to="/cua-hang" >Cửa hàng</Link></li>
      </ul>
      <div className='account'>
        {username ? (
          <div className='flex gap-[5px]'>
            <span className="text-white-600 font-bold my-auto"><b><i>Xin chào</i></b>, {username}</span> {/* Hiển thị tên người dùng */}
            <Link to="/dat-hang">
              <img src="https://order.thecoffeehouse.com/_nuxt/img/Carticon.373916c.png" alt="order" />
            </Link>
            <p className='text-red-500 font-bold hover:underline my-auto hover:cursor-pointer' onClick={handleLogout}><i>Đăng xuất</i></p>
          </div>
        ) : (
          <Link to="/dang-nhap">
            <img src="https://order.thecoffeehouse.com/_nuxt/img/Login.70dc3d8.png" alt="account" />
          </Link>
        )}
      </div>
    </div>
  );
}
export default Head;
