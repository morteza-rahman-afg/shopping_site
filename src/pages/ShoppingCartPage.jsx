// صفحه سبد خرید
import styles from "./ShoppingCartPage.module.css";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
function ShoppingCartPage() {
  const { dataCart, dispatch, orderData } = useCart();
  const [showformDataLocation, setShowformDataLocation] = useState(false);
  const x = dataCart.reduce((sum, item) => sum + Number(item.Price), 0);
  const q = dataCart.reduce((sum, item) => sum + item.Quantity, 0);

  function handleSubmit(e) {
    e.preventDefault();

    /// Collecting form input names
    const formData = new FormData(e.target);

    /// Getting input values ​​using input names
    const data = {
      Province: formData.get("Province"),
      City: formData.get("City"),
      ZipCode: formData.get("ZipCode"),
    };
    data.Postage = 100000;
    data.totalCost = q * x + data.Postage;
    const now = new Date();
    data.date = now.toLocaleDateString("fa-IR");
    data.OrderCode = Math.floor(Math.random() * 100000000);
    // console.log(data);
    dispatch({ type: "newDataOrder", payload: data });
    setShowformDataLocation(false);
  }

  return (
    <section className={styles.containerShoppingCartPage}>
      <table>
        <thead className={styles.theadTable}>
          <tr>
            <th className={styles.thProduct}>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع جزء</th>
          </tr>
        </thead>
        {dataCart.map((cart) => (
          <tbody className={styles.tableTable} key={cart.id}>
            <tr>
              <th className={styles.thProduct}>
                <img
                  src={cart.img}
                  alt="product img"
                  className={styles.productImg}
                />
                <span> {cart.name}</span>
              </th>
              <th>{cart.Price}</th>
              <th>{cart.Quantity}</th>
              <th>{cart.Quantity * cart.Price}</th>
            </tr>
          </tbody>
        ))}
      </table>
      {/* =============================== */}
      {/* =============================== */}
      {/* =============================== */}
      <div className={styles.ShoppingCartTotal}>
        <div>
          <span>جمع جز:</span>
          <p style={{ color: "#777777" }}>
            <span>{q * x}</span>
            <span>تومان</span>
          </p>
        </div>
        <div
          style={showformDataLocation ? { maxHeight: "380px" } : {}}
          className={styles.containerFormDataLocation}
        >
          <div>
            <span>حمل و نقل:</span>
            <p>
              <span style={{ color: "#777777" }}>
                آدرس کامل تان را وارد نمائید تا گزینه‌های حمل و نقل را مشاهده
                نمائید
              </span>
              <button onClick={(e) => setShowformDataLocation((s) => !s)}>
                مساحبه هزینه حمل و نقل
              </button>
            </p>
          </div>
          <form className={styles.formDataLocation} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Province">استان</label>
              <input type="text" required name="Province" id="Province" />
            </div>
            <div>
              <label htmlFor="City">شهر</label>
              <input type="text" required name="City" id="City" />
            </div>
            <div>
              <label htmlFor="ZipCode">کد پستی</label>
              <input type="text" required name="ZipCode" id="ZipCode" />
              {/* <input type="hidden" value={100000} name="Postage" /> */}
            </div>
            <div>
              <button>به روزرسانی</button>
            </div>
          </form>
        </div>
        <div>
          <span>مجموع</span>
          <p style={{ color: "rgb(46, 173, 233)" }}>
            <span>{orderData?.totalCost ? orderData?.totalCost : q * x}</span>
            <span>تومان</span>
          </p>
        </div>
        <Link
          style={{ cursor: orderData ? "pointer" : "not-allowed" }}
          disabled={orderData}
          to={orderData && "/basket/Checkout"}
        >
          اقدام به پرداخت
        </Link>
      </div>
    </section>
  );
}

export default ShoppingCartPage;
