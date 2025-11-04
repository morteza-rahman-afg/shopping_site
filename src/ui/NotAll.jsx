import { Link } from "react-router-dom";
import styles from "./NotAll.module.css";
function NotAll({ type, svg, title, text, address, textLink, children }) {
  if (type === "NotWindowBasketProduct")
    return (
      <div className={styles.NotWindowBasketProduct}>
        <div>
          <span>+</span>
          <svg>
            <use href="#not_basket"></use>
          </svg>
        </div>
        <h6>سبد خرید شما خالی است</h6>
        <Link to={`/store?type=all`}>مشاهده محصولات</Link>
      </div>
    );

  if (type === "NotWindowBasketLoginUser")
    return (
      <div className={styles.NotWindowBasketLoginUser}>
        <svg>
          <use href="#out_user"></use>
        </svg>
        <h6>برای افزودن محصول به سبد خرید ایجاد حساب کنید.</h6>
        <Link to={"/login"}>ایجاد حساب کاربری</Link>
      </div>
    );
  // ___________________________________________________________
  // ___________________________________________________________
  // ___________________________________________________________
  // ___________________________________________________________

  return (
    <div className={styles.containerNotAll}>
      <div>
        {children && <span>{children}</span>}
        <svg>
          <use href={`${svg}`}></use>
        </svg>
      </div>
      <h6>{title}</h6>
      <p>{text}</p>
      <Link to={`${address}`}>{textLink}</Link>
    </div>
  );
}

export default NotAll;
