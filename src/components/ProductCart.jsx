import { Link, useLoaderData } from "react-router-dom";
import styles from "./ProductCart.module.css";
import Cart from "./Cart";

function ProductCart({ type }) {
  const cartsProduct = useLoaderData();
  const newData = cartsProduct
    ?.filter((product) => product.type === type)
    .slice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        {type === "Masculine" && <h2>محصولات مردانه</h2>}
        {type === "Feminine" && <h2>محصولات زنانه</h2>}
        {type === "Childish" && <h2>محصولات کودکانه</h2>}
        <span></span>
        <Link to={`/store?type=${type}`}>
          نمایش همه
          <svg>
            <use href="#arrow_left"></use>
          </svg>
        </Link>
      </div>
      <div className={styles.containerCart}>
        {newData.map((cart) => (
          <Cart cart={cart} key={cart.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductCart;
