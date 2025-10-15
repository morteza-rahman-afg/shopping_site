import { Link, NavLink } from "react-router-dom";
import styles from "./OrderInformationAll.module.css";
const now = new Date();
const date = now.toLocaleDateString("fa-IR");
const FakeOrderDetails = [
  {
    NameProduct: "تیشرت چایی دخترانه", // نام
    OrderDate: date, // تاریخ سفارش
    OrderCode: Math.floor(Math.random() * 100000), // کد سفارش
    OrderStatus: "درحال بررسی", // وضعیت سفارش
    Price: 190000, // قیمت
    Total: 380000, // مجموع7
    Quantity: 2, // تعد اد
    PostageFee: 43000, // هزینه پست
    PostalCompanyName: "پست پیشتاز", // نام شرکت پستی
    FinalPrice: 200000, // قیمت نهایی
    PaymentMethod: "snapp pay", // روش پرداخت
    Notes: "یادداشت", // یادداشت
    UserName: "مرتضی", // نام کاربر
    UserLastName: "رحمانی", // فامیل کاربر
    UserEmail: "test@gmail.com", // ایمیل کاربر
    UserMobileNumber: "09391066754", // شماره موبایل کاربر
    UserProvince: "خراسان رضوی", // استان کاربر
    UserCity: "مشهد", // شهر کاربر
    UserStreet: "پنجتن", // خیابون محل سکونت کاربر
    UserCode: "98675610", // کد پرستی کاربر
  },
];

function OrderInformationAll() {
  return (
    <>
      <table className={styles.containerOrderInformationAll}>
        <thead className={styles.Table_titles}>
          <tr>
            <th>سفارش</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>مجموع</th>
            <th>عملیات</th>
          </tr>
        </thead>
        {FakeOrderDetails.map((item, i) => (
          <tbody key={Math.random() * 100} className={styles.Table_information}>
            <tr>
              <th style={{ color: "#2EADEB" }}>#{item.OrderCode}</th>
              <th>{item.OrderDate}</th>
              <th>{item.OrderStatus}</th>
              <th>
                <span style={{ color: "#2EADEB" }}>
                  {item.Quantity * item.Price + item.PostageFee} تومان
                </span>{" "}
                <span>برای {item.Quantity} مورد</span>
              </th>
              <th className={styles.box_btn}>
                <NavLink
                  className={styles.btn_Taible}
                  to={"/profile/orders/OrderInformation"}
                >
                  نمایش
                </NavLink>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
      {FakeOrderDetails.map((item) => (
        <table className={styles.containerOrderInformationAll_max_width800px}>
          <tbody>
            <tr>
              <th>تاریخ:</th>
              <th>{item.OrderDate}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>وضعیت:</th>
              <th>{item.OrderStatus}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>مجموع:</th>
              <th>
                <span style={{ color: "#2EADEB" }}>
                  {item.Quantity * item.Price + item.PostageFee} تومان
                </span>{" "}
                <span>برای {item.Quantity} مورد</span>
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>عملیات ها:</th>
              <th className={styles.box_btn}>
                <NavLink
                  className={styles.btn_Taible}
                  to={"/profile/orders/OrderInformation"}
                >
                  نمایش
                </NavLink>
              </th>
            </tr>
          </tbody>
          <span></span>
        </table>
      ))}
    </>
  );
}

export default OrderInformationAll;
