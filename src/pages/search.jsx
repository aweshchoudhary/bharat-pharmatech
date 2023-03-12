import { Icon } from "@iconify/react";
import Head from "next/head";

const Search = () => {
  const seoTags = {
    title: "Search",
    description:
      "Bharat Pharmatech and Pharma machinery & Spares contact number, address, email, locations, contact us, enquiry, page",
    image:
      "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png",
    url: "https://www.bharatpharmatech.com/search/",
  };
  console.log(
    JSON.stringify(`<table>
  <tbody>
    <tr>
      <td><strong>Model No.</strong></td>
      <td><strong>PMS-MT 8D</strong></td>
      <td><strong>PMS-MT 10B</strong></td>
      <td><strong>PMS-MT 10D</strong></td>
    </tr>
    <tr>
      <td><strong>Type</strong></td>
      <td><strong>Mini Press</strong></td>
      <td><strong>Mini Press</strong></td>
      <td><strong>Mini Press</strong></td>
    </tr>
    <tr>
      <td>Number of Station</td>
      <td>8</td>
      <td>10</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Type of Tooling Punch</td>
      <td>D</td>
      <td>B</td>
      <td>D</td>
    </tr>
    <tr>
      <td>Output-Tablets /Hr. (Max)</td>
      <td>14,000</td>
      <td>14,000</td>
      <td>18,000</td>
    </tr>
    <tr>
      <td>Turret RPM (Max)</td>
      <td>30</td>
      <td>30</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Max. Operating Pressure</td>
      <td>6 Tons</td>
      <td>6 Tons</td>
      <td>6 Tons</td>
    </tr>
    <tr>
      <td>Max. Tablet Diameter</td>
      <td>22 mm</td>
      <td>16 mm</td>
      <td>22 mm</td>
    </tr>
    <tr>
      <td>Max. Depth of Fill</td>
      <td>20.5 mm</td>
      <td>17.5 mm</td>
      <td>20.5 mm</td>
    </tr>
    <tr>
      <td>Upper Punch Penetration</td>
      <td>2 to 6 mm</td>
      <td>2 to 6 mm</td>
      <td>2 to 6 mm</td>
    </tr>
    <tr>
      <td>Dia. of Die mm</td>
      <td>38.10 mm</td>
      <td>30.15 mm</td>
      <td>38.10 mm</td>
    </tr>
    <tr>
      <td>Dia. of Die mm</td>
      <td>38.10 mm</td>
      <td>30.15 mm</td>
      <td>38.10 mm</td>
    </tr>
    <tr>
      <td>Length of Die mm</td>
      <td>23.81 mm</td>
      <td>22.22 mm</td>
      <td>23.81 mm</td>
    </tr>
    <tr>
      <td>Dia. of Punch mm</td>
      <td>25.34</td>
      <td>18.99</td>
      <td>25.34</td>
    </tr>
    <tr>
      <td>Length of Punch mm</td>
      <td>133.65 mm</td>
      <td>133.65 mm</td>
      <td>133.65 mm</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colspan='3'>2.0 H.P., 1440 RPM, 415 Volts, 50 Hz</td>
    </tr>

    <tr>
      <td>Overall Dimensions</td>
      <td colspan='3'>480 mm x 670 mm x 1050 mm</td>
    </tr>
    <tr>
      <td>Net Weight (Kgs.)</td>
      <td colspan='3'>375</td>
    </tr>
    <tr>
      <td>Gross Weight (Kgs.)</td>
      <td colspan='3'>465</td>
    </tr>
  </tbody>
</table>
`)
  );
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
      </Head>
      <section>
        <div className="searchbox w-full py-3 px-5 rounded-full border">
          <Icon icon={"uil:search"} className="text-3xl" />
          <input type="search" name="search" id="search" />
        </div>
      </section>
    </>
  );
};

export default Search;
