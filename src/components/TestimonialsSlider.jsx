import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: 20,
  };
  return (
    <Slider {...settings}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Slider>
  );
};

export default TestimonialsSlider;
