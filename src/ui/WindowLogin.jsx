import styles from "./WindowLogin.module.css";
import Overlay from "../ui/Overlay";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useWindow } from "../contexts/WindowsContext";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function WindowLogin() {
  /// state inputs
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  /// state context
  const { dispatch, statusWindiwLogin } = useWindow();
  const { login } = useAuth();
  ///
  const location = useLocation();
  const navigate = useNavigate();

  /// delete fild
  useEffect(() => {
    if (!statusWindiwLogin) {
      setEmail("");
      setPassword("");
      setCaptchaAnswer("");
    }
  }, [statusWindiwLogin]);
  /// close window login
  useEffect(() => {
    dispatch({ type: "closeWindowLogin" });
  }, [location.pathname]);

  /// number random
  useEffect(() => {
    setCaptcha({
      a: Math.floor(Math.random() * 10),
      b: Math.floor(Math.random() * 10),
    });
  }, [statusWindiwLogin]);

  /// POST data form
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    /// captcha
    if (parseInt(captchaAnswer) !== captcha.a * captcha.b) {
      setError("پاسخ کپچا اشتباه است");
      return;
    }

    try {
      await login(email, password); // remember Send
      dispatch({ type: "closeWindowLogin" }); /// close window login
      navigate("/"); /// navigate home page
    } catch (err) {
      setError(err.message || "مشکلی پیش آمد"); /// error
    }
  }

  return (
    <>
      <Overlay typeShow={"closeWindowLogin"} show={statusWindiwLogin} />
      <div
        style={
          statusWindiwLogin
            ? { transform: "translateX(0px)" }
            : { transform: "translateX(-340px)" }
        }
        className={styles.containerWindowLigin}
      >
        <div className={styles.topWindowLogin}>
          <h3>ورود به حساب</h3>
          <button onClick={() => dispatch({ type: "closeWindowLogin" })}>
            بستن
            <svg>
              <use href="#close"></use>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.boxInput}>
            <label htmlFor="email">نام کاربری یا ایمیل:</label>
            <input
              type="text"
              required
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.boxInput}>
            <label htmlFor="password">رمز عبور</label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className={styles.boxInput}>
            <p>لطفا پاسخ عدد را به انگلیسی تایپ کنید:</p>
            <label htmlFor="number">
              <span>{captcha.a}</span>
              <svg>
                <use href="#close"></use>
              </svg>
              <span>{captcha.b}</span>
              <span>=</span>
            </label>
            <input
              type="text"
              required
              name="number"
              id="number"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">ورود</button>
        </form>

        <div className={styles.bottomWindowLogin}>
          <div>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>مرا به خاطر بسپار</span>
          </div>
          <a href="#">رمز عبور را فراموش کرده‌اید؟</a>
        </div>

        <div className={styles.boxNewAccount}>
          <svg>
            <use href="#user"></use>
          </svg>
          <p>هنوز حساب کاربری ندارید؟</p>
          <Link to={"/login"}>ایجاد حساب کاربری</Link>
        </div>
      </div>
    </>
  );
}

export default WindowLogin;
