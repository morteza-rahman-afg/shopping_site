import { Link, useNavigate } from "react-router-dom";
import styles from "./CounterScreen.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
const items = [
  { icon: "#map_pin2_line", text: "آدرس", to: "/profile/address" },
  {
    icon: "#draft_line",
    text: "سفارش ها",
    to: "/profile/orders/OrderInformationAll",
  },
  { icon: "#file_excel2_line", text: "خروج" },
  { icon: "#user", text: "اطلاعات حساب کاربری", to: "/profile/account" },
];

function CounterScreen() {
  const { logout } = useAuth();
  const { logoutUser } = useCart();
  const navigate = useNavigate();
  return (
    <div className={styles.containerCounterScreen}>
      <div>
        <p>
          <span>سلام</span> <span>مرتضی</span>
        </p>
        <p className={styles.descriptionLink}>
          از پیشخوان حساب کاربری خود می توانید{" "}
          <Link to={"/profile/orders"}>آخرین سفارش ها</Link> را ببینید ، به
          راحتی <Link to={"/profile/address"}>آدرس حمل و نقل و صورت حساب</Link>{" "}
          را مدیریت کنید و{" "}
          <Link to={"/profile/account"}>اطلاعات حساب کاربری و رمز عبور</Link> را
          تغییر دهید.
        </p>
      </div>
      <div className={styles.containerBox}>
        {items.map((item, i) =>
          item.to ? (
            <Link to={item.to} key={item.icon} className={styles.card}>
              <svg>
                <use href={item.icon}></use>
              </svg>
              <h4>{item.text}</h4>
            </Link>
          ) : (
            <button
              onClick={() => {
                logout();
                navigate("/");
                logoutUser();
              }}
              key={item.icon}
              className={styles.card}
            >
              <svg>
                <use href={item.icon}></use>
              </svg>
              <h4>{item.text}</h4>
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default CounterScreen;
