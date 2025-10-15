import { Link } from "react-router-dom";
import styles from "./NotLike.module.css";
import TitlePage from "../ui/TitlePage";
import Svg from "../ui/Svg";
import { useAuth } from "../contexts/AuthContext";
function NotLike() {
  const { user } = useAuth();
  return (
    <>
      <Svg />
      {!user || user.length === 0 ? (
        <div className={styles.containerLike}>
          <TitlePage>علاقه مندی ها</TitlePage>
          <div className={styles.containerNotLike}>
            <svg>
              <use href="#out_user"></use>
            </svg>
            <h3>برای افزودن محصول به علاقه مندی ها ایجاد حساب کنید.</h3>
            <Link to={"/login"}>ایجاد حساب کاربری</Link>
          </div>
        </div>
      ) : (
        <div className={styles.containerLike}>
          <TitlePage>علاقه مندی ها</TitlePage>
          <div className={styles.containerNotLike}>
            <svg>
              <use href="#heart"></use>
            </svg>
            <h3>این لیست علاقه مندی ها خالی است.</h3>
            <p>
              شما هنوز هیچ کالایی در لیست دلخواه ندارید. محصولات جالب بسیاری را
              در صفحه "فروشگاه" ما پیدا خواهید کرد. بازگشت به فروشگاه
            </p>
            <Link to={`/store?type=all`}>بازگشت به فروشگاه</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default NotLike;
