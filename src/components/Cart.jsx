import Button from "../ui/Button";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import Svg from "../ui/Svg";
import { useLike } from "../contexts/LikeContext";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
function Cart({ cart }) {
  const { user } = useAuth();
  const { dispatch, statusSvgLike, dataLike } = useLike();
  const isLike = dataLike.some((item) => item.id === cart.id);
  function handleLike(e) {
    e.preventDefault();
    if (user) {
      if (isLike) {
        dispatch({ type: "deleteProductLike", payload: cart.id });
      } else {
        dispatch({
          type: "addLike",
          payload: { id: cart.id, data: cart },
        });
      }
    } else {
      toast.error("برای افزودن محصول به علاقه مندی ها حساب کاربری ایجاد کنید.");
    }
  }
  return (
    <Link className={styles.linkCart} key={cart.id} to={`/product/${cart.id}`}>
      <Svg />
      <button onClick={handleLike} className={styles.boxSvgLike}>
        <svg style={isLike ? { color: "red" } : { color: "#242424" }}>
          {isLike ? <use href="#heart_solid"></use> : <use href="#heart"></use>}
        </svg>
      </button>
      <div className={styles.boxImg}>
        <img src={cart.img} alt={cart.name} />
      </div>
      <h3>{cart.name}</h3>
      <span>{cart.Price}تومان</span>
      <Button>انتخاب گزینه ها</Button>
    </Link>
  );
}

export default Cart;
