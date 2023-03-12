import Card from "@/components/Card";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import GlobalHead from "@/components/GlobalHead";

const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  useEffect(() => {
    const fetchProducts = () => {
      products.forEach((item) => {
        if (+item.id === +id) {
          setItems(item.data);
        }
      });
      categories.forEach((item) => {
        if (+item.id === +id) {
          setCategoryName(item.name);
        }
      });
    };
    fetchProducts();
  }, [id]);

  const seoTags = {
    title: categoryName,
    description:
      "Bharat Pharmatech and Pharma machinery & Spares contact number, address, email, locations, contact us, enquiry, page",
    image:
      "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png",
    url: "https://www.bharatpharmatech.com/contact-us/",
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
      <section className="py-10 sm:px-5 px-2">
        <h1 className="md:text-5xl text-3xl mb-10 font-semibold text-center">
          {categoryName}
        </h1>
        <ul className="flex flex-wrap w-full">
          {items.map((item, i) => {
            return (
              <li key={i} className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
                <Card data={item} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Category;
