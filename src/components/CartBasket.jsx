import { Link } from "react-router-dom";
import styles from "./CartBasket.module.css";
import { useCart } from "../contexts/CartContext";
function CartBasket({ item }) {
  const { dispatch } = useCart();
  return (
    <Link to={`/product/${item.id}`} className={styles.containerItem}>
      <div className={styles.boxImg}>
        <img src={item.img} alt={`img ${item.name}`} />
      </div>
      <div className={styles.boxText}>
        <h6>{item.name}</h6>
        <p>
          <span className={styles.quantity}>تعداد{item.Quantity}</span>{" "}
          <span className={styles.price}>{item.Price}تومان</span>
        </p>
      </div>
      <div>
        <svg
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "deleteProduct", payload: item.id });
          }}
        >
          <use href="#close"></use>
        </svg>
      </div>
    </Link>
  );
}

export default CartBasket;
