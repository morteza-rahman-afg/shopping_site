import styles from "./Spinner.module.css";

function Spinner({ style }) {
  return (
    <div style={style} className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
