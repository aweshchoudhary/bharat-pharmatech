import Image from "next/image";

const Card = () => {
  return (
    <article className="w-full px-3 shrink-0">
      <div className="card">
        <figure className="w-full h-[300px] bg-gray-200">
          <Image
            src={"https://source.unsplash.com/random"}
            width="500"
            height="500"
            className="w-full h-full object-cover"
          />
          <figcaption className="text-xl font-bold mt-2">
            27D Tooling Double Sided Rotary Tablet Press Machine Bharat
            Pharmatech
          </figcaption>
        </figure>
      </div>
    </article>
  );
};

export default Card;
