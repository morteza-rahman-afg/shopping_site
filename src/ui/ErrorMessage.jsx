import styles from "./ErrorMessage.module.css";
import Svg from "./Svg";
function ErrorMessage({ message, error, stateShow }) {
  return (
    <div
      className={styles.Massage}
      style={
        stateShow
          ? { transform: "translateX(0px)", opacity: "1" }
          : { transform: "translateX(350px)", opacity: "0" }
      }
    >
      <Svg />
      <p
        className={styles.boxSvg}
        style={{ backgroundColor: message ? "green" : error ? "red" : "" }}
      >
        <svg style={{ color: message ? "green" : error ? "red" : "" }}>
          <use href={message ? "#check_line" : error ? "#close" : ""}></use>
        </svg>
      </p>
      <p className={styles.text}>{message || error}</p>
    </div>
  );
}

export default ErrorMessage;
