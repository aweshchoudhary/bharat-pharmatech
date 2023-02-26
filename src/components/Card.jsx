import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <article className="w-full px-3 shrink-0">
      <Link
        href={`/p/${data.category}/${data.title
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        className="card"
      >
        <figure className="w-full sm:h-[300px] h-[250px] bg-white border overflow-hidden">
          <Image
            src={data.images[0]}
            width="500"
            height="500"
            className="w-full h-full object-contain hover:scale-110 transition"
            alt={data.title + " - bharat pharmatech"}
          />
          <figcaption className="opacity-0">{data.title}</figcaption>
        </figure>
        <h3 className="sm:text-xl text-lg font-semibold mt-3 uppercase">
          {data.title}
        </h3>
      </Link>
    </article>
  );
};

export default Card;
