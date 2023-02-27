import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <header>
        <div className="bg-black w-full md:flex hidden justify-between py-2 px-5 text-white">
          <div>
            <a
              href={"mailto:someone@example.com"}
              className="flex items-center gap-2"
            >
              <Icon icon="ic:baseline-email" className="text-2xl" />
              bharatpharmatech@gmail.com
            </a>
          </div>
          <div>
            <a href="tel:+919687849837" className="flex items-center gap-2">
              <Icon icon="material-symbols:call-sharp" className="text-2xl" />
              +91 9687849837
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between h-[70px] px-5 border-b bg-white">
          <div className="logo">
            <Link href={"/"} title="logo">
              <Image
                src={
                  "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/min-logo_cj5eu0.png"
                }
                width={200}
                height={41}
                alt="logo transparent - bharat pharmatech"
              />
            </Link>
          </div>
          <nav className="navbar h-full md:block hidden">
            <ul
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
              className="navitems flex items-center h-full gap-8 font-medium"
            >
              <li
                itemProp="name"
                className="h-full flex items-center hover:border-b-2 border-black"
              >
                <Link title="Home" href="/">
                  Home
                </Link>
              </li>
              <li
                itemProp="name"
                className="h-full flex items-center hover:border-b-2 border-black"
              >
                <Link title="About Us" href="/about-us">
                  About Us
                </Link>
              </li>
              <li
                itemProp="name"
                className="relative h-full flex items-center hover:border-b-2 border-black"
              >
                <Link
                  title="Products"
                  href="/"
                  className="flex items-center gap-1"
                >
                  Products
                  <Icon
                    className="text-3xl"
                    icon="ic:outline-keyboard-arrow-down"
                  />
                </Link>
                <ul className="absolute z-50 top-full min-w-[280px] bg-white border">
                  {categories.map((item) => {
                    return (
                      <li
                        key={item.id}
                        itemProp="name"
                        className="hover:bg-gray-50 relative"
                      >
                        <Link
                          href={`/categories/${item.id}/${item.name
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          className="py-3 px-4 w-full block"
                        >
                          {item.name}
                        </Link>
                        <ul className="absolute top-0 left-full min-w-[280px] bg-white border">
                          {products.map((product, i) => {
                            return (
                              product.id === item.id &&
                              product.data.map((item, i) => {
                                return (
                                  <li
                                    className="relative hover:bg-gray-50"
                                    key={i}
                                  >
                                    <Link
                                      href={`/p/${product.id}/${item.title
                                        .split(" ")
                                        .join("-")
                                        .toLowerCase()}`}
                                      className="py-3 px-4 w-full block capitalize"
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                );
                              })
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li
                itemProp="name"
                className="h-full flex items-center hover:border-b-2 border-black"
              >
                <Link title="Contact Us" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link href={"/search"}>
              <Icon className="text-3xl" icon={"bx:search"} />
            </Link>
            <button
              onClick={() => setToggleSidebar(true)}
              className="p-2 bg-black text-white rounded-lg md:hidden block"
            >
              <Icon className="text-3xl" icon={"humbleicons:bars"} />
            </button>
            <button className="p-3 bg-black md:block hidden text-white rounded-full uppercase">
              <Icon className="text-2xl" icon="material-symbols:call-sharp" />
            </button>
            <Link
              href={"/contact-us"}
              className="py-2 px-5 md:block hidden rounded-full border-2 uppercase border-black hover:bg-black hover:text-white transition font-medium"
            >
              enquiry
            </Link>
          </div>
        </div>
      </header>
      <aside
        className={`w-screen h-screen fixed top-0 ${
          toggleSidebar ? "right-0" : "right-full"
        } z-[99] bg-white flex flex-col justify-between`}
      >
        <div className="flex p-5 items-center justify-between">
          <div className="logo">
            <Image
              src={
                "https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/min-logo_cj5eu0.png"
              }
              width={200}
              height={41}
              alt="logo transparent - bharat pharmatech"
            />
          </div>
          <button onClick={() => setToggleSidebar(false)} className="text-3xl">
            <Icon icon={"uil:times"} />
          </button>
        </div>
        <nav className="navbar overflow-y-auto h-[60%]">
          <ul className="font-medium text-lg">
            <li className="px-3 py-1">
              <Link
                href="/"
                className="flex items-center gap-4 hover:bg-gray-100 px-5 py-2 rounded-lg"
                onClick={() => setToggleSidebar(false)}
              >
                <Icon icon="ri:home-2-line" className="text-2xl" /> Home
              </Link>
            </li>
            <li className="px-3 py-1">
              <Link
                href="/about-us"
                className="flex items-center gap-4 hover:bg-gray-100 px-5 py-2 rounded-lg"
                onClick={() => setToggleSidebar(false)}
              >
                <Icon
                  icon="material-symbols:info-outline"
                  className="text-2xl"
                />
                About Us
              </Link>
            </li>
            <Dropdown setOpen={setToggleSidebar} />
            <li className="px-3 py-1">
              <Link
                href="/search"
                className="flex items-center gap-4 hover:bg-gray-100 px-5 py-2 rounded-lg"
                onClick={() => setToggleSidebar(false)}
              >
                <Icon icon="bx:search" className="text-2xl" /> Search
              </Link>
            </li>
            <li className="px-3 py-1">
              <Link
                href="/contact-us"
                className="flex items-center gap-4 hover:bg-gray-100 px-5 py-2 rounded-lg"
                onClick={() => setToggleSidebar(false)}
              >
                <Icon icon="ic:baseline-local-phone" className="text-2xl" />{" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3 justify-center mb-5 px-5">
          <a
            href="tel:+919687849837"
            className="w-1/2 justify-center border-black border-2 py-2 rounded-full flex items-center gap-3 bg-black text-white"
          >
            <Icon icon="ic:baseline-local-phone" className="text-2xl" /> Call Us
          </a>
          <Link
            href={"/contact-us"}
            onClick={() => setToggleSidebar(false)}
            className="w-1/2 justify-center py-2 rounded-full flex items-center gap-3 border-black border-2"
          >
            <Icon icon="fluent:form-28-regular" className="text-2xl" /> Enquiry
          </Link>
        </div>
      </aside>
    </>
  );
};

const Dropdown = ({ setOpen }) => {
  const [submenu, setSubmenu] = useState([]);
  useEffect(() => {
    async function createSubmenu() {
      await categories.forEach((item) => {
        setSubmenu((prev) => {
          return [...prev, { id: item.id, label: item.name }];
        });
      });
    }
    createSubmenu();
  }, []);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <li className="px-3 py-1">
      <button
        onClick={() => setIsMenu((prev) => !prev)}
        className="flex w-full items-center gap-4 hover:bg-gray-100 px-5 py-2 rounded-lg"
      >
        <Icon icon="ic:baseline-keyboard-arrow-right" className="text-2xl" />
        Products
      </button>
      {isMenu && submenu
        ? submenu.map((subitem, i) => {
            return (
              <ul className="px-3 mt-2" key={i}>
                <SubCategory setOpen={setOpen} subitem={subitem} />
              </ul>
            );
          })
        : null}
    </li>
  );
};

const SubCategory = ({ subitem, setOpen }) => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <li>
      <button
        onClick={() => setIsMenu((prev) => !prev)}
        className="border-b bg-black text-white px-2 py-1 w-full flex items-center gap-3"
      >
        <Icon
          icon="material-symbols:keyboard-double-arrow-right"
          className="text-2xl"
        />
        {subitem.label}
      </button>
      <ul className="mt-1">
        {isMenu &&
          products.map((category) => {
            return category.id === subitem.id
              ? category.data.map((product, i) => {
                  return (
                    <LastCategory
                      key={i}
                      subsubitem={{ title: product.title, id: category.id }}
                      setOpen={setOpen}
                    />
                  );
                })
              : null;
          })}
      </ul>
    </li>
  );
};

const LastCategory = ({ subsubitem, setOpen }) => {
  return (
    <li>
      <Link
        className="border-b capitalize pb-2 w-full flex items-center gap-0"
        href={`/p/${subsubitem.id}/${subsubitem.title
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        onClick={() => setOpen(false)}
      >
        <Icon
          icon="material-symbols:arrow-right-sharp"
          className="text-3xl shrink-0"
        />
        {subsubitem.title}
      </Link>
    </li>
  );
};

export default Navbar;
