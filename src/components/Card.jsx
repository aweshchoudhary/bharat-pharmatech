import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <article className="w-full px-3 shrink-0">
      <Link href={"/p/asldfj"} className="card">
        <figure className="w-full sm:h-[300px] h-[250px] bg-gray-200">
          <Image
            src={"https://source.unsplash.com/random"}
            width="500"
            height="500"
            className="w-full h-full object-cover"
          />
          <figcaption className="opacity-0">
            27D Tooling Double Sided Rotary Tablet Press Machine Bharat
            Pharmatech
          </figcaption>
        </figure>
        <h3 className="sm:text-xl text-lg font-semibold mt-3">
          27D Tooling Double Sided Rotary Tablet Press Machine Bharat Pharmatech
        </h3>
      </Link>
    </article>
  );
};

export default Card;
