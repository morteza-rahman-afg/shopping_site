import { Link } from "react-router-dom";
import styles from "./ProductCart.module.css";
// import Button from "./Button";
import { useStates } from "../contexts/Contexts";
import Spinner from "./Spinner";
import Cart from "./Cart";

function ProductCart({ type }) {
  const { clothingData, isLoding } = useStates();
  const newData = clothingData
    ?.filter((product) => product.type === type)
    .slice(0, 4);
  if (isLoding) return <Spinner />;

  return (
    <div className={styles.container}>
      {isLoding ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.topContainer}>
            {type === "Masculine" && <h2>محصولات مردانه</h2>}
            {type === "Feminine" && <h2>محصولات زنانه</h2>}
            {type === "Childish" && <h2>محصولات کودکانه</h2>}
            <span></span>
            <Link to={`/store`}>
              نمایش همه
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </Link>
          </div>
          <div className={styles.containerCart}>
            {newData.map((cart) => (
              <Cart cart={cart} key={cart.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCart;
