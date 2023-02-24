import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header>
      <div className="bg-black w-full flex justify-between py-2 px-5 text-white">
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Icon icon="ic:baseline-email" className="text-2xl" />
            bharatpharmatech@gmail.com
          </Link>
        </div>
        <div>
          <a href="/" className="flex items-center gap-2">
            <Icon icon="material-symbols:call-sharp" className="text-2xl" />
            +91 9687849837
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between h-[70px] px-5 border-b">
        <div className="logo">
          <Image src={"/min-logo.png"} width={200} height={41} />
        </div>
        <nav className="navbar h-full">
          <ul className="navitems flex items-center h-full gap-8 font-medium">
            <li className="h-full flex items-center hover:border-b-2 border-black">
              <Link href="/">Home</Link>
            </li>
            <li className="h-full flex items-center hover:border-b-2 border-black">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="relative h-full flex items-center hover:border-b-2 border-black">
              <Link href="/" className="flex items-center gap-1">
                Products{" "}
                <Icon
                  className="text-3xl"
                  icon="ic:outline-keyboard-arrow-down"
                />
              </Link>
              <ul className="absolute top-full w-[280px] bg-white border">
                <li className="relative hover:bg-gray-50">
                  <Link
                    href="/categories/granulation-machinery"
                    className="py-3 px-4 w-full block"
                  >
                    Granulation Machinery
                  </Link>
                </li>
                <li className="hover:bg-gray-50 relative">
                  <Link href="/" className="py-3 px-4 w-full block">
                    Milling Machine
                  </Link>
                  <ul className="absolute top-0 left-full w-[280px] bg-white border">
                    <li className="relative hover:bg-gray-50">
                      <Link href="/" className="py-3 px-4 w-full block">
                        Multi Mill Machine
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="hover:bg-gray-50">
                  <Link href="/" className="py-3 px-4 w-full block">
                    Roll Compactor Machinery
                  </Link>
                </li>
                <li className="hover:bg-gray-50">
                  <Link href="/" className="py-3 px-4 w-full block">
                    Tablet Press
                  </Link>
                </li>
              </ul>
            </li>
            <li className="h-full flex items-center hover:border-b-2 border-black">
              <Link href="/">Testimonials</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button>
            <Icon className="text-3xl" icon={"bx:search"} />
          </button>
          <button className="p-3 bg-black text-white rounded-full uppercase">
            <Icon className="text-2xl" icon="material-symbols:call-sharp" />
          </button>
          <button className="py-2 px-5 rounded-full border-2 uppercase border-black hover:bg-black hover:text-white transition font-medium">
            enquiry
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
