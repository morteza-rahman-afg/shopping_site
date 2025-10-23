// تسویه حساب
import { useCart } from "../contexts/CartContext";
import Svg from "../ui/Svg";
import styles from "./Checkout.module.css";
function Checkout() {
  const { dataCart, orderData } = useCart();
  const x = dataCart.reduce((sum, item) => sum + Number(item.Price), 0);
  const q = dataCart.reduce((sum, item) => sum + item.Quantity, 0);
  console.log(orderData);
  return (
    <div className={styles.containerCheckOut}>
      <Svg />
      <div className={styles.SpecificationsUser}>
        <h4>جزئیات پرداخت</h4>
        <form>
          <div>
            <div>
              <label htmlFor="nameUser">نام</label>
              <input type="text" id="nameUser" required />
            </div>
            <div>
              <label htmlFor="family">نام خانوادگی</label>
              <input type="text" id="family" required />
            </div>
          </div>
          <div>
            <div>
              <span>کشور / منطقه</span>
              <span>ایران</span>
            </div>
            <div>
              <span>استان</span>
              <span>خراسان رضوی</span>
            </div>
            <div>
              <span>شهر</span>
              <span>مشهد</span>
            </div>
          </div>
          <div>
            <label htmlFor="Address">خیابان</label>
            <input
              type="text"
              id="Address"
              required
              placeholder="پلاک خانه و نام خیابان"
            />
          </div>
          <div>
            <span>کد پستی</span>
            <span>45564165</span>
          </div>
          <div>
            <label htmlFor="tel">تلفن همراه</label>
            <input type="tel" required id="tel" />
          </div>
          <div>
            <label htmlFor="email">ادرس ایمیل</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="Note">یادداشت(اختیاری)</label>
            <textarea
              id="Note"
              placeholder="یادداشت ها درباره سفارش شما برای مثال نکات مهم برای تحویل بار"
            ></textarea>
          </div>
        </form>
      </div>
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      {/* -------------------------------------- */}
      <div className={styles.myOrder}>
        <h4>سفارش شما</h4>
        <div className={styles.containerSpecificationsUserProduct}>
          <div className={styles.topContainerSpecificationsUserProduct}>
            <h6>محصول</h6>
            <h6>جمع جزء</h6>
          </div>
          {dataCart.map((item) => (
            <div className={styles.SpecificationsUserProduct} key={item.id}>
              <div>
                <img src={item.img} alt={`img ${item.name}`} />
                <h6>{item.name}</h6>
              </div>
              <div>
                <p>{item.Price}</p>
              </div>
            </div>
          ))}
          <div className={styles.CostOfOrderedProducts}>
            <p>جمع جزء</p>
            <span>{x * q}</span>
          </div>
          <div className={styles.ShippingCost}>
            <p>حمل و نقل</p>
            <p>
              <span>تومان</span>
              <span>100,000</span>
            </p>
          </div>
          <div className={styles.Total}>
            <p>مجموع</p>
            <span>{x * q + 100000}</span>
          </div>
        </div>
        {/* منطق: باید فقط یک روش پرداخت انتخاب شود */}
        <div className={styles.containetPaymentMethod}>
          <div>
            <input type="checkbox" id="Payment1" />
            <label htmlFor="Payment1">snapp pay</label>
          </div>
          <div>
            <input type="checkbox" id="Payment2" />
            <label htmlFor="Payment2">پرداخت هنگام دریافت</label>
          </div>
          <div>
            <input type="checkbox" id="Payment3" />
            <label htmlFor="Payment3">پرداخت از طریق پی‌پینگ</label>
          </div>
        </div>
        <div className={styles.OrderDescription}>
          <p>
            از داده های شخصی شما برای پردازش سفارش شما ، پشتیبانی از تجربه خود
            در سراسر این وب سایت و اهداف دیگری که در{" "}
            <a href="#">سیاست حفظ حریم خصوصی</a> ما شرح داده می شود ، استفاده می
            شود.
          </p>
        </div>
        <div className={styles.orderBtn}>
          <button>ثبت سفارش</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
