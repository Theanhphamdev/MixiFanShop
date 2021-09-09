import React from 'react'

const BannerSection = (props) => {
    return (
        <div className="banner-section">
            <div className="banner-wrapper clearfix">
                {props.categories.map((item,index)=>(
                <div className="banner-single-item banner-style-4 banner-animation banner-color--golden float-start img-responsive" data-aos-delay={0} key={index}>
                    <div className="image">
                        <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <a href="product-details-default.html" className="content">
                        <div className="inner">
                            <h4 className="title">{item.name}</h4>
                            <h6 className="sub-title">20 products</h6>
                        </div>
                        <span className="round-btn"><i className="ion-ios-arrow-thin-right" /></span>
                    </a>
                </div>
                ))}
            </div>
        </div>

    )
}

export default BannerSection
