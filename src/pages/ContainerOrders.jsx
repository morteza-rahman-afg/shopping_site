import { Link, Outlet, useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./ContainerOrders.module.css";
function ContainerOrders() {
  const { orderData } = useCart();
  const ordersArray = Object.values(orderData);
  const { idOrder } = useParams();
  const q = ordersArray.map((order) =>
    order.dataProduct.reduce((sum, item) => sum + Number(item.Quantity), 0)
  );
  const x = ordersArray.map(
    (order) =>
      order.dataProduct.reduce((sum, item) => sum + Number(item.Price), 0) +
      order.Postage
  );
  console.log(ordersArray);
  return (
    <div className={styles.ContainerOrders}>
      <div className={styles.ContainerOrdersLink}>
        {!idOrder &&
          ordersArray.map((order, i) => (
            <Link to={`Checkout/${order.OrderCode}`} key={order.key}>
              <span>{order.OrderCode}</span>
              <p>
                <span>تعداد</span>
                <span>q{q[i]}</span>
              </p>
              <span>{x[i]}</span>
            </Link>
          ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ContainerOrders;
