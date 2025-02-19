import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './datHang.scss';
import '../../../libraryGrid.scss';
import ListAme from '../../../List/Dathang/ListAme';
import ListCaphe from "../../../List/Dathang/ListCaphe";
import ListDaxay from "../../../List/Dathang/ListDaxay";
import ListMonnong from "../../../List/Dathang/ListMonnong";
import ListTraicayxay from "../../../List/Dathang/ListTraicayxay";
import ListTrasua from "../../../List/Dathang/ListTrasua";
import ListTratraicay from "../../../List/Dathang/ListTratraicay";
import ListTraxanh from "../../../List/Dathang/ListTraxanh";

function DatHang() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem('user') ? true : false);
  }, []);
  const handleClick = (index) => {
    setActiveIndex(index)
  }

  const categories = [
    {
      name: "A-Mê",
      img: "https://minio.thecoffeehouse.com/image/admin/1736865425_eme.png"
    },
    {
      name: "Trái cây xay 0°C",
      img: "https://minio.thecoffeehouse.com/image/admin/1736415071_traicayxay1.png"
    },
    {
      name: "Trà sữa",
      img: "https://minio.thecoffeehouse.com/image/admin/1736415034_trasua1.png"
    },
    {
      name: "Trà xanh - Chocolate",
      img: "https://minio.thecoffeehouse.com/image/admin/1736415059_traxanh1.png"
    },
    {
      name: "Đá xay Frosty",
      img: "https://minio.thecoffeehouse.com/image/admin/1736414921_frosty1.png"
    },
    {
      name: "Cà phê",
      img: "https://minio.thecoffeehouse.com/image/admin/1736414931_caphe1.png"
    },
    {
      name: "Trà trái cây",
      img: "https://minio.thecoffeehouse.com/image/admin/1736415047_tra1.png"
    },
    {
      name: "Món nóng",
      img: "https://minio.thecoffeehouse.com/image/admin/1736415002_monnong1.png"
    },
  ];

  return (
    <div className='datHang w-full h-auto mt-[7.5rem]'>
      <section className='w-full h-full'>
        {/* head */}
        <div className='box_title grid wide h-auto mt-2'>
          <div className='flex justify-start md:justify-center items-center gap-[20px]'>
            <span className='icon'>
              <i className="fa fa-trophy text-2xl transform scale-x-125 text-[#ffb141]" aria-hidden="true"></i>
            </span>
            <span className='text text-[2rem]'><b>Sản phẩm từ nhà</b></span>
          </div>
        </div>
        {/* menu  */}
        <div className='menu-form-category grid wide'>
          <ul className='flex gap-[4rem] justify-center flex-wrap py-4 mx-[-4px] list-none'>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={classNames(
                  "w-[90px] h-auto hover:cursor-pointer",
                  { active: activeIndex === index }
                )}
              >
                <div className='category_card w-full h-full flex flex-col'>
                  <div className='anh w-full bg-cover bg-center rounded-full bg-[#FFF7E6]'>
                    <img className='p-[10px]' src={category.img} alt={category.name} />
                  </div>
                  <div className='w-full'>
                    <h5 className='text-[15px] text-center text-[#B2B2B2] mt-2'>{category.name}</h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* product  cafe */}
        <div className='tab_content w-full h-auto'>
          <div className='w-[1200px] mx-auto'>
            {activeIndex === 0 && <ListAme isLogin={isLogin} />}
            {activeIndex === 1 && <ListTraicayxay isLogin={isLogin} />}
            {activeIndex === 2 && <ListTrasua isLogin={isLogin} />}
            {activeIndex === 3 && <ListTraxanh isLogin={isLogin} />}
            {activeIndex === 4 && <ListDaxay isLogin={isLogin} />}
            {activeIndex === 5 && <ListCaphe isLogin={isLogin} />}
            {activeIndex === 6 && <ListTratraicay isLogin={isLogin} />}
            {activeIndex === 7 && <ListMonnong isLogin={isLogin} />}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DatHang;