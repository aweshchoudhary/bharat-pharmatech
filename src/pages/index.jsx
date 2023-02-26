import { Icon } from "@iconify/react";
import Head from "next/head";
import Link from "next/link";
import SliderSection from "@/components/SliderSection";
import Slider from "react-slick";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 500,
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Bharat Pharmatech",
    alternateName: "Pharma Machinery & Spares",
    url: "https://bharatpharmatech.com",
    logo: "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "9687849837",
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "IN",
        availableLanguage: ["en", "Hindi", "Marathi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        telephone: "0901507751",
        contactType: "technical support",
        contactOption: "TollFree",
        areaServed: "IN",
        availableLanguage: ["en", "Hindi", "Marathi", "Gujarati"],
      },
    ],
    sameAs: [
      "www.bharatpharmatech.com",
      "https://youtube.com/@pharmamachineryspares",
      "https://instagram.com/bharatpharmatech",
    ],
  };
  const websieSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Bharat Pharmatech",
    url: "https://bharatpharmatech.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bharatpharmatech.com/search/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const [data, setData] = useState([]);

  const isMounted = useRef(false);
  useEffect(() => {
    const setProductsData = () => {
      products.forEach((category) => {
        categories.forEach((item) => {
          if (item.id === category.id) {
            setData((prev) => {
              return [
                ...prev,
                {
                  name: item.name,
                  data: category.data,
                },
              ];
            });
          }
        });
      });
    };
    isMounted.current && setProductsData();
    return () => {
      isMounted.current = true;
    };
  }, []);
  return (
    <>
      <Head>
        <title>Bharat Pharmatech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png"
        />
        <StructuredData data={organizationSchema} />
        <StructuredData data={websieSchema} />
      </Head>
      <section className="hero-section w-full md:h-[550px] md:flex border-b">
        <div className="md:w-[50%] bg-black text-white h-full p-5 flex items-center">
          <div className="py-10">
            <h1 className="text-5xl font-bold">Bharat Pharmatech</h1>
            <h2 className="text-xl font-medium">
              Brand Of Pharma Machinery & Spares
            </h2>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quaerat delectus commodi expedita modi cum iusto at nisi? Quidem,
              provident natus possimus assumenda tenetur quo excepturi
              voluptatum. Cum, officia odit.
            </p>
            <div>
              <button className="px-5 py-2 rounded-full bg-white text-black mt-5 font-medium">
                Products
              </button>
              <button className="px-5 underline underline-offset-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] h-full md:block hidden">
          <div className="sliders-asdf h-full">
            <Slider {...settings}>
              <div>
                <h2 className="text-3xl px-5 py-3 font-semibold">
                  Granulation Machinery
                </h2>
                <div className="grid grid-rows-2 gap-3 px-5 grid-cols-2">
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl px-5 py-3 font-semibold">
                  Granulation Machinery
                </h2>
                <div className="grid grid-rows-2 gap-3 px-5 grid-cols-2">
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl px-5 py-3 font-semibold">
                  Granulation Machinery
                </h2>
                <div className="grid grid-rows-2 gap-3 px-5 grid-cols-2">
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl px-5 py-3 font-semibold">
                  Granulation Machinery
                </h2>
                <div className="grid grid-rows-2 gap-3 px-5 grid-cols-2">
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                  <div className="w-full m-0 h-[220px]">
                    <Image
                      src={"https://source.unsplash.com/random"}
                      width="500"
                      height={500}
                      className="h-full w-full object-cover"
                      alt="product name here - bharat pharmatech"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/* <Slider {...settings}>
            <div className="w-full h-[200px]">
              <div className="bg-gray-100 w-full h-full">
                <p>hellw</p>
              </div>
            </div>
            <div className="w-full h-[200px]">
              <div className="bg-gray-100 w-full h-full">
                <p>hellw</p>
              </div>
            </div>
            <div className="w-full h-[200px]">
              <div className="bg-gray-100 w-full h-full">
                <p>hellw</p>
              </div>
            </div>
            <div className="w-full h-[200px]">
              <div className="bg-gray-100 w-full h-full">
                <p>hellw</p>
              </div>
            </div>
          </Slider> */}
          {/* <div className="flex flex-wrap h-4/5 px-5">
            <div className="w-1/2 h-1/2">
              <div className="bg-gray-100 w-full h-full"></div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="about-section md:flex px-5 pt-10">
        <div className="md:block hidden w-[40%] h-[500px] shrink-0 bg-gray-50">
          <Image
            src={
              "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398893/background_rgz96h.webp"
            }
            width={500}
            height={500}
            className="w-full h-full object-cover"
            alt="background bharat pharmatech"
          />
        </div>
        <div className="md:pl-10">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Bharat Pharmatech
          </h2>
          <h3 className="text-2xl font-medium">Our Brand, Your Trust</h3>
          <p className="mt-5">
            <strong>Bharat Pharmatech</strong> is a Brand of the{" "}
            <strong>Pharma Machinery & Spares</strong> Company, located in{" "}
            <em>Ahmadabad, Gujarat</em> manufacturer & supplier of Pharma
            Machinery & Change Parts of Compression Machines, Tableting
            Equipment’s Allied Machines of internationally accepted standards.
            <br />
            <br />
            We have gained expertise in manufacturing, exporting and supplying a
            wide range of products that are precision-engineered by the experts.
            Our professionals pay utmost attention on learning client specific
            requirements and design products accordingly. The products, offered
            by us, are made available by us in a wide gamut that includes
            following products:
          </p>
          <h3 className="text-2xl font-semibold capitalize mt-5">
            our mission
          </h3>
          <p>
            Our mission is to be a leading and reliable manufacturer of
            pharmaceuticals machineries.
          </p>
          <div className="mt-5">
            <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
            <ul className="mt-3">
              <li className="flex gap-4 items-center my-2">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>High Performance</span>
              </li>
              <li className="flex gap-4 items-center my-2">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>Efficient Functioning</span>
              </li>
              <li className="flex gap-4 items-center my-2">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>Reliable Finish</span>
              </li>
              <li className="flex gap-4 items-center my-2">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>Assured Results</span>
              </li>
              <li className="flex gap-4 items-center my-2">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>Long Service Life</span>
              </li>
              <li className="flex gap-4 items-center my-2">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>High Performance</span>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="block px-7 w-fit mt-5 py-3 bg-black text-white rounded-full"
          >
            Learn More
          </Link>
        </div>
      </section>
      {data.map((item, index) => {
        return (
          item.data.length > 3 && (
            <SliderSection key={index} heading={item.name} data={item.data} />
          )
        );
      })}
    </>
  );
}
