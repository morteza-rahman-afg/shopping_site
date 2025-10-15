import styles from "./Button.module.css";
import Svg from "./Svg";

function Button() {
  return (
    <button className={styles.btn}>
      <Svg />
      <span className={styles.s1}>انتخاب گزینه ها</span>
      <span className={styles.s2}>
        <svg>
          <use href="#shopping_basket"></use>
        </svg>
      </span>
    </button>
  );
}

export default Button;
