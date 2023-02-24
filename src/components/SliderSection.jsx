import { Icon } from "@iconify/react";
import CardSlider from "./CardSlider";

const SliderSection = ({ heading }) => {
  return (
    <section className="card-section px-5 pt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <div>
          <button>
            <Icon className="text-5xl" icon="ic:baseline-arrow-circle-left" />
          </button>
          <button>
            <Icon className="text-5xl" icon="ic:baseline-arrow-circle-right" />
          </button>
        </div>
      </div>
      <CardSlider />
    </section>
  );
};

export default SliderSection;
