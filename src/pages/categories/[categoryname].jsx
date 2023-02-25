import Card from "@/components/Card";
import Head from "next/head";
import React from "react";
import Layout from "../Layout";

const category = () => {
  return (
    <>
      <Head>
        <title>Granulation Machinery</title>
      </Head>
      <section className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <h1 className="text-5xl">Granulation Machinery</h1>
      </section>
      <section className="py-10 px-5">
        <h2 className="text-5xl mb-10 font-semibold text-center">
          Granulation Machinery
        </h2>
        <ul className="flex flex-wrap gap-5 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </section>
    </>
  );
};

export default category;
