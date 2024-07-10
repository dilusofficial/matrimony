import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousal.css"
import slide1 from '../../assets/profile/slideImg1.jpeg'
import slide2 from '../../assets/profile/guruvayur-wedding-photography-of-jibin-and-anjali-1422x800.jpg'
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      
        <div className="carousel-slide">
          <img src={slide1} alt="Slide 1" className="w-full h-screen object-cover"/>
          <div className="carousel-caption">
            <h2 className="text-4xl font-bold text-white">Welcome To World No.1 Matrimony</h2>
            <p className="text-lg text-white">millions of success stories</p>
          </div>
        </div>
    </div>
  );
};

export default Carousel;
