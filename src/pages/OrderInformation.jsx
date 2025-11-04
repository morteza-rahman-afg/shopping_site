import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./OrderInformation.module.css";
function OrderInformation() {
  const { orderData } = useCart();
  const { ID } = useParams();
  const ordersArray = Object.values(orderData);
  // const [OrderCode, date, statusOrder, totalCost, Postage, City] =
  //   ordersArray.filter((order) => order.OrderCode == ID)[0];
  const {
    OrderCode,
    date,
    statusOrder,
    totalCost,
    Postage,
    City,
    Province,
    ZipCode,
  } = ordersArray.filter((order) => order.OrderCode == ID)[0];
  const { MobileNumber, PaymentMethod, Street, email, family, name, note } =
    ordersArray.filter((order) => order.OrderCode == ID)[0].InformationUser;

  return (
    <div className={styles.containerOrderInformation}>
      <div className={styles.containerlists}>
        <div className={styles.textList}>
          <p>
            سفارش <span>{OrderCode}#</span> در تاریخ <span>{date}</span> ثبت شده
            و هم اکنون <span>{statusOrder}</span> است.
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
              <th>مجموع:</th>
              <th style={{ color: "#2EADEB" }}>{totalCost} تومان</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>حمل و نقل:</th>
              <th>
                <span style={{ color: "#2EADEB" }}>{Postage} تومان</span> به
                وسیله ی پست پیشتاز
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>قیمت نهایی:</th>
              <th style={{ color: "#2EADEB" }}>
                {totalCost + Postage}
                تومان
              </th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>روش پرداخت:</th>
              <th>{PaymentMethod}</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th>یادداشت:</th>
              <th>{note}</th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ================================== */}
      <div className={styles.userSpecifications}>
        <div>
          <h4>آدرس صورتحساب:</h4>
          <p>{name + " " + family}</p>
          <p>{Province}</p>
          <p>{City}</p>
          <p>{note}</p>
          <p>{ZipCode}</p>
          <p>{MobileNumber}</p>
          <p>{email}</p>
        </div>
        <div>
          <h4>ادرس برای ارسال بار:</h4>
          <p>{name + " " + family}</p>
          <p>{Province}</p>
          <p>{City}</p>
          <p>{note}</p>
          <p>{ZipCode}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderInformation;
