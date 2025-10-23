import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import Svg from "./Svg";
import { useCart } from "../contexts/CartContext";
import { useWindow } from "../contexts/WindowsContext";
import { useLike } from "../contexts/LikeContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
function Nav({ navRef }) {
  const { dataLike, loguotUserDeleteLike } = useLike();
  const { dataCart, logoutUser } = useCart();
  const { dispatch } = useWindow();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div ref={navRef} className={styles.nav}>
      <Svg />
      <svg
        className={styles.showWindow}
        onClick={() => {
          dispatch({ type: "show" });
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z"></path>
      </svg>

      <div className={styles.cotainerImg}>
        <img className={styles.img} src="/logos.png" alt="Logo" />
      </div>

      <div className={styles.cotainerLink}>
        <NavLink to={"/"}>صفحه اصلی</NavLink>

        <NavLink to={"/aboutUs"}>درباره ما</NavLink>

        <NavLink to={`/store?type=all`}>فروشگاه</NavLink>

        <NavLink to={"/blog"}>بلاگ</NavLink>
      </div>

      <div className={styles.cotainerIcon}>
        <NavLink className={styles.iconLink} to={"/like"}>
          <svg className={styles.icon}>
            <use href="#heart"></use>
          </svg>
          <span className={styles.lengthCart}>
            {!user ? 0 : dataLike.length}
          </span>
        </NavLink>
        <button
          onClick={() => dispatch({ type: "showBasket" })}
          className={styles.iconLink}
        >
          <svg className={styles.icon}>
            <use href="#shopping_basket"></use>
          </svg>
          <span className={styles.lengthCart}>{dataCart.length}</span>
        </button>

        {user ? (
          <div className={styles.dropdownProfile}>
            <Link className={styles.iconLink} to={"profile/Counter"}>
              <svg className={styles.icon}>
                <use href="#out_user"></use>
              </svg>

              <span className={styles.name}>
                {user.lastname} {user.firstname}
              </span>
            </Link>
            <div className={styles.boxLinkDropdown}>
              <NavLink to={"/profile/Counter"}>پیشخوان</NavLink>
              <NavLink to={"/profile/orders/OrderInformationAll"}>
                سفارش ها
              </NavLink>
              <NavLink to={"/profile/address"}>آدرس</NavLink>
              <NavLink to={"/profile/account"}>اطلاعات حساب کاربری</NavLink>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                  logoutUser();
                  loguotUserDeleteLike();
                }}
              >
                خروج
              </button>
            </div>
          </div>
        ) : (
          <button
            className={styles.iconLink}
            onClick={() => dispatch({ type: "showWindowLogin" })}
          >
            <svg className={styles.icon}>
              <use href="#user"></use>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
