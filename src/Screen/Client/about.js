import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Về Chúng Tôi</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li className="active" aria-current="page">About Us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* Start About Top */}
            <div className="about-top">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-between d-sm-column pl-5 pr-5">
                        <div className="col-md-6">
                            <div className="about-img" data-aos-delay={0}>
                                <div className="img-responsive">
                                    <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/15/photo-1-162635544598563706437.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content" data-aos-delay={200}>
                                <h3 className="title">GIỚI THIỆU CỬA HÀNG MIXIFAN CỦA CHÚNG TÔI</h3>
                                <h5 className="semi-title">Chúng tôi tin rằng mọi dự án tồn tại trong thế giới kỹ thuật số đều là kết quả của một ý tưởng và mọi ý tưởng đều có nguyên nhân.</h5>
                                <p>
                                    Vì lý do này, mỗi thiết kế của chúng tôi phục vụ một ý tưởng. Sức mạnh của chúng tôi trong thiết kế được phản ánh qua tên của chúng tôi, sự chăm chút của chúng tôi đến từng chi tiết. Chuyên gia của chúng tôi sẽ không ngại đi thêm dặm chỉ để đạt đến mức gần như hoàn hảo. Chúng ta không yêu cầu mọi thứ phải hoàn hảo, nhưng chúng ta cần chúng được chăm sóc một cách hoàn hảo nhất. Đó là lý do tại sao chúng tôi sẵn sàng đóng góp ở mức tốt nhất. Không một chi tiết nào bị bỏ sót dưới con mắt chuyên nghiệp của Billey. Trở nên tốt hơn, cùng nhau như một.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="team-section section-top-gap-100 secton-fluid section-inner-bg">
                {/* Start Section Content Text Area */}
                <div className="section-title-wrapper" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content text-center">
                                        <h3 className="section-title">GẶP ĐỘI CỦA CHÚNG TÔI</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Section Content Text Area */}
                <div className="team-wrapper">
                    <div className="container-fluid">
                        <div className="row mb-n6 pl-5 pr-5">
                            <div className="col-xl-2 mb-5">
                                <div className="team-single" data-aos-delay={0}>
                                    <div className="team-img">
                                        <img className="img-fluid" src="https://cdn.hit.vn/toquoc/e88b1e83-be4c-4c83-4e3b-cb340e6012a9/a189fe68-db8f-41cc-50d4-4c17ac9d531a.jpg" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Phùng Khoa Học</h6>
                                        <span className="team-title">Thợ sửa</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 mb-5">
                                <div className="team-single" data-aos-delay={0}>
                                    <div className="team-img">
                                        <img className="img-fluid" height="145px" src="https://yeugame.vn/wp-content/uploads/2020/10/img_5f7e98b0eb257.jpg" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Mr. Moi</h6>
                                        <span className="team-title">Giám đốc</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 mb-5">
                                <div className="team-single" data-aos-delay={0}>
                                    <div className="team-img">
                                        <img className="img-fluid" src="https://kenh14cdn.com/2019/8/5/600px-djchjp-15649427572311220085514.jpg" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Mr. Chip</h6>
                                        <span className="team-title">Phó Giám Đốc</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 mb-5">
                                <div className="team-single" data-aos-delay={0}>
                                    <div className="team-img">
                                        <img className="img-fluid" src="https://cdn-img.thethao247.vn/upload/ssuner/2018/10/10/refund2.jpg" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Mr. Tú Đu.</h6>
                                        <span className="team-title">Thợ kéo</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 mb-5">
                                <div className="team-single" data-aos-delay={0}>
                                    <div className="team-img">
                                        <img className="img-fluid" src="https://nono-vpic-dl.akamaized.net/download/file/sg/nonolive/nnphotos/1547464245_48159136" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Mr. Nhism</h6>
                                        <span className="team-title">Quản lý hóa đơn</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 mb-5">
                                <div className="team-single" data-aos-delay={0}>
                                    <div className="team-img">
                                        <img className="img-fluid" src="https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/8/e/1/e8e1edff83d2e8ae67145648564d14f3.jpg" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Mr. Quang ber</h6>
                                        <span className="team-title">Trọng tài thi đấu</span>
                                        <ul className="team-social pos-absolute">
                                            <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                            <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                            <li><a href="#"><i className="ion-social-instagram" /></a></li>
                                            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                                            <li><a href="#"><i className="ion-social-rss" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
