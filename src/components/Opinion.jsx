import styles from "./Opinion.module.css";
import { Form } from "react-router-dom";
function Opinion() {
  const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );
  return (
    <div className={styles.containerForm}>
      <h3 className={styles.title}>دیدگاهتان را بنویسید</h3>
      <p className={styles.text}>
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
        <span className={styles.S}>*</span>
      </p>
      <Form className={styles.containerInput} method="POST">
        <label htmlFor="coment">
          دیدگاه<span className={styles.S}>*</span>
        </label>
        <textarea required id="coment" name="comment" />
        <div className={styles.containerInputTextEmail}>
          <div>
            <label htmlFor="name">
              نام<span className={styles.S}>*</span>
            </label>
            <input required type="text" id="name" name="userName" />
          </div>
          <div>
            <label htmlFor="email">
              ایمیل<span className={styles.S}>*</span>
            </label>
            <input required type="email" id="email" name="email" />
          </div>
        </div>
        <button className={styles.btnForm}>ارسال دیدگاه</button>
      </Form>
    </div>
  );
}

export default Opinion;
