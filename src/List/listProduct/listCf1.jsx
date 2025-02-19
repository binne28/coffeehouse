import React from 'react'
import '../../libraryGrid.scss'
import classNames from 'classnames'

function ListCf1({ isLogin }) {
    const listCf1 = [
        {
            url: 'https://minio.thecoffeehouse.com/image/admin/1708570525_cpg-tropical-garden_400x400.jpg',
            name: 'TÚI TROPICAL GARDEN 200G',
            price: '239.000đ',

        },
        {
            url: '	https://minio.thecoffeehouse.com/image/admin/1708570525_cpg-tropical-garden_400x400.jpg',
            name: 'TÚI TROPICAL GARDEN 200G',
            price: '239.000đ',

        },
        {
            url: '	https://minio.thecoffeehouse.com/image/admin/1708570525_cpg-tropical-garden_400x400.jpg',
            name: 'TÚI TROPICAL GARDEN 200G',
            price: '239.000đ',

        },
        {
            url: '	https://minio.thecoffeehouse.com/image/admin/1708570525_cpg-tropical-garden_400x400.jpg',
            name: 'TÚI TROPICAL GARDEN 200G',
            price: '239.000đ',

        },
        {
            url: '	https://minio.thecoffeehouse.com/image/admin/1708570525_cpg-tropical-garden_400x400.jpg',
            name: 'TÚI TROPICAL GARDEN 200G',
            price: '239.000đ',

        },
        {
            url: '	https://minio.thecoffeehouse.com/image/admin/1708570525_cpg-tropical-garden_400x400.jpg',
            name: 'TÚI TROPICAL GARDEN 200G',
            price: '239.000đ',

        },
    ]
    return (
        <div className="flex flex-wrap justify-center">
            {listCf1.map((cf1, index) => (
                <div
                    className='col l-2 m-4 c-12 shadow px-6 py-4 bg-white rounded-lg text-black border group'
                    key={index}
                >
                    {/* Hình ảnh sản phẩm */}
                    <img
                        className="w-[160px] h-[160px] mx-auto rounded-lg transform transition duration-300 group-hover:scale-110"
                        src={cf1.url}
                        alt="product"
                    />

                    {/* Tên sản phẩm */}
                    <h5
                        className="name_product text-[14px] font-semibold mt-3 text-center px-2 break-words whitespace-normal">
                        {cf1.name}
                    </h5>

                    <div className={`product_content_footer flex items-center px-2 ${isLogin ? 'justify-between' : 'justify-center'
                        }`}>
                        {/* Giá sản phẩm */}
                        <p
                            className="cost text-center text-[14px] font-medium">
                            {cf1.price}
                        </p>

                        {/* Nút thêm vào giỏ */}
                        {isLogin && (
                            <div className="flex justify-center">
                                <button
                                    className="w-[35px] h-[35px] flex items-center justify-center 
                                align-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );

}

export default ListCf1;