import styles from "./Icons.module.css";
import Svg from "../ui/Svg";
function Icons() {
  return (
    <div
      className={styles.containerSvg}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "0.5rem ",
      }}
    >
      <Svg />
      <svg style={{ color: "#2f96c3" }}>
        <use href="#telegram"></use>
      </svg>
      <svg style={{ color: "#0274b3" }}>
        <use href="#linkedin"></use>
      </svg>
      <svg style={{ color: "#af1c22" }}>
        <use href="#pinterest"></use>
      </svg>
      <svg style={{ color: "#000000" }}>
        <use href="#X"></use>
      </svg>
      <svg style={{ color: "#2f487f" }}>
        <use href="#facebook"></use>
      </svg>
    </div>
  );
}

export default Icons;
