import styles from "./Profile.module.css";
import TitlePage from "../ui/TitlePage";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
function Profile() {
  const { logout } = useAuth();
  const { logoutUser } = useCart();
  const navigate = useNavigate();
  return (
    <div className={styles.containerProfile}>
      <TitlePage>حساب کابری من</TitlePage>
      <div>
        <div className={styles.boxLinkPage}>
          <h3>حساب کاربری من</h3>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            to={"/profile/Counter"}
          >
            پیشخوان
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            to={`/profile/orders/OrderInformationAll`}
          >
            سفارش ها
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            to={"/profile/address"}
          >
            ادرس
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            to={"/profile/account"}
          >
            اطلاعات حساب کاربری
          </NavLink>
          <button
            onClick={() => {
              logout();
              navigate("/");
              logoutUser();
            }}
            className={styles.link}
          >
            خروج
          </button>
        </div>
        <div className={styles.boxRoute}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
