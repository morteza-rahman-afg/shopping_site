import styles from "./Product.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { fetchOneDataProduct } from "../serveces/apiProducts";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
function Product() {
  const dataOneProduct = useLoaderData();
  const { dispatch, dataCart } = useCart();
  const { user } = useAuth();
  const newCart = dataCart.filter((product) => product.id == dataOneProduct.id);
  const [Quantity, setQuantity] = useState(1);

  return (
    <>
      <section className={styles.containerProduct}>
        <Link
          to={`/store?type=all`}
          className={styles.back}
          title="بازگشت به فروشگاه"
        >
          <svg>
            <use href="#layout_grid_fill"></use>
          </svg>
        </Link>
        <section className={styles.imgProduct}>
          <img src={dataOneProduct.img} alt={`img ${dataOneProduct.name}`} />
        </section>
        <section className={styles.contentProduct}>
          <div className={styles.content}>
            <h3>{dataOneProduct.name}</h3>
            <span>{dataOneProduct.Price}تومان</span>
            <p>{dataOneProduct.Description}</p>
          </div>
          {newCart.length > 0 ? (
            <div className={styles.productCart}>
              <div>
                <span>
                  تعداد: <span>{Quantity}</span>
                </span>
                <p>محصول به سبد خرید اضافه شده است</p>
              </div>
              <Link to={"/basket/ShoppingCartPage"}>مشاهده سبد خرید</Link>
            </div>
          ) : (
            <>
              {!user || user.length === 0 ? (
                <div className={styles.productCart}>
                  <p>برای افزودن محصول به سبد خرید ایجاد حساب کنید.</p>
                  <Link to={"/login"}>ایجاد حساب کاربری</Link>
                </div>
              ) : (
                <div className={styles.btns}>
                  <div>
                    <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                    <span>{Quantity}</span>
                    <button
                      onClick={() => Quantity > 1 && setQuantity((q) => q - 1)}
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "addCart",
                        payload: {
                          data: dataOneProduct,
                          quantity: Quantity,
                          id: dataOneProduct.id,
                        },
                      })
                    }
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </section>
    </>
  );
}

export async function loader({ params }) {
  const data = await fetchOneDataProduct(params.id);
  return data;
}

export default Product;
