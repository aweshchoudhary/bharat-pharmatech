import Image from "next/image";

const AboutUs = () => {
  return (
    <>
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
            Equipment’s Allied Machines of internationally accepted standards.
            <br />
            <br />
            Our mission is to provide turnkey solutions to quality conscious
            global clients. We have approved list of vendors who will
            manufacture Pharma Machinery & Change parts of Compression Machine
            and Tableting Equipment’s / Allied Machines as per our standards &
            specifications. We help our vendors to improve technology and
            product features. We are exporting Pharma Machine & Change parts of
            Compression Machine and Tableting Equipment’s / Allied Machines to
            the most demanding market of Asian Countries.
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
            Tableting equipment's / allied machines
          </h2>
          <ul className="ml-5 list-disc">
            <li>Tableting Tooling’s – Punch Die Sets for Tablet Press</li>
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
