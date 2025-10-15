import { Outlet } from "react-router-dom";
import styles from "./Orders.module.css";
// const now = new Date();
// const date = now.toLocaleDateString("fa-IR");
// const FakeOrderDetails = [
//   {
//     NameProduct: "تیشرت چایی دخترانه", // نام
//     OrderDate: date, // تاریخ سفارش
//     OrderCode: Math.floor(Math.random() * 100), // کد سفارش
//     OrderStatus: "درحال بررسی", // وضعیت سفارش
//     Price: 190000, // قیمت
//     Total: 380000, // مجموع7
//     Quantity: 2, // تعد اد
//     PostageFee: 43000, // هزینه پست
//     PostalCompanyName: "پست پیشتاز", // نام شرکت پستی
//     FinalPrice: 200000, // قیمت نهایی
//     PaymentMethod: "snapp pay", // روش پرداخت
//     Notes: "یادداشت", // یادداشت
//     UserName: "مرتضی", // نام کاربر
//     UserLastName: "رحمانی", // فامیل کاربر
//     UserEmail: "test@gmail.com", // ایمیل کاربر
//     UserMobileNumber: "09391066754", // شماره موبایل کاربر
//     UserProvince: "خراسان رضوی", // استان کاربر
//     UserCity: "مشهد", // شهر کاربر
//     UserStreet: "پنجتن", // خیابون محل سکونت کاربر
//     UserCode: "98675610", // کد پرستی کاربر
//   },
// ];
function Orders() {
  return (
    <div className={styles.containerOrdrs}>
      <Outlet />
    </div>
  );
}

export default Orders;
