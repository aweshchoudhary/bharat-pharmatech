const StructuredData = ({ data }) => {
  console.log("hello from structure");
  return (
    <script
      type="application/ld+json"
      key="product-jsonld"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
