import Navbar from "@/components/Navbar";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Card from "@/components/Card";
import Link from "next/link";
import Layout from "./Layout";
import CardSlider from "@/components/CardSlider";
import SliderSection from "@/components/SliderSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bharat Pharmatech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero-section w-full h-[500px] bg-black text-white grid place-items-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold capitalize">
            <strong className="font-bold">Bharat Pharmatech</strong>
          </h1>
          <p className="text-5xl">A Brand Of Pharma Machinery & Spares</p>
        </div>
      </section>
      <section className="about-section md:flex px-5 pt-10">
        <div className="md:block hidden w-[40%] bg-gray-50"></div>
        <div className="flex-1 md:pl-10">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Bharat Pharmatech
          </h2>
          <h3 className="text-2xl font-medium">Our Brand, Your Trust</h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            harum consequuntur consequatur deserunt eos ipsa. Dolores illo dicta
            numquam mollitia sapiente odit corrupti tenetur rerum vero, at cum,
            consectetur sed? Expedita facere ipsum sed vero recusandae quidem
            odit aliquam, qui architecto ducimus reiciendis,
            <br />
            <br />
            culpa asperiores cumque ab quae error. Qui, saepe vel error quaerat
            animi placeat voluptate. Maiores, obcaecati repellat! Assumenda qui
            molestiae nihil.
          </p>
          <div className="mt-5">
            <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
            <ul className="mt-3">
              <li className="flex gap-4 items-center my-4">
                <Icon
                  className="md:text-3xl text-2xl shrink-0"
                  icon="teenyicons:tick-circle-solid"
                />
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  facere repudiandae
                </span>
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
      <SliderSection heading={"Tablet Press Machinery"} />
      <SliderSection heading={"Granulation Machinery"} />
      <SliderSection heading={"Roll Compactor Machinery"} />
      <section className="testimonial-section px-5 my-10 py-10 bg-black text-white">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="text-2xl font-semibold">
          They Loved Our Products, So will you
        </p>
        <br />
        <TestimonialsSlider />
      </section>
    </>
  );
}
