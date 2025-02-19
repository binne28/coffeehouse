import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from './component/Header/head';
import Footer from './component/Footer/footer';
import Signin from './component/Signin/Signin';
import Signup from './component/Signup/Signup';
import TrangChu from './feature/pages/TrangChu/trangChu';
import TinTuc from './feature/pages/TinTuc/tinTuc';
import CuaHang from './feature/pages/CuaHang/cuaHang';
import KhuyenMai from './feature/pages/KhuyenMai/khuyenMai';
import DatHang from './feature/pages/DatHang/datHang';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin/admin';

function Coffe() {
  const queryClient = new QueryClient();
  const [typeAcc, setTypeAcc] = useState('user');
 

  return (
    <QueryClientProvider client={queryClient}>
      {typeAcc === 'admin' ? (
        <div className='admin'>
          <Admin />
        </div>
      ) : (
        <Router>
          <div className='user'>
            <Head />
            <Routes>
              <Route path="/" element={<TrangChu />} />
              <Route path="/trang-chu" element={<TrangChu />} />
              <Route path="/tin-tuc" element={<TinTuc />} />
              <Route path="/cua-hang" element={<CuaHang />} />
              <Route path="/khuyen-mai" element={<KhuyenMai />} />
              <Route path="/dat-hang" element={<DatHang />} />
              <Route path="/dang-nhap" element={<Signin />} />
              <Route path="/dang-ky" element={<Signup />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </QueryClientProvider>
  );
}

export default Coffe;
