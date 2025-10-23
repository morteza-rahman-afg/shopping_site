import TitlePage from "../ui/TitlePage";
import styles from "./Login.module.css";
import Svg from "../ui/Svg";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const { dispatch } = useAuth();

  /// navigate page
  const navigate = useNavigate();

  /// state show password
  const [showPassword, setShowPassword] = useState(false);

  /// captcha
  const [captch, setCaptch] = useState("");
  const [captchaNums, setCaptchaNums] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    /// Collecting form input names
    const formData = new FormData(e.target);

    /// Getting input values ​​using input names
    const data = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (captch == captchaNums[0] * captchaNums[1]) {
      dispatch({ type: "user", payload: data });
      navigate("/profile/Counter");
      toast.success("ثبت نام با موفقیت انجام شد");
    } else {
      toast.error("کپچا نادرست میباشد.");
    }
  }

  return (
    <div className={styles.containerLogin}>
      <Svg />
      <TitlePage>ایجاد حساب</TitlePage>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.titleForm}>ثبت نام</h3>

          <div className={styles.boxInputLable}>
            <label htmlFor="firstname">نام:</label>
            <input type="text" required name="firstname" id="firstname" />
          </div>

          <div className={styles.boxInputLable}>
            <label htmlFor="lastname">نام خانوادگی:</label>
            <input type="text" required name="lastname" id="lastname" />
          </div>

          <div className={styles.boxInputLable}>
            <label htmlFor="username">نام کاربری (انگلیسی):</label>
            <input
              type="text"
              required
              pattern="[A-Za-z0-9_]+"
              title="فقط حروف انگلیسی و اعداد مجاز است"
              name="username"
              id="username"
            />
          </div>

          <div className={styles.boxInputLable}>
            <label htmlFor="email">ایمیل:</label>
            <input type="email" required name="email" id="email" />
          </div>

          <div className={styles.boxInputLable}>
            <label htmlFor="password">رمز عبور:</label>
            <div className={styles.boxIconsInput}>
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                id="password"
              />
              {showPassword ? (
                <svg onClick={() => setShowPassword(false)}>
                  <use href="#eye_line"></use>
                </svg>
              ) : (
                <svg onClick={() => setShowPassword(true)}>
                  <use href="#eye_off_line"></use>
                </svg>
              )}
            </div>
          </div>

          <div className={styles.boxInputLable}>
            <p>لطفا پاسخ عدد را به انگلیسی تایپ کنید:</p>
            <label htmlFor="number" className={styles.lableNumber}>
              <span>{captchaNums[0]}</span>
              <svg>
                <use href="#close"></use>
              </svg>
              <span>{captchaNums[1]}</span>
              <span>=</span>
            </label>
            <input
              type="text"
              required
              name="number"
              id="number"
              value={captch}
              onChange={(e) => setCaptch(e.target.value)}
            />
          </div>

          <button type="submit">ایجاد حساب</button>
        </form>

        <div className={styles.description}>
          <svg>
            <use href="#add_user"></use>
          </svg>
          <h2>ثبت نام در سایت</h2>
          <p>
            با ساخت حساب می‌توانید به تاریخچه سفارش‌ها و وضعیت خرید خود دسترسی
            داشته باشید. فقط کافیست فرم بالا را پر کنید تا حساب شما ساخته شود.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
