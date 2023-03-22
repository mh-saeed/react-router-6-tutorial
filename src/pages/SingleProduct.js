import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  
  console.log(useParams());

  return (
    <section className="section product">
      <h2>{productId}</h2>
    </section>
  );
};

export default SingleProduct;
