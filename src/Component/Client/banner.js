import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getAllCate } from '../../Api/CategoryApi';
const BannerClient = () => {
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
    <div className="banner-section section-top-gap-100 section-fluid">
      <div className="banner-wrapper">
        <div className="container-fluid">
          <div className="row mb-n6">
            <div className="col-lg-6 col-12 mb-6">
              {/* Start Banner Single Item */}
              <div className="banner-single-item banner-style-1 banner-animation img-responsive" data-aos-delay={0}>
                <div className="image-banner1">
                  <img src="https://i.ytimg.com/vi/gQILkRY_pQs/maxresdefault.jpg" alt="" className="image-banner1" />
                </div>
                <div className="content">
                  <h4 className="title text-light">Mixi Shop Quần áo lưu niệm</h4>
                  <h5 className="sub-title">We design your home</h5>
                  <Link to="/shops" className="btn btn-lg btn-outline-golden icon-space-left">
                    <span className="d-flex align-items-center text-light">Shop now <i className="ion-ios-arrow-thin-right" /></span></Link>
                </div>
              </div>
              {/* End Banner Single Item */}
            </div>
            <div className="col-lg-6 col-12 mb-6">
              <div className="row mb-n6">
                {categories.map((item,index)=>(
                <div className="col-lg-6 col-sm-6 mb-6" key={index}>
                  <div className="banner-single-item banner-style-2 banner-animation img-responsive" data-aos-delay={0}>
                    <div className="image-banner2">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content text-light ml-2">
                      <h6 className="title text-light">{item.name}</h6>
                      <Link to={`/shops/${item.id}/category`} className="link-text text-light"><span>Shop
                        now</span></Link>
                    </div>
                  </div>
                </div>    
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerClient
