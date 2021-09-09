import { Link } from "react-router-dom"
const Contact = () => {
    return (
        <div>
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Contact Us</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><Link to="/home">Trang chủ</Link></li>
                                            <li className="active" aria-current="page">Contact Us</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...:::: End Breadcrumb Section:::... */}
            {/* ...::::Start Map Section:::... */}
            <div className="map-section" data-aos-delay={0}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044335!2d105.74459841501931!3d21.038127785993264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1628072270321!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* ...::::End  Map Section:::... */}
            {/* ...::::Start Contact Section:::... */}
            <div className="contact-section">
                <div className="container-fluid">
                    <div className="row mr-5 ml-5 mb-5">
                        <div className="col-lg-4">
                            {/* Start Contact Details */}
                            <div className="contact-details-wrapper section-top-gap-100" data-aos-delay={0}>
                                <div className="contact-details">
                                    {/* Start Contact Details Single Item */}
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <span href="tel:+0123456789">0123456789</span>
                                            <span href="tel:+0123456789">0123456789</span>
                                        </div>
                                    </div> {/* End Contact Details Single Item */}
                                    {/* Start Contact Details Single Item */}
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-globe" />
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <span href="mailto:demo@example.com">demo@example.com</span>
                                            <span href="https://www.example.com/">www.example.com</span>
                                        </div>
                                    </div> {/* End Contact Details Single Item */}
                                    {/* Start Contact Details Single Item */}
                                    <div className="contact-details-single-item">
                                        <div className="contact-details-icon">
                                            <i className="fa fa-map-marker" />
                                        </div>
                                        <div className="contact-details-content contact-phone">
                                            <span>Tòa nhà FPT Polytechnic</span>
                                        </div>
                                    </div> {/* End Contact Details Single Item */}
                                </div>
                                {/* Start Contact Social Link */}
                                <div className="contact-social">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div> {/* End Contact Social Link */}
                            </div> {/* End Contact Details */}
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form section-top-gap-100" data-aos-delay={200}>
                                <h3>Liên lạc</h3>
                                <form id="contact-form" action="https://whizthemes.com/mail-php/jaber/contact.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-name">Name</label>
                                                <input name="name" type="text" id="contact-name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-email">Email</label>
                                                <input name="email" type="email" id="contact-email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-subject">Subject</label>
                                                <input name="subject" type="text" id="contact-subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="default-form-box mb-20">
                                                <label htmlFor="contact-message">Your Message</label>
                                                <textarea name="message" id="contact-message" cols={30} rows={10} defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn btn-dark btn-black-default-hover pt-2 pb-2" type="submit">Gửi</button>
                                        </div>
                                        <p className="form-messege" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
