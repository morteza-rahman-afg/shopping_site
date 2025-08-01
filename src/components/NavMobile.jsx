import { Link, useLocation } from "react-router-dom";
import styles from "./NavMobile.module.css";
import { useStates } from "../contexts/Contexts";
import { useEffect } from "react";

function NavMobile() {
  const { show, setShow, showWindow, setShowWindow } = useStates();

  const location = useLocation();

  useEffect(() => {
    setShowWindow(false);
  }, [location.pathname]);
  return (
    <>
      <div
        onClick={() => setShowWindow(false)}
        className={`${showWindow ? styles.overlay : styles.none}`}
      ></div>
      <div
        className={`${styles.NavMobile} ${
          showWindow ? styles.showNav : styles.closeNav
        }`}
      >
        <svg
          onClick={() => setShowWindow(false)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
        </svg>
        <div className={styles.boxBtn}>
          <button
            onClick={() => setShow(true)}
            className={`${styles.btn} ${
              show ? styles.active : styles.Inactive
            }`}
          >
            فهرست
          </button>
          <button
            onClick={() => setShow(false)}
            className={`${styles.btn} ${
              !show ? styles.active : styles.Inactive
            }`}
          >
            دسته بندی
          </button>
        </div>
        {show ? (
          <div className={styles.List}>
            <Link to={"/"}>صفحه اصلی</Link>

            <Link to={"/aboutUs"}>درباره ما</Link>

            <Link to={"/store"}>فروشگاه</Link>

            <Link to={"/blog"}>بلاگ</Link>
          </div>
        ) : (
          <div className={styles.Category}>
            <Link to={`/filterProducts/Masculine`}>مردانه</Link>
            <Link to={`/filterProducts/Feminine`}>زنانه</Link>
            <Link to={`/filterProducts/Childish`}>کودکانه</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavMobile;
