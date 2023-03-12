import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: 20,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
