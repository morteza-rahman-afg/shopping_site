import { Form } from "react-router-dom";
import styles from "./Account.module.css";
function Account() {
  return (
    <Form className={styles.form}>
      <div className={styles.box_inputs_name_family}>
        <div>
          <label htmlFor="name">نام:</label>
          <input type="text" name="userName" id="name" />
        </div>
        <div>
          <label htmlFor="family">نام خانوادگی:</label>
          <input type="text" name="userFamily" id="family" />
        </div>
        <div>
          <label htmlFor="email">ایمیل:</label>
          <input type="text" name="userEmail" id="email" />
        </div>
      </div>

      <div className={styles.box_new_password}>
        <div>
          <label htmlFor="Previous_password">
            رمز عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)
          </label>
          <input type="text" name="Previous_password" id="Previous_password" />
        </div>
        <div>
          <label htmlFor="New_password">
            رمز عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)
          </label>
          <input type="text" name="New_password" id="New_password" />
        </div>
        <div>
          <label htmlFor="Repeat_new_password">تایید رمز عبور جدید:</label>
          <input
            type="text"
            name="Repeat_new_password"
            id="Repeat_new_password"
          />
        </div>
      </div>
      <button>ذخیره تغییرات</button>
    </Form>
  );
}

export default Account;
