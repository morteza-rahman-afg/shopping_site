import { useCart } from "../contexts/CartContext";
import NotAll from "../ui/NotAll";
import styles from "./Address.module.css";

function Address() {
  const { orderData } = useCart();
  const ordersArray = Object.values(orderData);
  if (!orderData || orderData.length === 0)
    return (
      <NotAll
        svg="#map_pin"
        title="هیچ آدرسی ثبت نکردی هنوز."
        text="برای اینکه آدرسی ثبت بشه، ابتدا باید یه سفارش جدید ثبت کنی."
        address="/store?type=all"
        textLink="فروشگاه"
      />
    );
  return (
    <div className={styles.containerAddress}>
      <p>آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.</p>
      {ordersArray.map((item) => (
        <div key={item.UserCode}>
          <div>
            <h4>آدرس صورتحساب:</h4>
            <p>
              <span>{item.name}</span> <span>{item.family}</span>
            </p>
            <p>{item.Province}</p>
            <p>{item.City}</p>
            <p>{item.note}</p>
            <p>{item.ZipCode}</p>
          </div>
          <div>
            <h4>آدرس برای ارسال بار:</h4>
            <p>
              <span>{item.name}</span> <span>{item.family}</span>
            </p>
            <p>{item.Province}</p>
            <p>{item.City}</p>
            <p>{item.note}</p>
            <p>{item.ZipCode}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Address;
