// صفحه سبد خرید
import styles from "./ShoppingCartPage.module.css";
import { useCart } from "../contexts/CartContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Svg from "../ui/Svg";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import NotAll from "../ui/NotAll";
function ShoppingCartPage() {
  const Navigate = useNavigate();
  const { dataCart, dispatch, orderData, duplicateOrder } = useCart();
  const { user } = useAuth();
  // console.log(duplicateOrder);
  const [showformDataLocation, setShowformDataLocation] = useState(false);
  const [showShippingCost, setShowShippingCost] = useState(false);
  const x = dataCart.reduce(
    (sum, item) => sum + Number(item.Price) * item.Quantity,
    0
  );
  const q = dataCart.reduce((sum, item) => sum + item.Quantity, 0);
  const existingOrders = JSON.parse(localStorage.getItem("orderData")) || {};
  useEffect(
    function () {
      if (duplicateOrder === "error") {
        toast.error("⚠️ این سفارش قبلاً ثبت شده است و در انتظار پرداخت است.");
        setShowformDataLocation(true);
        setShowShippingCost(false);
      } else if (duplicateOrder === "addOrder") {
        toast.success("سفارش شما با موفقعیت ثبت شد");
        setShowformDataLocation(false);
        setShowShippingCost(true);
      }
      dispatch({ type: "RESET_DUPLICATE_ORDER" });
    },
    [duplicateOrder]
  );

  function handleSubmit(e) {
    e.preventDefault();

    /// Collecting form input names
    const formData = new FormData(e.target);

    /// Getting input values ​​using input names

    const data = {
      Province: formData.get("Province").trim(),
      City: formData.get("City").trim(),
      ZipCode: formData.get("ZipCode").trim(),
    };

    data.Postage = 100000;
    data.totalCost = x;
    const now = new Date();
    data.date = now.toLocaleDateString("fa-IR");
    data.OrderCode = Math.floor(Math.random() * 100000000);
    data.key = `${data.Province}-${data.City}-${data.ZipCode}`;
    data.dataProduct = [...dataCart];
    data.statusOrder = "در انتظار پرداخت";

    if (!data.City || !data.Province || !data.ZipCode) {
      toast.error("تمام فیلد ها باید پر شوند❗");
    } else {
      dispatch({ type: "newDataOrder", payload: data });
      setShowformDataLocation(false);
      e.target.reset();
    }
  }

  if (!dataCart || dataCart?.length === 0)
    return (
      <>
        {!user || user.length === 0 ? (
          <NotAll
            svg="#out_user"
            title="سبد خرید شما خالی است"
            text="برای افزودن محصول به سبد خرید ایجاد حساب کنید."
            address="/login"
            textLink="ثبت نام"
          />
        ) : (
          <NotAll
            svg="#not_basket"
            title="سبد خرید شما خالی است"
            text="برای ادامه خرید، لطفاً محصولی را به سبد خود اضافه کنید."
            address="/store?type=all"
            textLink="فروشگاه"
          >
            +
          </NotAll>
        )}
      </>
    );

  return (
    <section className={styles.containerShoppingCartPage}>
      <Svg />
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
                <svg
                  onClick={() =>
                    dispatch({ type: "deleteProduct", payload: cart.id })
                  }
                >
                  <use href="#close"></use>
                </svg>
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
            <span>{x}</span>
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
              <input
                style={
                  duplicateOrder === "error"
                    ? { border: "2px solid #EF9A9A" }
                    : {}
                }
                type="text"
                name="Province"
                id="Province"
              />
            </div>
            <div>
              <label htmlFor="City">شهر</label>
              <input
                style={
                  duplicateOrder === "error"
                    ? { border: "2px solid #EF9A9A" }
                    : {}
                }
                type="text"
                name="City"
                id="City"
              />
            </div>
            <div>
              <label htmlFor="ZipCode">کد پستی</label>
              <input
                style={
                  duplicateOrder === "error"
                    ? { border: "2px solid #EF9A9A" }
                    : {}
                }
                type="text"
                name="ZipCode"
                id="ZipCode"
              />
            </div>
            <div>
              <button
                style={
                  duplicateOrder === "error"
                    ? { border: "2px solid #EF9A9A" }
                    : {}
                }
              >
                به روزرسانی
              </button>
            </div>
          </form>
        </div>
        <div>
          <span>مجموع</span>
          <p style={{ color: "rgb(46, 173, 233)" }}>
            <span>{showShippingCost ? x + 100000 : x}</span>
            <span>تومان</span>
          </p>
        </div>
        <Link
          style={{ cursor: orderData ? "pointer" : "not-allowed" }}
          to={"/basket/ContainerOrders"}
        >
          اقدام به پرداخت
        </Link>
      </div>
    </section>
  );
}

export default ShoppingCartPage;
