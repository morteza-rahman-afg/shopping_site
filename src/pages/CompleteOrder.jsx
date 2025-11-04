// تکیمل سفارش
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./CompleteOrder.module.css";
import { useEffect } from "react";
import toast from "react-hot-toast";
function CompleteOrder() {
  const { orderData, dispatch, duplicateOrder } = useCart();
  const { id } = useParams();
  const ordersArray = Object.values(orderData);
  useEffect(
    function () {
      if (duplicateOrder == "Shopping")
        toast.success("تبریک! خرید شما با موفقعیت انجام شد");
    },
    [duplicateOrder]
  );
  const { OrderCode, date, statusOrder } = ordersArray.filter(
    (order) => order.OrderCode == id
  )[0];

  const { PaymentMethod } = ordersArray.filter(
    (order) => order.OrderCode == id
  )[0].InformationUser;

  return (
    <div className={styles.CompleteOrder}>
      <div className={styles.box1}>
        <h2>سفارش شما با موفقعیت ثبت شد🎉✅</h2>
        <p>
          <span>شماره سفارش:</span> <span>{OrderCode}#</span>
        </p>
        <span>از خرید شما سپاسگزارم🌹</span>
      </div>
      <div className={styles.box2}>
        <div>
          <p>
            <span>شماره سفارش:</span> <span>{OrderCode}#</span>
          </p>
          <p>
            <span>تاریخ سفارش:</span> <span>{date}</span>
          </p>
        </div>
        <div>
          <p>
            <span>وضعیت سفارش:</span> <span>{statusOrder}</span>
          </p>
          <p>
            <span>روش پرداخت:</span> <span>{PaymentMethod}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompleteOrder;
