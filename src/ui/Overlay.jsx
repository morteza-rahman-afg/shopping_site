import { useWindow } from "../contexts/WindowsContext";
import styles from "./Overlay.module.css";
function Overlay({ typeShow, show }) {
  const { dispatch } = useWindow();
  return (
    <div
      onClick={() => {
        dispatch({ type: typeShow });
      }}
      className={`${show ? styles.overlay : styles.none}`}
    ></div>
  );
}

export default Overlay;
