import "./Product.css";

function Product({ title, Price = 1, features, features2 }) {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <h4>Price : {Price}</h4>
      <h5>{features}</h5>
      <h6>{features2}</h6>
    </div>
  );
}

export default Product;
