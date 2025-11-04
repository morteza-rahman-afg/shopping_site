import { Link, Outlet, useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./ContainerOrders.module.css";
function ContainerOrders() {
  const { orderData } = useCart();
  const { idOrder } = useParams();
  const ordersArray = Object.values(orderData);
  const q = ordersArray.map((order) => {
    const products = Array.isArray(order.dataProduct) ? order.dataProduct : [];
    return products.reduce((sum, item) => sum + Number(item.Quantity), 0);
  });
  const x = ordersArray.map((order) => {
    const products = Array.isArray(order.dataProduct) ? order.dataProduct : [];

    return (
      products.reduce((sum, item) => sum + Number(item.Price), 0) +
      order.Postage
    );
  });
  // const isInformationUser = ordersArray.includes("InformationUser");
  // console.log(isInformationUser);

  // if(!isInformationUser) return

  return (
    <div className={styles.ContainerOrders}>
      {!idOrder && (
        <table className={styles.ContainerOrdersLink}>
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>تاریخ ثبت</th>
              <th>استان / شهر</th>
              <th className={styles.Quantity}>تعداد محصول</th>
              <th>مبلغ کل</th>
              <th className={styles.status}>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {ordersArray.map(
              (order, i) =>
                !order.InformationUser && (
                  <tr key={order.key}>
                    <th>#{order.OrderCode}</th>
                    <th>{order.date}</th>
                    <th>
                      {order.Province} / {order.City}
                    </th>
                    <th className={styles.Quantity}>{q[i]}</th>
                    <th>{x[i]}</th>
                    <th className={styles.status}>{order.statusOrder}</th>
                    <th>
                      <Link to={`Checkout/${order.OrderCode}`}>پرداخت</Link>
                    </th>
                  </tr>
                )
            )}
          </tbody>
        </table>
      )}
      <Outlet />
    </div>
  );
}

export default ContainerOrders;
