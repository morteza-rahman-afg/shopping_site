import styles from "./Product.module.css";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { useStates } from "../contexts/Contexts";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
function Product() {
  const { id } = useParams();
  const { fetchId, isLoding, newCart } = useStates();
  useEffect(
    function () {
      fetchId(id);
    },
    [id]
  );

  return (
    <div>
      {isLoding ? (
        <Spinner style={{ marginTop: "5rem" }} />
      ) : (
        <>
          <Nav />
          <h1>{newCart.name}</h1>
          <p>{newCart.type}</p>{" "}
        </>
      )}
    </div>
  );
}

export default Product;
