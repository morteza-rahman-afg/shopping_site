import styles from "./BtnScrol.module.css";
import Svg from "./Svg";
function BtnScrol({ scrollTop }) {
  return (
    <button className={styles.BtnScrol} onClick={scrollTop}>
      <Svg />
      <svg>
        <use href="#arrow_up"></use>
      </svg>
    </button>
  );
}

export default BtnScrol;
