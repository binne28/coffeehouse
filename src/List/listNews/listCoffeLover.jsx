import React from 'react'

function ListCoffeLover() {
  const ListCfL = [
    {
      url: 'https://feed.thecoffeehouse.com//content/images/2021/08/img_8089_grande-1.jpg',
      title: 'Nghệ thuật pha chế - V60',
    },
    {
      url: 'https://feed.thecoffeehouse.com//content/images/2021/08/img_8089_grande-1.jpg',
      title: 'Nghệ thuật pha chế - V60',
    },
    {
      url: 'https://feed.thecoffeehouse.com//content/images/2021/08/img_8089_grande-1.jpg',
      title: 'Nghệ thuật pha chế - V60',
    },
    {
      url: 'https://feed.thecoffeehouse.com//content/images/2021/08/img_8089_grande-1.jpg',
      title: 'Nghệ thuật pha chế - V60',
    },
  ]
  return (
    <div className='flex flex-wrap gap-[2rem] justify-center'>
      {ListCfL.map((cfL, index) => (
        <div className=" w-[270px] h-auto" key={index}>
          <div className="bg-white rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.3)]
          overflow-hidden">
            <img src={cfL.url} alt="tinTuc" className="w-full h-[12rem] object-cover" />
            <div className="fotter_card">
              <h5 className="text-lg font-semibold text-gray-800 text-center">{cfL.title}</h5>
              <div className="mt-2 mb-4 flex justify-center">
                <button className="bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-orange-600 transition">
                  <span className="tracking-wide">Đọc tiếp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListCoffeLover;