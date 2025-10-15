import { Link, useLocation } from "react-router-dom";
import styles from "./NavMobile.module.css";
import { useEffect } from "react";
import Overlay from "./Overlay";
import { useWindow } from "../contexts/WindowsContext";

function NavMobile() {
  const { statusWindowMobile, showWindow, dispatch } = useWindow();

  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "close" });
  }, [location.pathname]);
  return (
    <>
      <Overlay typeShow={"close"} show={showWindow} />
      <div
        className={`${styles.NavMobile} ${
          showWindow ? styles.showNav : styles.closeNav
        }`}
      >
        <svg
          onClick={() => {
            dispatch({ type: "close" });
          }}
        >
          <use href="#close"></use>
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

            <Link to={`/store?type=all`}>فروشگاه</Link>

            <Link to={"/blog"}>بلاگ</Link>
          </div>
        ) : (
          <div className={styles.Category}>
            <Link to={`/store?type=Masculine`}>مردانه</Link>
            <Link to={`/store?type=Feminine`}>زنانه</Link>
            <Link to={`/store?type=Childish`}>کودکانه</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavMobile;
