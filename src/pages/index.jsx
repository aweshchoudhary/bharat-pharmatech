import { Icon } from "@iconify/react";
import Head from "next/head";
import Link from "next/link";
import SliderSection from "@/components/SliderSection";
import Slider from "react-slick";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import { useEffect, useState } from "react";
import GlobalHead from "@/components/GlobalHead";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 500,
  };
  const [data, setData] = useState([]);
  const slides = [
    {
      data: [
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/vegapress-ii-high-speed-rotary-tablet-press-cgmp-1361472_wccl23.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/double-sided-rotary-tableting-machine-500x500-1_dzidhk.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/single-rotary-tablet-press-1525858397-3844930_poduol.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435646/New-Project-1_chwso9.webp",
      ],
    },
    {
      data: [
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/HLB1GDyTQsfpK1RjSZFOq6y6nFXa2_zjnkhq.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/H2c409ac43541472b8050129d9e8d2583I_ypncng.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/mass-mixer-500x500-1_hwj2zg.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/pharmaceuticals-oscillating-granulator-500x500-1_qdibfm.webp",
      ],
    },
    {
      data: [
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435645/multi-mill-500x500-removebg-preview_zyoshu.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435748/comminuting-mill-500x500-1-edited_bbbujm.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435748/double-cone-blenders-500x500-1_fii1tu.webp",
        "https://res.cloudinary.com/dzainnrtc/image/upload/v1677435748/octagonal-mixer-blender-500x500-1_hdqc57.webp",
      ],
    },
  ];
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
    setProductsData();
  }, []);

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
  const websiteSchema = {
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
  const seoTags = {
    title: "Bharat Pharmatech",
    description:
      "Bharat Pharmatech and Pharma machinery & Spares provide the tablet press compression, granulation, milling, drying, roll compactor machine.",
    image:
      "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png",
    url: "https://www.bharatpharmatech.com/",
  };

  return (
    <>
      <Head>
        <title>{seoTags.title}</title>
        <GlobalHead />
        {/* Titles */}
        <meta name="title" content={seoTags.title} />
        <meta property="og:title" content={seoTags.title} />
        <meta property="twitter:title" content={seoTags.title} />
        {/* Descriptions */}
        <meta name="description" content={seoTags.description} />
        <meta property="og:description" content={seoTags.description} />
        <meta property="twitter:description" content={seoTags.description} />
        {/* Urls */}
        <meta property="og:url" content={seoTags.url} />
        <meta property="twitter:url" content={seoTags.url} />
        <meta name="twitter:domain" content={seoTags.url} />
        {/* Images */}
        <meta property="og:image" content={seoTags.image} />
        <meta property="twitter:image" content={seoTags.image} />
        <link rel="canonical" href={seoTags.url} />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Head>
      <section className="hero-section w-full md:h-[550px] md:flex border-b">
        <div className="md:w-[50%] bg-black text-white h-full p-5 flex items-center">
          <div className="py-10">
            <h1 className="text-5xl font-bold">Bharat Pharmatech</h1>
            <h2 className="text-xl font-medium">
              Brand Of Pharma Machinery & Spares
            </h2>
            <p className="mt-5">
              <strong>Bharat Pharmatech</strong> is a Brand of the{" "}
              <strong>Pharma Machinery & Spares</strong> Company, located in{" "}
              <em>Ahmadabad, Gujarat</em> manufacturer & supplier of Pharma
              Machinery & Change Parts of Compression Machines, Tableting
              Equipment&apos;s Allied Machines of internationally accepted
              standards.
            </p>
            <div className="flex items-center mt-5">
              <Link
                href={"/contact-us"}
                className="block  w-fit px-5 py-2 rounded-full bg-white text-black  font-medium"
              >
                Enquiry Now
              </Link>
              <Link
                href={"/about-us"}
                className="px-5 flex items-center underline underline-offset-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] h-full md:block hidden">
          <div className="sliders-asdf h-full">
            <Slider {...settings} className="h-full">
              {slides.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="grid grid-rows-2 gap-3 p-5 grid-cols-2 place-items-center h-full">
                      {item.data.map((item, i) => {
                        return (
                          <div key={i} className="w-full m-0 h-[250px]">
                            <Image
                              src={item}
                              width="500"
                              height={500}
                              className="h-full w-full object-contain border"
                              alt="slider machine bharat pharmatech"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
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
            Equipment&apos;s Allied Machines of internationally accepted
            standards.
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
            href={"/about-us"}
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
