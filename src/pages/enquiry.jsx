import { Icon } from "@iconify/react";

const enquiry = () => {
  return (
    <>
      <section className="w-full h-[200px] bg-black flex items-center px-5">
        <h1 className="text-6xl font-bold text-white">Enquiry</h1>
      </section>
      <section className="flex">
        <div className="md:w-1/2 py-10 px-5">
          <h2 className="text-4xl font-semibold">Contact Us</h2>
          <ul className="my-5">
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon icon={"ic:baseline-phone"} className="text-2xl" />
              </div>
              <a href="/" className="text-lg font-medium">
                +91 9687849837
              </a>
            </li>
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon icon={"ic:baseline-phone"} className="text-2xl" />
              </div>
              <a href="/" className="text-lg font-medium">
                +91 9687849837
              </a>
            </li>
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon
                  icon={"material-symbols:mail-rounded"}
                  className="text-2xl"
                />
              </div>
              <a href="/" className="text-lg font-medium">
                bharatpharmatech@gmail.com
              </a>
            </li>
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon
                  icon={"material-symbols:mail-rounded"}
                  className="text-2xl"
                />
              </div>
              <a href="/" className="text-lg font-medium">
                pharmamachineryspares@gmail.com
              </a>
            </li>
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon icon={"mdi:globe"} className="text-2xl" />
              </div>
              <a href="/" className="text-lg font-medium">
                www.bharatpharmatech.com
              </a>
            </li>
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon icon={"mdi:globe"} className="text-2xl" />
              </div>
              <a href="/" className="text-lg font-medium">
                www.pharmamachineryspares.tk
              </a>
            </li>
            <li className="flex items-center my-4 gap-3">
              <div className="circle w-[40px] h-[40px] shrink-0 rounded-full grid place-items-center text-white bg-black">
                <Icon icon={"ic:baseline-location-on"} className="text-2xl" />
              </div>
              <a href="/" className="text-lg font-medium">
                14 Sarovar Industrial Park, Nr. Circle Hathijan, Ring Road
                Highway, Vatva, Ahmedabad, Gujarat 382445
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 border-l py-10 px-5">
          <h2 className="text-4xl mb-5 font-semibold capitalize">
            Get in touch with us, Send your enquiry
          </h2>
          <form>
            <div className="my-3">
              <input
                type="text"
                placeholder="Full Name"
                id="fname"
                name="fname"
                className="px-5 py-3 w-full border"
              />
            </div>
            <div className="my-3">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="px-5 py-3 w-full border"
              />
            </div>
            <div className="my-3">
              <input
                type="number"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                className="px-5 py-3 w-full border"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                className="px-5 py-3 w-full border"
              />
            </div>
            <div className="my-3">
              <textarea
                className="w-full border min-h-[100px] px-5 py-3"
                placeholder="Message"
              />
            </div>
            <button className="rounded-full bg-black text-white px-5 py-3">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default enquiry;
