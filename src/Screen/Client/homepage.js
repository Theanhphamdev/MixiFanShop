import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getProductLimit } from '../../Api/ProductApi'
import { useState, useEffect } from "react";
import BannerClient from '../../Component/Client/banner'
import { useParams } from 'react-router';

const HomePage = (props) => {
    const CountPage = Math.round((props.products.length)/4)
    
    let arr = Array.apply(null, {length: CountPage}).map(Number.call, Number);
    const {page} = useParams();
    
    
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (page) {
            const getProducts = async () => {
                try {
                    const { data } = await getProductLimit(page);
                    setProducts(data)
                } catch (error) {
                    console.log(error)
                }
            };
            getProducts();
        } else {
            const getProducts = async () => {
                try {
                    const { data } = await getProductLimit(1);
                    setProducts(data)
                } catch (error) {
                    console.log(error)
                }
            };
            getProducts();
        }
        
    }, [page]);
    return (
        <>
            <BannerClient/>
            <div className="product-default-slider-section section-top-gap-100 section-inner-bg">
                {/* Start Section Content Text Area */}
                <div className="section-title-wrapper" data-aos-delay={0}>
                    <div className="container-fluid">
                        <div className="row ps-5 pl-5">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">SẢN PHẨM BÁN CHẠY</h3>
                                        <p>Thêm người bán hàng tốt nhất của chúng tôi vào danh sách hàng tuần của bạn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Section Content Text Area */}
                <div className="product-wrapper" data-aos-delay={0}>
                    <div className="container-fluid">
                        <div className="row pr-5 pl-5">
                            {products.map((item,index)=>(
                                <div className="col-3" key={index}>
                                <div className="product-slider-default-2rows default-slider-nav-arrow">
                                    <div className="product-default-single-item product-color--golden">
                                        <div className="image-box">
                                            <Link to={`/products/${item.id}/detail`} className="image-link image-products">
                                                <img src={item.image} alt="" />
                                            </Link>
                                            {/* <div className="tag">
                                                <span>sale</span>
                                            </div> */}
                                            <div className="action-link">
                                                <div className="action-link-left">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Thêm vào giỏ</a>
                                                </div>
                                                <div className="action-link-right">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview">
                                                        <i className="icon-magnifier" />
                                                    </a>
                                                    <a href="wishlist.html"><i className="icon-heart" /></a>
                                                    <a href="compare.html"><i className="icon-shuffle" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="content-left">
                                                <h6 className="title">
                                                    <Link to={`/products/${item.id}/detail`}>{item.name}</Link>
                                                </h6>
                                            </div>
                                            <div className="">
                                                <p className="price">{new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="page-pagination text-center" data-aos-delay={0}>
                    <ul>
                        {arr.map((item,index)=> {
                            return <li key={index}><NavLink to={`/home/${item+1}`}>{item+1}</NavLink></li> 
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomePage
