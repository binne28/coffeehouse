import React from 'react'
import classNames from 'classnames'
import './footer.scss'
import '../../libraryGrid.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_top-content flex align-center'>
        <div className='container my-auto'>
          <div className='flex'>
            <div className='col l-4 m-0 c-0 my-auto'>
              <div className='logo'>
                <img src="https://order.thecoffeehouse.com/_nuxt/img/logo-footer.72c86fc.png" alt="" />
              </div>
            </div>
            <div className='col l-8 m-12 c-12'>
              <div className='navbar_list flex flex-wrap gap-4 text-white text-sm lg:text-sm'>
                <div className='navbar_item flex items-center w-full sm:w-1/2 lg:w-1/4 gap-[10px] border-b-[1px] border-gray-500 py-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Thông tin website</span>
                </div>
                <div className='navbar_item flex items-center w-full sm:w-1/2 lg:w-1/4 gap-[10px] border-b-[1px] border-gray-500 py-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Điều khoản sử dụng</span>
                </div>
                <div className='navbar_item flex items-center w-full sm:w-1/2 lg:w-1/4 gap-[10px] border-b-[1px] border-gray-500 py-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Hotline</span>
                </div>
                <div className='navbar_item flex items-center w-full sm:w-1/2 lg:w-1/4 gap-[10px] border-b-[1px] border-gray-500 py-3 cursor-pointer'>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Liên hệ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom-content w-full h-auto bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Left Section */}
            <div className="w-full lg:w-2/3 lg:text-left space-y-2">
              <p className="footer_bottom-text tracking-tighter">
                Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN
              </p>
              <p className="footer_bottom-text tracking-tighter">
                Mã số DN: <b>0312867172</b> do sở kế hoạch và đầu tư tp. HCM cấp ngày
                23/07/2014
              </p>
              <p className="footer_bottom-text tracking-tighter">
                Người đại diện: <b>Hoàng Lâm Bảo Toàn</b>
              </p>
              <p className="footer_bottom-text tracking-tighter">
                Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh
                <br />
                Điện thoại: (028) 7107 8079 Email: baotoanit1505@gmail.com
              </p>
              <p className="footer_bottom-text tracking-tighter">
                © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền
                bảo lưu
              </p>
            </div>
            {/* Right Section */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <a
                href="http://online.gov.vn/Home/WebDetails/48042"
                target="_blank"
                className="block"
                rel="noopener noreferrer"
              >
                <img
                  src="https://order.thecoffeehouse.com/_nuxt/img/active.4cba64f.png"
                  alt="Chứng nhận"
                  className="w-[50px] lg:w-32"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;