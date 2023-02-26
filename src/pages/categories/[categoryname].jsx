import Card from "@/components/Card";
import Head from "next/head";

const category = () => {
  return (
    <>
      <Head>
        <title>Granulation Machinery</title>
      </Head>
      <section className="py-10 sm:px-5 px-2">
        <h1 className="md:text-5xl text-3xl mb-10 font-semibold text-center">
          Granulation Machinery
        </h1>
        <ul className="flex flex-wrap w-full">
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
          <div className="md:w-1/3 sm:w-1/2 w-full  mb-5 shrink-0">
            <Card />
          </div>
        </ul>
      </section>
    </>
  );
};

export default category;
