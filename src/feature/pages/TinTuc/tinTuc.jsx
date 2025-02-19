import React, { useState } from 'react';
import classNames from 'classnames';
import './tinTuc.scss';
import '../../../libraryGrid.scss';
import ListCoffeLover from '../../../List/listNews/listCoffeLover';
import ListUpdate from '../../../List/listNews/listUpdate';


function TinTuc() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className='tinTuc w-full h-auto mt-[7.5rem]'>
      <section className='w-full h-full'>
        <div className='container grid wide h-auto mt-2'>
          <div className='flex justify-start md:justify-center items-center gap-[20px]'>
            <span className='icon'>
              <i className="fa fa-newspaper text-2xl transform scale-x-125 text-[#ffb141]" aria-hidden="true"></i>
            </span>
            <span className='text text-[2rem]'><b>Tin tức mới nhất</b></span>
          </div>
        </div>
        <div className='box_body w-full h-full'>
          <div className='new_tabs'>
            <a
              onClick={() => handleClick(0)}
              className={classNames('truncate whitespace-nowrap ', { 'active': activeIndex === 0 })}
            >
              CoffeLover
            </a>
            <a
              onClick={() => handleClick(1)}
              className={classNames('truncate whitespace-nowrap', { 'active': activeIndex === 1 })}
            >
              Cập nhật từ nhà
            </a>
          </div>
          {/* start list */}
          <div className='tab_content w-full h-auto mt-[2rem] mb-[2rem]'>
            <div className='w-full max-w-[90%] d-block p-0 mx-auto'>
              <div className={classNames('listCfL py-4', { 'hide': activeIndex === 1 })}>
                <ListCoffeLover />
              </div>
              <div className={classNames('listUD py-4', { 'hidden': activeIndex === 0 })}>
                <ListUpdate />
              </div>
            </div>
          </div>
          {/* end list */}
        </div >
      </section >
    </div >
  );
}

export default TinTuc;
