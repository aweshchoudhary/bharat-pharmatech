import GlobalHead from "@/components/GlobalHead";
import Head from "next/head";
import Image from "next/image";

const AboutUs = () => {
  const seoTags = {
    title: "About Us",
    description:
      "Bharat Pharmatech is a Brand of the Pharma Machinery & Spares Company, located in Ahmadabad, Gujarat manufacturer & supplier of Pharma Machinery & Change Parts",
    image:
      "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398893/background_rgz96h.webp",
    url: "https://www.bharatpharmatech.com/about-us",
  };
  return (
    <>
      <Head>
        <title>{seoTags.title}</title>
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
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="English" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bharat Pharmatech" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="bharatpharmatech" />
        <meta name="twitter:creator" content="bharatpharmatech"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png"
        />
        <link rel="canonical" href={seoTags.url} />
      </Head>
      <section className="w-full relative h-[300px] bg-black">
        <h1 className="text-white text-6xl font-bold w-full px-5 absolute top-1/2 -translate-y-1/2 left-0 z-20">
          About Us
        </h1>
        <video
          autoPlay
          loop
          src="/video.mp4"
          className="w-full opacity-50 h-full object-cover absolute top-0 left-0 z-0"
        ></video>
      </section>
      <section className="px-5 py-10 flex gap-10">
        <div className="w-[30%] shrink-0">
          <Image
            src={
              "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398893/background_rgz96h.webp"
            }
            className="w-full h-[400px] object-cover"
            width={500}
            height={500}
            alt="background image - bharat pharmatech"
          />
        </div>
        <div>
          <h2 className="md:text-5xl text-2xl font-semibold mb-5">
            Our Introduction
          </h2>
          <p>
            <strong>Bharat Pharmatech</strong> is a Brand of the{" "}
            <strong>Pharma Machinery & Spares</strong> Company, located in{" "}
            <em>Ahmadabad, Gujarat</em> manufacturer & supplier of Pharma
            Machinery & Change Parts of Compression Machines, Tableting
            Equipment&apos;s Allied Machines of internationally accepted
            standards.
            <br />
            <br />
            Our mission is to provide turnkey solutions to quality conscious
            global clients. We have approved list of vendors who will
            manufacture Pharma Machinery & Change parts of Compression Machine
            and Tableting Equipment&quot;s / Allied Machines as per our
            standards & specifications. We help our vendors to improve
            technology and product features. We are exporting Pharma Machine &
            Change parts of Compression Machine and Tableting Equipment&quot;s /
            Allied Machines to the most demanding market of Asian Countries.
          </p>
          <h2 className="my-5 text-3xl font-semibold capitalize">
            range of tablet press machine
          </h2>
          <ul className="list-disc ml-5">
            <li>
              Single Rotary Mini Tablet Press / Compression Machine Rotary
            </li>
            <li>
              Single Rotary Tablet Press / Compression Machine with 16D/20D/23DB
              / 26 BB Stations
            </li>
            <li>
              Double Rotary Tablet Press / Compression Machine – 27D / 27B / 35B
              / 45BB Stations
            </li>
            <li>
              Double Rotary High Speed Tablet Press/Compression Machine with 37D
              / 45B / 55BB / 61BB Stations
            </li>
            <li>
              Double Rotary High Speed Tablet Press/Compression Machine with Pre
              compression
            </li>
            <li>
              Single Rotary High Speed Tablet Press/ Compression Machine with
              Precompression
            </li>
            <li>
              Central Drive Rotary Tablet Press / Compression Machine
              (Precompression or Double Rotary Options)
            </li>
            <li>
              Slugging Tablet Press / Bolus Compression Machine for Veterinary
            </li>
          </ul>
          <h2 className="my-5 text-3xl font-semibold">
            Tableting equipment&apos;s / allied machines
          </h2>
          <ul className="ml-5 list-disc">
            <li>Tableting Tooling&apos;s – Punch Die Sets for Tablet Press</li>
            <li>Dust Extractor Machine</li>
            <li>De Burring De Dusting Machine</li>
            <li>Oscillating Granulator</li>
            <li>Multi Mill</li>
            <li>Colloid Mill</li>
            <li>Coating Machine</li>
            <li>Communiting Mill</li>
            <li>Sieving Grading Straining Machine</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
