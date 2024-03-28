import Image from "next/image";
import React from "react";
import HomeBannerImg from "./../../public/Image3.jpg";


const HomeBanner = () => {
    return (
        <div className="homepage-banner">
            <div className="banner-image-wrapper">
                <Image
                    priority
                    src="/BannerBackground.png"
                    fill
                    cover="true"
                    objectposition='center'
                    alt='Home banner'
                />
            </div>
            <div className="banner-content">
                <h2 className='banner-title'>The ultimate atomix starter theme to help<br />your business grow faster!</h2>
                <div className="content-btn">Contact Us</div>
            </div>
        </div>
    );
}

export default HomeBanner