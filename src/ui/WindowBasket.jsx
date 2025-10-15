import { Link, useLocation } from "react-router-dom";
import styles from "./WindowBasket.module.css";
import { useEffect } from "react";
import Overlay from "./Overlay";
import CartBasket from "../components/CartBasket";
import { useCart } from "../contexts/CartContext";
import { useWindow } from "../contexts/WindowsContext";
import NotBasket from "../components/NotBasket";

function WindowBasket() {
  const { dispatch, statusWindiwBasket } = useWindow();
  const { dataCart } = useCart();
  const location = useLocation();
  const x = dataCart.reduce((sum, item) => sum + Number(item.Price), 0);
  const q = dataCart.reduce((sum, item) => sum + item.Quantity, 0);

  useEffect(() => {
    dispatch({ type: "closeBasket" });
  }, [location.pathname]);
  useEffect(
    function () {
      if (dataCart.length === 1) dispatch({ type: "showBasket" });
      setTimeout(() => {
        dispatch({ type: "closeBasket" });
      }, 2000);
    },
    [dataCart.length]
  );
  return (
    <>
      <Overlay typeShow={"closeBasket"} show={statusWindiwBasket} />
      <div
        style={
          (dataCart.length === 0
            ? { justifyContent: "flex-start" }
            : { justifyContent: "space-between" },
          statusWindiwBasket
            ? { transform: "translateX(0px)" }
            : { transform: "translateX(-340px)" })
        }
        className={styles.cantainerWindowBasket}
      >
        <div className={styles.topWindiwBasket}>
          <h3>سبد خرید</h3>
          <button onClick={() => dispatch({ type: "closeBasket" })}>
            بستن
            <svg>
              <use href="#close"></use>
            </svg>
          </button>
        </div>
        {dataCart.length > 0 ? (
          <>
            <div className={styles.cantainerProduct}>
              {dataCart.map((cart) => (
                <CartBasket item={cart} key={cart.id} />
              ))}
            </div>

            <div className={styles.bottomWindowBasket}>
              <div>
                <h6>مجموع:</h6>
                <span>
                  <span>{q * x}</span>
                  تومان
                </span>
              </div>
              <Link className={styles.btn1} to={"/basket/ShoppingCartPage"}>
                مشاهده سبک خرید
              </Link>
              <button className={styles.btn2}>تسویه حساب</button>
            </div>
          </>
        ) : (
          <NotBasket />
        )}
      </div>
    </>
  );
}

export default WindowBasket;
