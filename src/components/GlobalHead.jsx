import React from "react";

const GlobalHead = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        rel="icon"
        href="https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png"
      />
      <link
        rel="apple-touch-icon"
        href="https://res.cloudinary.com/dzainnrtc/image/upload/v1677398892/apple-touch-icon_cvh6w8.png"
      />
    </>
  );
};

export default GlobalHead;