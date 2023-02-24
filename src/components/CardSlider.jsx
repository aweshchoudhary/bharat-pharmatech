import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
    </Slider>
  );
};

export default CardSlider;
