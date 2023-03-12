import { Icon } from "@iconify/react";
import Slider from "react-slick";
import Card from "./Card";
import { useRef } from "react";

const SliderSection = ({ heading, data }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <section className="card-section px-5 pt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">
          {heading}
        </h2>
        <div className="shrink-0">
          <button
            aria-label="slide left"
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <Icon className="text-5xl" icon="ic:baseline-arrow-circle-left" />
          </button>
          <button
            aria-label="slide right"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <Icon className="text-5xl" icon="ic:baseline-arrow-circle-right" />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <Card data={item} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SliderSection;
