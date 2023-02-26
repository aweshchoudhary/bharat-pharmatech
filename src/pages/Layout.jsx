import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <article>{children}</article>
      </main>
      <footer className="bg-black text-white w-full p-5 mt-10 flex items-center justify-between">
        <h3 className="text-3xl font-semibold">Bharat Pharmatech</h3>
        <p>@2023 All Right Reserved By Bharat Bharat Pharmatech</p>
      </footer>
    </>
  );
};

export default Layout;
