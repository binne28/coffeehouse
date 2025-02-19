import React from 'react'

function ListTraicayxay({ isLogin }) {
  const listTraicayxay = [
    {
      url: 'https://minio.thecoffeehouse.com/image/admin/1737355128_tcx-dau_400x400.png',
      name_cf: 'Dâu Phô Mai',
      price: '55.000đ',
    },
  ]

  return (
    <div className='flex flex-wrap justify-center'>
      {
        listTraicayxay.map((tcx, index) => (
          <div className='col l-2 m-4 c-12 shadow px-4 py-4 bg-white rounded-lg text-black border hover:cursor-pointer' key={index}>
            <div className='product_card'>
              {/* anh */}
              <div className='img_product'>
                <img src={tcx.url} alt="" />
              </div>
              {/* content */}
              <div className='content_product'>
                {/* name product */}
                <div className='content_top'>
                  <h4 className='text-[#353d45] text-[18px]'>{tcx.name_cf}</h4>
                </div>
                {/* price */}
                <div className={`product_content_footer flex items-center px-2 ${isLogin ? 'justify-between' : 'justify-center'}`}>
                  <p className='my-auto font-medium text-[20px]'>{tcx.price}</p>
                  {isLogin && (
                    <button
                      className="w-[35px] h-[35px] flex items-center justify-center 
                                align-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ListTraicayxay