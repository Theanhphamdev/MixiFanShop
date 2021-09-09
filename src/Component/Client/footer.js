import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getAllCate } from '../../Api/CategoryApi';
const FooterClient = () => {
  const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
          try {
            const { data } = await getAllCate();
            setCategories(data)
          } catch (error) {
            console.log(error)
          }

        };
        getCategories();
      }, []);
      
  return (
    <footer className="footer-section footer-bg">
      <div className="footer-wrapper">
        {/* Start Footer Top */}
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row ps-5 pl-5">
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div className="footer-widget-single-item footer-widget-color--golden" data-aos-delay={0}>
                  <h5 className="title">THÔNG TIN</h5>
                  <ul className="footer-nav">
                    <li><a href="#">Thông tin giao hàng</a></li>
                    <li><a href="#">Điều khoản &amp; Điều kiện</a></li>
                    <li><Link to="/contact-us">Liên hệ</Link></li>
                    <li><a href="#">Chính sách</a></li>
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div className="footer-widget-single-item footer-widget-color--golden" data-aos-delay={200}>
                  <h5 className="title">TÀI KHOẢN</h5>
                  <ul className="footer-nav">
                    <li><a href="my-account.html">Tài khoản của tôi</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="privacy-policy.html">Chính sách bảo mật</a></li>
                    <li><a href="faq.html">Câu hỏi thường gặp</a></li>
                    <li><a href="#">Lịch sử mua hàng</a></li>
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div className="footer-widget-single-item footer-widget-color--golden" data-aos-delay={400}>
                  <h5 className="title">LOẠI HÀNG</h5>
                  <ul className="footer-nav">
                    {categories.map((item, index)=>(
                    <li key={index}><Link to={`/shops/${item.id}/category`}>{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                {/* Start Footer Single Item */}
                <div className="footer-widget-single-item footer-widget-color--golden" data-aos-delay={400}>
                  <h5 className="title">VỀ CHÚNG TÔI</h5>
                  <ul className="footer-nav">
                    <li><a href="mail-to:Exams@fpt.edu.vn">Email: Exams@fpt.edu.vn</a></li>
                    <li><a href="Tel:99999999">Phone: 99999999</a></li>
                    <li><a href="#">Map: Cao đẳng thực hàng FPT Polytechnic</a></li>
                  </ul>
                </div>
                {/* End Footer Single Item */}
              </div>
              </div>
          </div>
        </div>
        {/* End Footer Top */}
        
      </div>
    </footer>

  )
}

export default FooterClient
