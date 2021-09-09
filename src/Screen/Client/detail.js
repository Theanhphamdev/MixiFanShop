import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {get, getProductByCateId} from '../../Api/ProductApi';
import { Link } from 'react-router-dom';
const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [productCate, setProductCate] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
        try {
            const { data } = await get(id);
            setProduct(data);
        } catch (error) {}
        };
        getProduct();  
    }, [id]);
    
    useEffect(() => {
        const getProductCate = async () => {
            const idCate = await product.category;
            try {
                const { data } = await getProductByCateId(idCate);
                    setProductCate(data)
            } catch (error) {
                console.log('Đọc lỗi đi : ', error)
            }
        }
        getProductCate();
    }, [product.category])
    const priceNew = new Intl.NumberFormat('vi', {style : 'currency', currency : 'VND'}).format(product.price)
    
    return (
        <div>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Sản phẩm chi tiết</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><Link to="/home">Trang chủ</Link></li>
                                            <li><Link to="/shops">Cửa hàng</Link></li>
                                            <li className="active" aria-current="page">{product.name}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* Start Product Details Section */}
            <div className="product-details-section">
                <div className="container-fluid">
                    <div className="row ps-5 pl-5">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-details-gallery-area" data-aos-delay={0}>
                                {/* Start Large Image */}
                                <div className="product-large-image product-large-image-horaizontal swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-details-content-area product-details--golden" data-aos-delay={200}>
                                {/* Start  Product Details Text Area*/}
                                <div className="product-details-text">
                                    <h4 className="title">{product.name}</h4>
                                    
                                    <div className="d-flex align-items-center">
                                        <ul className="review-star">
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="fill"><i className="ion-android-star" /></li>
                                            <li className="empty"><i className="ion-android-star" /></li>
                                        </ul>
                                        
                                    </div>
                                    <div className="price">{priceNew}</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
                                        justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                                        nulla.</p>
                                </div> {/* End  Product Details Text Area*/}
                                {/* Start Product Variable Area */}
                                <div className="product-details-variable">
                                    <h4 className="title">Tùy chọn có sẵn</h4>
                                    {/* Product Variable Single Item */}
                                    <div className="variable-single-item">
                                        <div className="product-stock">
                                            <span className="product-stock-in">
                                                <i className="ion-checkmark-circled" />
                                            </span> 
                                            200 {product.status==1 ? 'CÒN HÀNG' : 'HẾT HÀNG'}
                                        </div>
                                    </div>
                                    {/* Product Variable Single Item */}
                                    <div className="variable-single-item">
                                        <span>Color</span>
                                        <div className="product-variable-color">
                                            <label htmlFor="product-color-red">
                                                <input name="product-color" id="product-color-red" className="color-select" type="radio" defaultChecked />
                                                <span className="product-color-red" />
                                            </label>
                                            <label htmlFor="product-color-tomato">
                                                <input name="product-color" id="product-color-tomato" className="color-select" type="radio" />
                                                <span className="product-color-tomato" />
                                            </label>
                                            <label htmlFor="product-color-green">
                                                <input name="product-color" id="product-color-green" className="color-select" type="radio" />
                                                <span className="product-color-green" />
                                            </label>
                                            <label htmlFor="product-color-light-green">
                                                <input name="product-color" id="product-color-light-green" className="color-select" type="radio" />
                                                <span className="product-color-light-green" />
                                            </label>
                                            <label htmlFor="product-color-blue">
                                                <input name="product-color" id="product-color-blue" className="color-select" type="radio" />
                                                <span className="product-color-blue" />
                                            </label>
                                            <label htmlFor="product-color-light-blue">
                                                <input name="product-color" id="product-color-light-blue" className="color-select" type="radio" />
                                                <span className="product-color-light-blue" />
                                            </label>
                                        </div>
                                    </div>
                                   
                                    <div className="d-flex align-items-center ">
                                        <div className="variable-single-item ">
                                            <span>Số lượng</span>
                                            <div className="product-variable-quantity">
                                                <input min={1} max={100} defaultValue={1} type="number" />
                                            </div>
                                        </div>
                                        <div className="product-add-to-cart-btn">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">+ Thêm vào giỏ</a>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="product-details-catagory">
                                    <span className="title">LOẠI HÀNG:</span>
                                    <ul>
                                        <li><Link to={`/shops/${product.category}/category`}>{product.category}</Link></li>
                                    </ul>
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End Product Details Section */}
            {/* Start Product Content Tab Section */}
            <div className="product-details-content-tab-section section-top-gap-100">
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-12">
                            <div className="product-details-content-tab-wrapper" data-aos-delay={0}>
                                {/* Start Product Details Tab Button */}
                                <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                                    <li><a className="nav-link active" data-bs-toggle="tab" href="#description">
                                        Miêu tả
                                    </a></li>
                                    <li><a className="nav-link" data-bs-toggle="tab" href="#specification">
                                        Chi tiết
                                    </a></li>
                                    <li><a className="nav-link" data-bs-toggle="tab" href="#review">
                                        Đánh giá (1)
                                    </a></li>
                                </ul> {/* End Product Details Tab Button */}
                                {/* Start Product Details Tab Content */}
                                <div className="product-details-content-tab">
                                    <div className="tab-content">
                                        {/* Start Product Details Tab Content Singel */}
                                        <div className="tab-pane active show" id="description">
                                            <div className="single-tab-content-item">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue
                                                    nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
                                                    ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
                                                    adipiscing cursus eu, suscipit id nulla. </p>
                                                <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
                                                    quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies
                                                    massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero
                                                    hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
                                                    nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus,
                                                    consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
                                                    imperdiet ligula euismod eget</p>
                                            </div>
                                        </div> {/* End Product Details Tab Content Singel */}
                                        {/* Start Product Details Tab Content Singel */}
                                        <div className="tab-pane" id="specification">
                                            <div className="single-tab-content-item">
                                                <table className="table table-bordered mb-20">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Compositions</th>
                                                            <td>Polyester</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Styles</th>
                                                            <td>Girly</td>
                                                        </tr><tr>
                                                            <th scope="row">Properties</th>
                                                            <td>Short Dress</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>Fashion has been creating well-designed collections since 2010. The brand
                                                    offers feminine designs delivering stylish separates and statement dresses
                                                    which have since evolved into a full ready-to-wear collection in which every
                                                    item is a vital part of a woman's wardrobe. The result? Cool, easy, chic
                                                    looks with youthful elegance and unmistakable signature style. All the
                                                    beautiful pieces are made in Italy and manufactured with the greatest
                                                    attention. Now Fashion extends to a range of accessories including shoes,
                                                    hats, belts and more!</p>
                                            </div>
                                        </div> {/* End Product Details Tab Content Singel */}
                                        {/* Start Product Details Tab Content Singel */}
                                        <div className="tab-pane" id="review">
                                            <div className="single-tab-content-item">
                                                {/* Start - Review Comment */}
                                                <ul className="comment">
                                                    {/* Start - Review Comment list*/}
                                                    <li className="comment-list">
                                                        <div className="comment-wrapper">
                                                            <div className="comment-img">
                                                                <img src="assets/images/user/image-1.png" alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-content-top">
                                                                    <div className="comment-content-left">
                                                                        <h6 className="comment-name">Kaedyn Fraser</h6>
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
                                                                    <div className="comment-content-right">
                                                                        <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                    </div>
                                                                </div>
                                                                <div className="para-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Tempora inventore dolorem a unde modi iste odio amet,
                                                                        fugit fuga aliquam, voluptatem maiores animi dolor nulla
                                                                        magnam ea! Dignissimos aspernatur cumque nam quod sint
                                                                        provident modi alias culpa, inventore deserunt
                                                                        accusantium amet earum soluta consequatur quasi eum eius
                                                                        laboriosam, maiores praesentium explicabo enim dolores
                                                                        quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam
                                                                        officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Start - Review Comment Reply*/}
                                                        <ul className="comment-reply">
                                                            <li className="comment-reply-list">
                                                                <div className="comment-wrapper">
                                                                    <div className="comment-img">
                                                                        <img src="assets/images/user/image-2.png" alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="comment-content-top">
                                                                            <div className="comment-content-left">
                                                                                <h6 className="comment-name">Oaklee Odom</h6>
                                                                            </div>
                                                                            <div className="comment-content-right">
                                                                                <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="para-content">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipisicing elit. Tempora inventore dolorem a
                                                                                unde modi iste odio amet, fugit fuga aliquam,
                                                                                voluptatem maiores animi dolor nulla magnam ea!
                                                                                Dignissimos aspernatur cumque nam quod sint
                                                                                provident modi alias culpa, inventore deserunt
                                                                                accusantium amet earum soluta consequatur quasi
                                                                                eum eius laboriosam, maiores praesentium
                                                                                explicabo enim dolores quaerat! Voluptas ad
                                                                                ullam quia odio sint sunt. Ipsam officia, saepe
                                                                                repellat. </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul> {/* End - Review Comment Reply*/}
                                                    </li> {/* End - Review Comment list*/}
                                                    {/* Start - Review Comment list*/}
                                                    <li className="comment-list">
                                                        <div className="comment-wrapper">
                                                            <div className="comment-img">
                                                                <img src="assets/images/user/image-3.png" alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-content-top">
                                                                    <div className="comment-content-left">
                                                                        <h6 className="comment-name">Jaydin Jones</h6>
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
                                                                    <div className="comment-content-right">
                                                                        <a href="#"><i className="fa fa-reply" />Reply</a>
                                                                    </div>
                                                                </div>
                                                                <div className="para-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Tempora inventore dolorem a unde modi iste odio amet,
                                                                        fugit fuga aliquam, voluptatem maiores animi dolor nulla
                                                                        magnam ea! Dignissimos aspernatur cumque nam quod sint
                                                                        provident modi alias culpa, inventore deserunt
                                                                        accusantium amet earum soluta consequatur quasi eum eius
                                                                        laboriosam, maiores praesentium explicabo enim dolores
                                                                        quaerat! Voluptas ad ullam quia odio sint sunt. Ipsam
                                                                        officia, saepe repellat. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li> {/* End - Review Comment list*/}
                                                </ul> {/* End - Review Comment */}
                                                <div className="review-form">
                                                    <div className="review-form-text-top">
                                                        <h5>ADD A REVIEW</h5>
                                                        <p>Your email address will not be published. Required fields are marked
                                                            *</p>
                                                    </div>
                                                    <form action="#" method="post">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="default-form-box">
                                                                    <label htmlFor="comment-name">Your name <span>*</span></label>
                                                                    <input id="comment-name" type="text" placeholder="Enter your name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="default-form-box">
                                                                    <label htmlFor="comment-email">Your Email <span>*</span></label>
                                                                    <input id="comment-email" type="email" placeholder="Enter your email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="default-form-box">
                                                                    <label htmlFor="comment-review-text">Your review
                                                                        <span>*</span></label>
                                                                    <textarea id="comment-review-text" placeholder="Write a review" required defaultValue={""} />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="btn btn-md btn-black-default-hover" type="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> {/* End Product Details Tab Content Singel */}
                                    </div>
                                </div> {/* End Product Details Tab Content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End Product Content Tab Section */}
            {/* Start Product Default Slider Section */}
            <div className="product-default-slider-section section-top-gap-100">
                {/* Start Section Content Text Area */}
                <div className="section-title-wrapper" data-aos-delay={0}>
                    <div className="container-fluid">
                        <div className="row ps-5 pl-5">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">NHỮNG SẢN PHẨM LIÊN QUAN</h3>
                                        <p>Duyệt qua những sản phẩm liên quan của chúng tôi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Section Content Text Area */}
                <div className="product-wrapper" data-aos-delay={0}>
                    <div className="container-fluid">
                        <div className="row ps-5 pl-5">
                            {productCate.map((item, index) => (
                            <div className="col-3" key={index}>
                                <div className="product-slider-default-2rows default-slider-nav-arrow">
                                    <div className="product-default-single-item product-color--golden">
                                        <div className="image-box">
                                            <a href="product-details-default.html" className="image-link image-products">
                                                <img src={item.image} alt="" />
                                            </a>
                                            <div className="tag">
                                                <span>sale</span>
                                            </div>
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
                                                    <a href="product-details-default.html">{item.name}</a>
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
            </div>
        </div>

    )
}

export default ProductDetail
