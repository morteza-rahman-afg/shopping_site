import { Link, useLocation } from "react-router-dom";
import styles from "./NavMobile.module.css";
import { useStates } from "../contexts/Contexts";
import { useEffect } from "react";

function NavMobile() {
  const { statusWindowMobile, showWindow, dispatch } = useStates();

  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "close" });
  }, [location.pathname]);
  return (
    <>
      <div
        onClick={() => {
          dispatch({ type: "close" });
        }}
        className={`${showWindow ? styles.overlay : styles.none}`}
      ></div>
      <div
        className={`${styles.NavMobile} ${
          showWindow ? styles.showNav : styles.closeNav
        }`}
      >
        <svg
          onClick={() => {
            dispatch({ type: "close" });
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
        </svg>
        <div className={styles.boxBtn}>
          <button
            onClick={() => {
              dispatch({ type: "List" });
            }}
            className={`${styles.btn} ${
              statusWindowMobile ? styles.active : styles.Inactive
            }`}
          >
            فهرست
          </button>
          <button
            onClick={() => {
              dispatch({ type: "Category" });
            }}
            className={`${styles.btn} ${
              !statusWindowMobile ? styles.active : styles.Inactive
            }`}
          >
            دسته بندی
          </button>
        </div>
        {statusWindowMobile ? (
          <div className={styles.List}>
            <Link to={"/"}>صفحه اصلی</Link>

            <Link to={"/aboutUs"}>درباره ما</Link>

            <Link to={"/store"}>فروشگاه</Link>

            <Link to={"/blog"}>بلاگ</Link>
          </div>
        ) : (
          <div className={styles.Category}>
            <Link to={`/store`}>مردانه</Link>
            <Link to={`/store`}>زنانه</Link>
            <Link to={`/store`}>کودکانه</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavMobile;
