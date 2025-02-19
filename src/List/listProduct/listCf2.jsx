import React from 'react'
import '../../libraryGrid.scss'
import classNames from 'classnames'

function ListCf2({ isLogin }) {
    const listCf2 = [
        {
            url: 'https://minio.thecoffeehouse.com/image/admin/1681717171_cpg-ethiopia-guji-shakisso_400x400.jpg',
            name: 'HỘP TROPICAL GARDEN 200G',
            price: '300.000đ',

        },
        {
            url: 'https://minio.thecoffeehouse.com/image/admin/1681717171_cpg-ethiopia-guji-shakisso_400x400.jpg',
            name: 'HỘP TROPICAL GARDEN 200G',
            price: '300.000đ',

        },
    ]
    return (
        <div className="flex flex-wrap justify-center">
            {listCf2.map((cf2, index) => (
                <div
                    className="col l-2 m-4 c-12 shadow p-6 bg-white rounded-lg text-black border group"
                    key={index}
                >
                    {/* Hình ảnh sản phẩm */}
                    <img
                        className="w-[170px] h-[170px] mx-auto rounded-lg transform transition duration-300 group-hover:scale-110"
                        src={cf2.url}
                        alt="product"
                    />

                    {/* Tên sản phẩm */}
                    <h5
                        className="name_product text-[14px] font-semibold mt-3 text-center px-2 break-words whitespace-normal">
                        {cf2.name}
                    </h5>

                    <div className={`product_content_footer flex items-center px-2 ${isLogin ? 'justify-between' : 'justify-center'
                        }`}>
                        {/* Giá sản phẩm */}
                        <p
                            className="cost text-center text-[14px] font-medium">
                            {cf2.price}
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

export default ListCf2;