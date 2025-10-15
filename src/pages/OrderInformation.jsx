import styles from "./OrderInformation.module.css";
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

function OrderInformation() {
  return (
    <div className={styles.containerOrderInformation}>
      <div className={styles.containerlists}>
        <div className={styles.textList}>
          <p>
            سفارش <span>{FakeOrderDetails[0].OrderCode}#</span> در تاریخ{" "}
            <span>{FakeOrderDetails[0].OrderDate}</span> ثبت شده و هم اکنون{" "}
            <span>{FakeOrderDetails[0].OrderStatus}</span> است.
          </p>
        </div>
        <h3>جزئیات سفارش</h3>
        <table className={styles.list}>
          <thead>
            <tr>
              <th>محصول</th>
              <th>مجموع</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                {FakeOrderDetails[0].NameProduct}{" "}
                <span style={{ color: "#2EADEB" }}>
                  تعداد x{FakeOrderDetails[0].Quantity}
                </span>
              </th>
              <th style={{ color: "#2EADEB" }}>
                {FakeOrderDetails[0].Price} تومان
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>مجموع:</th>
              <th style={{ color: "#2EADEB" }}>
                {FakeOrderDetails[0].Price} تومان
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>حمل و نقل:</th>
              <th>
                <span style={{ color: "#2EADEB" }}>
                  {FakeOrderDetails[0].PostageFee} تومان
                </span>{" "}
                به وسیله ی {FakeOrderDetails[0].PostalCompanyName}
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>قیمت نهایی:</th>
              <th style={{ color: "#2EADEB" }}>
                {FakeOrderDetails[0].Quantity * FakeOrderDetails[0].Price +
                  FakeOrderDetails[0].PostageFee}{" "}
                تومان
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>روش پرداخت:</th>
              <th>{FakeOrderDetails[0].PaymentMethod}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>یادداشت:</th>
              <th>{FakeOrderDetails[0].Notes}</th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ================================== */}
      <div className={styles.userSpecifications}>
        <div>
          <h4>آدرس صورتحساب:</h4>
          <p>
            {FakeOrderDetails[0].UserName} {FakeOrderDetails[0].UserLastName}
          </p>
          <p>{FakeOrderDetails[0].UserProvince}</p>
          <p>{FakeOrderDetails[0].UserCity}</p>
          <p>{FakeOrderDetails[0].Notes}</p>
          <p>{FakeOrderDetails[0].UserCode}</p>
          <p>{FakeOrderDetails[0].UserMobileNumber}</p>
          <p>{FakeOrderDetails[0].UserEmail}</p>
        </div>
        <div>
          <h4>ادرس برای ارسال بار:</h4>
          <p>
            {FakeOrderDetails[0].UserName} {FakeOrderDetails[0].UserLastName}
          </p>
          <p>{FakeOrderDetails[0].UserProvince}</p>
          <p>{FakeOrderDetails[0].UserCity}</p>
          <p>{FakeOrderDetails[0].Notes}</p>
          <p>{FakeOrderDetails[0].UserCode}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;
