import { Link, NavLink } from "react-router-dom"
import { getAll, getProductByCateId, getProductSearch } from '../../Api/ProductApi';
import { getAllCate } from '../../Api/CategoryApi';
import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [keySearch, setKeySearch] = useState('');
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const {id} = useParams();
    const onSubmit = async (data) => {
        setKeySearch(data.keywd);
    }
        useEffect(() => {
            if(keySearch != '' && keySearch !=null){
                const getProducts = async () => {
                    try {
                        const { data } = await getProductSearch(keySearch);
                        setProducts(data)
                        
                    } catch (error) {
                        console.log(error)
                    }
                    
                };
                getProducts();
            } 
        }, [keySearch])
    
        useEffect(() => {
            if(id){
                const getProducts = async () => {
                    try {
                        const { data } = await getProductByCateId(id);
                        setProducts(data)
                        
                    } catch (error) {
                        console.log(error)
                    }
                    
                };
                getProducts();
            }
        },[id])
    
    useEffect(() => { 
        if(id == null){  
            const getProducts = async () => {
                try {
                    const { data } = await getAll();
                    setProducts(data)
                } catch (error) {
                    console.log(error)
                }

            };
            getProducts();
        }
    }, []);
    
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

    function ObjectLength(object) {
        var length = 0;
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                ++length;
            }
        }
        return length;
    };

    return (
        <div>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Cửa hàng</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li className="active" aria-current="page">Cửa hàng</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* ...:::: Start Shop Section:::... */}
            <div className="shop-section">
                <div className="container-fluid">
                    <div className="row pl-5 pb-5">
                        <div className="col-lg-3">
                            {/* Start Sidebar Area */}
                            <div className="siderbar-section" data-aos-delay={0}>
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">LOẠI HÀNG</h6>
                                    <div className="sidebar-content">
                                        <ul className="sidebar-menu">
                                            {categories.map((item, index) => (
                                                <li key={index}><Link to={`/shops/${item.id}/category`}>{item.name}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                                {/* Start Single Sidebar Widget */}
                                <div className="sidebar-single-widget">
                                    <h6 className="sidebar-title">SEARCH</h6>
                                    <div className="sidebar-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input className="form-control" type="text" placeholder="Nhập từ khóa" {...register('keywd')}/>
                                            <button type="submit" className="btn btn-dark mt-2">Tìm kiếm</button>
                                        </form>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                                

                                <div className="sidebar-single-widget">
                                    <div className="sidebar-content">
                                        <a href="product-details-default.html" className="sidebar-banner img-hover-zoom">
                                            <img className="img-fluid" src="assets/images/banner/side-banner.jpg" alt="" />
                                        </a>
                                    </div>
                                </div> {/* End Single Sidebar Widget */}
                            </div> {/* End Sidebar Area */}
                        </div>
                        <div className="col-lg-9">
                            {/* Start Shop Product Sorting Section */}
                            <div className="shop-sort-section">
                                <div className="container">
                                    <div className="row">
                                        {/* Start Sort Wrapper Box */}
                                        <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column" data-aos-delay={0}>
                                            {/* Start Sort tab Button */}
                                            <div className="sort-tablist d-flex align-items-center">
                                                <ul className="tablist nav sort-tab-btn">
                                                    <li>
                                                        <a className="nav-link active text-dark" data-bs-toggle="tab" href="#layout-3-grid">
                                                            <i class="fas fa-th"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link text-dark" data-bs-toggle="tab" href="#layout-list">
                                                            <i class="fas fa-list"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Start Page Amount */}
                                                <div className="page-amount ms-2">
                                                    <span>Hiển thị 1–6 trong số {ObjectLength(products)} kết quả</span>
                                                </div> {/* End Page Amount */}
                                            </div> {/* End Sort tab Button */}
                                            {/* Start Sort Select Option */}
                                            <div className="sort-select-list d-flex align-items-center">
                                                <label className="me-2">Sort By:</label>
                                                <form action="#">
                                                    <fieldset>
                                                        <select name="speed" id="speed">
                                                            <option>Sort by average rating</option>
                                                            <option>Sort by popularity</option>
                                                            <option selected="selected">Sort by newness</option>
                                                            <option>Sort by price: low to high</option>
                                                            <option>Sort by price: high to low</option>
                                                            <option>Product Name: Z</option>
                                                        </select>
                                                    </fieldset>
                                                </form>
                                            </div> {/* End Sort Select Option */}
                                        </div> {/* Start Sort Wrapper Box */}
                                    </div>
                                </div>
                            </div> {/* End Section Content */}
                            {/* Start Tab Wrapper */}
                            <div className="sort-product-tab-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tab-content tab-animate-zoom">
                                                {/* Start Grid View Product */}
                                                <div className="tab-pane active show sort-layout-single" id="layout-3-grid">
                                                    <div className="row">
                                                        {products.map((item, index) => (
                                                            <div className="col-xl-4 col-sm-6 col-12" key={index}>
                                                                <div className="product-default-single-item product-color--golden" data-aos-delay={0}>
                                                                    <div className="image-box">
                                                                        <Link to={`/products/${item.id}/detail`} className="image-link image-products">
                                                                            <img src={item.image} alt="" />
                                                                        </Link>
                                                                        <div className="action-link">
                                                                            <div className="action-link-left">
                                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
                                                                            </div>
                                                                            <div className="action-link-right">
                                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                                                <a href="wishlist.html"><i className="icon-heart" /></a>
                                                                                <a href="compare.html"><i className="icon-shuffle" /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="content">
                                                                        <div className="content-left">
                                                                            <h6 className="title">
                                                                                <Link to={`/products/${item.id}/detail`}>{item.name}</Link>
                                                                            </h6>
                                                                            <ul className="review-star">
                                                                                <li className="fill"><i className="ion-android-star" />
                                                                                </li>
                                                                                <li className="fill"><i className="ion-android-star" />
                                                                                </li>
                                                                                <li className="fill"><i className="ion-android-star" />
                                                                                </li>
                                                                                <li className="fill"><i className="ion-android-star" />
                                                                                </li>
                                                                                <li className="empty"><i className="ion-android-star" />
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="content-right">
                                                                            <p className="price">{new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div> {/* End Grid View Product */}
                                                {/* Start List View Product */}
                                                <div className="tab-pane sort-layout-single" id="layout-list">
                                                    <div className="row">
                                                        {products.map((item, index) => (
                                                            <div className="col-12" key={index}>
                                                                {/* Start Product Defautlt Single */}
                                                                <div className="product-list-single product-color--golden">
                                                                    <Link to={`/products/${item.id}/detail`} className="product-list-img-link">
                                                                        <img className="image-products2" src={item.image} alt="" />
                                                                    </Link>
                                                                    <div className="product-list-content">
                                                                        <h5 className="product-list-link"><Link to={`/products/${item.id}/detail`}>{item.name}</Link></h5>
                                                                        <ul className="review-star">
                                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                                            <li className="fill"><i className="ion-android-star" /></li>
                                                                            <li className="empty"><i className="ion-android-star" /></li>
                                                                        </ul>
                                                                        <span className="product-list-price">$95.00</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                            Nobis ad, iure incidunt. Ab consequatur temporibus non
                                                                            eveniet inventore doloremque necessitatibus sed, ducimus
                                                                            quisquam, ad asperiores</p>
                                                                        <div className="product-action-icon-link-list">
                                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart" className="btn btn-dark btn-black-default-hover pt-2 pb-2">Add to
                                                                                cart</a>
                                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" className="btn btn-dark btn-black-default-hover pt-2 pb-2"><i className="icon-magnifier" /></a>
                                                                            <a href="wishlist.html" className="btn btn-dark btn-black-default-hover pt-2 pb-2"><i className="icon-heart" /></a>
                                                                            <a href="compare.html" className="btn btn-dark btn-black-default-hover pt-2 pb-2"><i className="icon-shuffle" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div> {/* End Product Defautlt Single */}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div> {/* End List View Product */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End Tab Wrapper */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shop
