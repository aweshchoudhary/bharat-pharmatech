import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import products from "@/data/products.json";
import categories from "@/data/categories.json";
import Head from "next/head";
import StructuredData from "@/components/StructuredData";
import Image from "next/image";
import GlobalHead from "@/components/GlobalHead";

const Product = () => {
  const router = useRouter();
  const { product, categoryid } = router.query;
  const [data, setData] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState(null);
  useEffect(() => {
    const fetchProduct = () => {
      products.forEach((category) => {
        if (+category.id === +categoryid) {
          setCurrentCategoryProducts(category.data);
          category.data.forEach((matchItem) => {
            if (
              matchItem.title.split(" ").join("-").toLowerCase() === product
            ) {
              categories.forEach((item) => {
                if (+item.id === +categoryid) setCategoryName(item.name);
              });
              setData(matchItem);
            }
          });
        }
      });
    };
    fetchProduct();
  }, [product, categoryid]);

  const seoTags = {
    title: data?.title.toUpperCase(),
    description: `Bharat Pharmatech and Pharma machinery & Spares, Best priced and indiamart ratings ${data?.title}.`,
    image: data?.images[0],
    url:
      "https://www.bharatpharmatech.com/" +
      data?.title.split(" ").join("-").toLowerCase(),
  };

  return data ? (
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
        <StructuredData
          data={{
            "@context": "https://schema.org/",
            "@type": "Product",
            name: seoTags.title,
            image: seoTags.image,
            description: seoTags.description,
            brand: {
              "@type": "Brand",
              name: "Bharat Pharmatech",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "5",
              ratingCount: "400",
            },
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bharatpharmatech.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: seoTags.title.split(" ").join("-").toLowerCase(),
                item: seoTags.url,
              },
            ],
          }}
        />
      </Head>
      <section className="border-b flex">
        <div className="w-[60%] shrink-0 p-5 border-r">
          <h1 className="text-3xl font-semibold uppercase">{data.title}</h1>
          <div className="categories flex items-center gap-2">
            <div className="tag px-5 py-2 rounded-full bg-black text-white w-fit mt-3 font-medium">
              {categoryName}
            </div>
            {/* <div className="tag px-5 py-2 rounded-full bg-black text-white w-fit mt-3 font-medium">
              Model: PMS-27-D
            </div> */}
          </div>
          <div className="w-full h-[450px] flex items-center justify-center bg-gray-100 mt-5">
            <Image
              src={data.images[0]}
              width={500}
              height={500}
              className="h-full w-auto object-contain"
              alt={data.title + " - bharat pharmatech"}
            />
          </div>
        </div>
        <div className="w-[40%] shrink-0 p-5">
          <h3 className="text-2xl font-semibold">Similar Machines</h3>
          <ul className="my-5">
            {currentCategoryProducts.map((item, i) => {
              return (
                <li className="border-b py-3" key={i}>
                  <Link
                    href={
                      "/p/" +
                      item.category +
                      "/" +
                      item.title.split(" ").join("-").toLowerCase()
                    }
                    className="flex gap-2 text-lg font-medium capitalize"
                  >
                    <Icon
                      icon={"material-symbols:keyboard-double-arrow-right"}
                      className="text-3xl shrink-0"
                    />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="btn-filled">Enquiry</button>
          <button className="btn-outline ml-2">Get Quote</button>
        </div>
      </section>
      <section className="p-5">
        <div className="content">
          <h2 className="text-2xl mt-3 font-semibold uppercase">
            {data.title}
          </h2>
          <div className="para py-5">
            {data.content.description}
            {data.content.features && (
              <>
                <h3 className="text-2xl font-semibold my-5">
                  Salient Features
                </h3>
                <ul className="ml-5 mb-5">
                  {data.content.features.map((item, i) => {
                    return (
                      <li key={i} className="list-disc">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="table w-full">
          {data.content?.table && (
            <>
              <h3 className="text-2xl font-semibold my-5">
                Technical Specification
              </h3>
              <figure
                className="relative overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: data.content.table }}
              >
                {/* <figcaption>hell oadf</figcaption> */}
              </figure>
            </>
          )}
        </div>
      </section>
    </>
  ) : null;
};

export default Product;
