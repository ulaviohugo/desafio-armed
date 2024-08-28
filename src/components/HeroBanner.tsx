import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
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
    <section className="hero-banner">
      <Slider {...settings}>
        <div>
          <img src="../assets/images/armed_4730d06c97f30e3b83d114.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="../assets/images/armed_b7a4543ed4cab55b907aa0.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="../assets/images/armed_d83c3524f780c05806227f.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="../assets/images/armed_f0f8dc1677c90528937a0e.jpg" alt="Slide 4" />
        </div>
      </Slider>
    </section>
  );
};

export default HeroBanner;
