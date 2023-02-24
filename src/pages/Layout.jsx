import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <article>{children}</article>
      </main>
    </>
  );
};

export default Layout;
