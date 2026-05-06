import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-tech", "durable", "compatible"];
  let options2 = ["hi-tech", "durable", "compatible"];
  let options3 = ["hi-tech", "durable", "compatible"];

  return (
    <>
      <Product
        title="Phone"
        Price={30000}
        features={options}
        features2={options2}
      />
      <Product
        title="Laptop"
        Price={50000}
        features={options}
        features={options2}
      />
      <Product title="Watch" features={options} features={options3} />
    </>
  );
}

export default ProductTab;

// u need to apply curly braces to show numbers as numbers
// if u haven't give price to a product then u can set default price from the props
