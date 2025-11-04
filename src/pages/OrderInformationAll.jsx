import { Link, NavLink } from "react-router-dom";
import styles from "./OrderInformationAll.module.css";
import { useCart } from "../contexts/CartContext";
import NotAll from "../ui/NotAll";
function OrderInformationAll() {
  const { orderData } = useCart();
  const ordersArray = Object.values(orderData);

  if (!orderData || orderData.length === 0)
    return (
      <NotAll
        svg="#shopping_bag4_line"
        title="شما سفارشی ثبت نکرده اید."
        text="هنوز هیچ سفارشی ثبت نکرده‌اید. بهترین‌ها را از فروشگاه ما ببینید."
        address="/store?type=all"
        textLink="فروشگاه"
      />
    );

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
        {ordersArray.map(
          (item, i) =>
            item.InformationUser && (
              <tbody key={item.OrderCode} className={styles.Table_information}>
                <tr>
                  <th style={{ color: "#2EADEB" }}>#{item.OrderCode}</th>
                  <th>{item.date}</th>
                  <th>{item.statusOrder}</th>
                  <th>
                    <span style={{ color: "#2EADEB" }}>
                      {item.totalCost + item.Postage} تومان
                    </span>{" "}
                    <span>برای {item.Quantity} مورد</span>
                  </th>
                  <th className={styles.box_btn}>
                    <NavLink
                      className={styles.btn_Taible}
                      to={`/profile/orders/OrderInformation/${item.OrderCode}`}
                    >
                      نمایش
                    </NavLink>
                  </th>
                </tr>
              </tbody>
            )
        )}
      </table>
      {ordersArray.map(
        (item) =>
          item.InformationUser && (
            <table
              className={styles.containerOrderInformationAll_max_width800px}
            >
              <tbody>
                <tr>
                  <th>تاریخ:</th>
                  <th>{item.date}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>وضعیت:</th>
                  <th>{item.statusOrder}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>مجموع:</th>
                  <th>
                    <span style={{ color: "#2EADEB" }}>
                      {item.totalCost + item.Postage} تومان
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
                      to={`/profile/orders/OrderInformation/${item.OrderCode}`}
                    >
                      نمایش
                    </NavLink>
                  </th>
                </tr>
              </tbody>
            </table>
          )
      )}
    </>
  );
}

export default OrderInformationAll;
