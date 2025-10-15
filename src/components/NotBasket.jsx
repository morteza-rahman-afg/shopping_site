import { Link } from "react-router-dom";
import styles from "./NotBasket.module.css";
function NotBasket() {
  return (
    <div className={styles.containerNotBasket}>
      <div>
        <span>+</span>
        <svg>
          <use href="#not_basket"></use>
        </svg>
      </div>
      <h6>سبد خرید شما خالی است</h6>
      <Link to={`/store?type=all`}>بازگشت به فروشگاه</Link>
    </div>
  );
}

export default NotBasket;
