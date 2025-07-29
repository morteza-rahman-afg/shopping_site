import styles from "./Product.module.css";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
function Product() {
  const { id } = useParams();

  return (
    <div>
      <Nav />
      <h1>Product</h1>
      <p>{id}</p>
    </div>
  );
}

export default Product;
