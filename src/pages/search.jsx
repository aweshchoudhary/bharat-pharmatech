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
