// تسویه حساب
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Svg from "../ui/Svg";
import styles from "./Checkout.module.css";
import toast from "react-hot-toast";
import { useState } from "react";

function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState("not selectedMethod");
  const navigate = useNavigate();
  const { dataCart, orderData, dispatch, duplicateOrder } = useCart();
  const { idOrder } = useParams();
  const ordersArray = Object.values(orderData);
  const totalCost = ordersArray.reduce(
    (sum, order) => (order.OrderCode == idOrder ? sum + order.totalCost : sum),
    0
  );
  const Postage = ordersArray.reduce(
    (sum, order) => (order.OrderCode == idOrder ? sum + order.Postage : sum),
    0
  );

  function handleSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name").trim(),
      family: formData.get("family").trim(),
      Street: formData.get("Street").trim(),
      MobileNumber: formData.get("MobileNumber").trim(),
      email: formData.get("email").trim(),
      note: formData.get("note").trim(),
    };
    data.PaymentMethod = selectedMethod;
    if (!data.note) {
      data.note = "not NOTE TEXT";
    }

    if (
      !data.name ||
      !data.family ||
      !data.Street ||
      !data.MobileNumber ||
      !data.email
    ) {
      toast.error("تمام فیلد ها باید پر شوند❗");
    } else if (data.name.length < 4 || data.family.length < 4) {
      toast.error("تعداد کاراکتر های نام و نام خانوادگی باید بیشتر 3 حرف باشد");
    } else if (data.Street.length < 8) {
      toast.error("تعداد کاراکتر های ادرس باید بیشتر از 5 حرف باشد");
    } else if (data.MobileNumber.length < 13) {
      toast.error("شماره موبایل باید 13 رقم داشته باشد");
    } else if (duplicateOrder == "SingleUser") {
      toast.error("اطلاعات قبلا ثبت شده است");
      e.target.reset();
    } else if (selectedMethod == "not selectedMethod") {
      toast.error("روشی برای پرداخت انتخاب کنید");
    } else {
      dispatch({
        type: "addInformationUser",
        payload: { orderId: idOrder, InformationUser: data },
      });
      toast.success("اطلاعات با موفقعیت ثبت شد.");
      setSelectedMethod("not selectedMethod");
      e.target.reset();
    }
  }

  function handleChange(e) {
    setSelectedMethod(e.target.value);
  }
  console.log(selectedMethod);

  return (
    <div className={styles.containerCheckOut}>
      <Svg />
      {ordersArray.map(
        (order) =>
          order.OrderCode == idOrder && (
            <>
              <div className={styles.SpecificationsUser} key={order.OrderCode}>
                <h4>جزئیات پرداخت</h4>
                <form className={styles.form} onSubmit={handleSubmitForm}>
                  <div className={styles.boxInput}>
                    <label htmlFor="nameUser">نام: </label>
                    <input type="text" id="nameUser" name="name" />
                  </div>
                  <div className={styles.boxInput}>
                    <label htmlFor="family">نام خانوادگی: </label>
                    <input type="text" id="family" name="family" />
                  </div>

                  <div>
                    <span>کشور / منطقه: </span>
                    <span>ایران</span>
                  </div>
                  <div>
                    <span>استان: </span>
                    <span>{order.Province}</span>
                  </div>
                  <div>
                    <span>شهر: </span>
                    <span>{order.City}</span>
                  </div>

                  <div className={styles.boxInput}>
                    <label htmlFor="Address">خیابون: </label>
                    <input
                      type="text"
                      id="Address"
                      placeholder="پلاک خانه و نام خیابان"
                      name="Street"
                    />
                  </div>
                  <div>
                    <p>کد پستی: {order.ZipCode}</p>
                  </div>
                  <div className={styles.boxInput}>
                    <label htmlFor="tel">تلفن همراه</label>
                    <input
                      type="tel"
                      id="tel"
                      name="MobileNumber"
                      placeholder="+98"
                    />
                  </div>
                  <div className={styles.boxInput}>
                    <label htmlFor="email">ادرس ایمیل</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className={styles.boxInputNote}>
                    <label htmlFor="Note">یادداشت(اختیاری)</label>
                    <textarea
                      id="Note"
                      placeholder="یادداشت ها درباره سفارش شما برای مثال نکات مهم برای تحویل بار"
                      name="note"
                    ></textarea>
                  </div>
                  <button>بروزرسانی</button>
                </form>
              </div>

              <div className={styles.myOrder}>
                <h4>سفارش شما</h4>
                <div className={styles.containerSpecificationsUserProduct}>
                  <div className={styles.topContainerSpecificationsUserProduct}>
                    <h6>محصول</h6>
                    <h6>جمع جزء</h6>
                  </div>

                  {order.dataProduct.map((item) => (
                    <div
                      className={styles.SpecificationsUserProduct}
                      key={item.id}
                    >
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
                    <span>{totalCost}</span>
                  </div>
                  <div className={styles.ShippingCost}>
                    <p>حمل و نقل</p>
                    <p>100,000 تومان</p>
                  </div>
                  <div className={styles.Total}>
                    <p>مجموع</p>
                    <span>{totalCost + Postage}</span>
                  </div>
                </div>
                <div className={styles.containetPaymentMethod}>
                  <div>
                    <input
                      id="Payment1"
                      type="radio"
                      name="payment"
                      value="snapp pay"
                      checked={selectedMethod === "snapp pay"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Payment1">snapp pay</label>
                  </div>
                  <div>
                    <input
                      id="Payment2"
                      type="radio"
                      name="payment"
                      value="When receiving"
                      checked={selectedMethod === "When receiving"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Payment2">پرداخت هنگام دریافت</label>
                  </div>
                  <div>
                    <input
                      id="Payment3"
                      type="radio"
                      name="payment"
                      value="Pee Ping"
                      checked={selectedMethod === "Pee Ping"}
                      onChange={handleChange}
                    />
                    <label htmlFor="Payment3">پرداخت از طریق پی‌پینگ</label>
                  </div>
                </div>
                <div className={styles.OrderDescription}>
                  <p>
                    از داده های شخصی شما برای پردازش سفارش شما ، پشتیبانی از
                    تجربه خود در سراسر این وب سایت و اهداف دیگری که در{" "}
                    <a href="#">سیاست حفظ حریم خصوصی</a> ما شرح داده می شود ،
                    استفاده می شود.
                  </p>
                </div>
                <div className={styles.orderBtn}>
                  <button
                    onClick={() => {
                      if (order.InformationUser) {
                        navigate(`/basket/CompleteOrder/${order.OrderCode}`);
                        dispatch({ type: "Shopping", payload: "Shopping" });
                      } else {
                        toast.error(
                          "برای خرید اطلاعات خواسته شده را وارد کنید"
                        );
                      }
                    }}
                  >
                    ثبت سفارش
                  </button>
                </div>
              </div>
            </>
          )
      )}
    </div>
  );
}

export default Checkout;
