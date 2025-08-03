import { useStates } from "../contexts/Contexts";
import styles from "./BtnScrol.module.css";
function BtnScrol() {
  const { scrollTop } = useStates();
  return (
    <button className={styles.BtnScrol} onClick={scrollTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
}

export default BtnScrol;
