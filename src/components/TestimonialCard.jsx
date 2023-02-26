import { Icon } from "@iconify/react";

const TestimonialCard = () => {
  return (
    <div className=" px-3 w-full">
      <div className="p-5 bg-white text-black border min-[300px] grid place-items-center">
        <p>
          &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus et sequi nesciunt quasi nisi facilis natus ab dolor
          similique doloribus, eius fugiat minima quam. Deserunt molestiae
          quaerat nulla mollitia accusamus&quot;
        </p>
        <div className="flex items-center justify-between mt-3 w-full">
          <h3 className="font-medium">Awesh Choudhary</h3>
          <div className="icons flex items-center text-3xl text-yellow-500">
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
            <Icon icon="material-symbols:star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
