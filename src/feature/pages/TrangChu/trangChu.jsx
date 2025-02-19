import React, { useState, useEffect } from 'react';
import './trangChu.scss';
import '../../../libraryGrid.scss'
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames';
import ListCf1 from '../../../List/listProduct/listCf1';
import ListCf2 from '../../../List/listProduct/listCf2';

function TrangChu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem('user') ? true : false);
  }, []);
  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='trang-chu'>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className='w-full !transform-none !animation-none object-cover h-auto hover:cursor-pointer' src="https://minio.thecoffeehouse.com/image/admin/1702453536_banner-1.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='w-full !transform-none !animation-none object-cover h-auto hover:cursor-pointer' src="https://minio.thecoffeehouse.com/image/admin/1702453543_banner-2-den.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
      <div className='menu grid wide !mt-[1.5rem]'>
        <ul className='p-0 flex justify-around'>
          <li className='category'>
            <div onClick={() => handleClick(0)} className={classNames(
              'product w-[110px] flex flex-col items-center justify-center mx-auto hover:cursor-pointer',
              { active: activeIndex === 0 }
            )}>
              <div className="border-0 rounded-full bg-orange-100 w-[90px] h-[90px] flex items-center justify-center">
                <img className='w-[50px] h-[50px] mx-auto' src="https://minio.thecoffeehouse.com/image/admin/1675690611_8-signature-cpg-coffee.png" alt="" />
              </div>
              <div className="content">
                <h5 className='text-[14px] text-gray-400 text-center mt-[10px]'>Signature CPG Coffee</h5>
              </div>
            </div>
          </li>
          <li className='category'>
            <div onClick={() => handleClick(1)} className={classNames(
              'product w-[110px] flex flex-col items-center justify-center mx-auto hover:cursor-pointer',
              { active: activeIndex === 1 }
            )}>
              <div className="border-0 rounded-full bg-orange-100 w-[90px] h-[90px] flex items-center justify-center">
                <img className='w-[50px] h-[50px] mx-auto' src="https://minio.thecoffeehouse.com/image/admin/1736414958_cpg1.png" alt="" />
              </div>
              <div className="content">
                <h5 className='text-[14px] text-gray-400 text-center mt-[10px]'>Cà Phê - Trà Đóng Gói</h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* start list product */}
      <div className='product_list w-full h-auto'>
          <div className='grid wide'>
            <div className={classNames('listCf1', { 'hidden': activeIndex === 1 })}>
              <ListCf1 isLogin={isLogin}/>
            </div>
            <div className={classNames('listCf2', { 'hidden': activeIndex === 0 })}>
              <ListCf2 isLogin={isLogin}/>
            </div>
          </div>
      </div>
      {/* end list product */}
    </div>
  );
}

export default TrangChu;
