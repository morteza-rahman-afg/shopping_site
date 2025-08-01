import { Link } from "react-router-dom";
import styles from "../components/MensProducts.module.css";
import Button from "./Button";
import { useStates } from "../contexts/Contexts";
import Spinner from "./Spinner";
import { useEffect } from "react";

function MensProducts({ type }) {
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
            <Link to={`/filterProducts/${type}`}>
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
            {newData?.map((cart) => (
              <Link key={cart.id} to={`/product/${cart.id}`}>
                <span className={styles.boxSvgLike}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                  </svg>
                </span>
                <div className={styles.boxImg}>
                  <img src={cart.img} alt={cart.name} />
                </div>
                <h3>{cart.name}</h3>
                <span>{cart.Price}</span>
                <Button />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MensProducts;
