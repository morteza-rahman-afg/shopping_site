import { Link, useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useStates } from "../contexts/Contexts";
import styles from "./Store.module.css";
import NavMobile from "../components/NavMobile";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { useEffect } from "react";
function Store() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParams = searchParams.get("type");
  const { style, dispatch, newData, status } = useStates();
  useEffect(function () {
    dispatch({ type: typeParams });
  }, []);
  return (
    <>
      <Nav objStyle={style} />
      <NavMobile />
      <div className={styles.containerStore}>
        <div className={styles.containerTextLink}>
          <h1>محصولات</h1>
          <div>
            <button
              style={status === "all" ? { borderBottom: "solid 1px red" } : {}}
              onClick={() => {
                dispatch({ type: "all" });
              }}
            >
              همه محصولات
            </button>
            <button
              style={
                status === "Masculine" ? { borderBottom: "solid 1px red" } : {}
              }
              onClick={() => {
                dispatch({ type: "Masculine" });
              }}
            >
              مردانه
            </button>
            <button
              style={
                status === "Feminine" ? { borderBottom: "solid 1px red" } : {}
              }
              onClick={() => {
                dispatch({ type: "Feminine" });
              }}
            >
              زنانه
            </button>
            <button
              style={
                status === "Childish" ? { borderBottom: "solid 1px red" } : {}
              }
              onClick={() => {
                dispatch({ type: "Childish" });
              }}
            >
              کودکانه
            </button>
          </div>
        </div>
        <div className={styles.containerCart}>
          {newData.map((cart) => (
            <Cart cart={cart} key={cart.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Store;
