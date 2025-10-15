import styles from "./Like.module.css";
import { Link } from "react-router-dom";
import Svg from "../ui/Svg";
import Button from "../ui/Button";
import TitlePage from "../ui/TitlePage";
import NotLike from "../components/NotLike";
import { useLike } from "../contexts/LikeContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
function Like() {
  const { dataLike, dispatch } = useLike();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) dispatch({ type: "AllDelete" });
  }, []);
  return (
    <>
      <Svg />
      {dataLike.length > 0 && (
        <div className={styles.containerCartLike}>
          <TitlePage>علاقه مندی ها</TitlePage>
          <h2 className={styles.titleLike}>لیست محصولات مورد علاقه شما</h2>
          <div className={styles.containerCartAll}>
            {dataLike.map((cart) => (
              <div key={cart.id} className={styles.containerCart}>
                <div className={styles.containerDeleteCartLike}>
                  <button
                    className={styles.btnDelete}
                    onClick={() =>
                      dispatch({ type: "deleteProductLike", payload: cart.id })
                    }
                  >
                    <svg>
                      <use href="#close"></use>
                    </svg>
                    حذف
                  </button>
                </div>
                <Link to={`/product/${cart.id}`} className={styles.cartLike}>
                  <img src={cart.img} alt={`img ${cart.name}`} />
                  <div className={styles.boxContentCartLike}>
                    <h4>{cart.name}</h4>
                    <span>{cart.Price}تومان</span>
                    <Button />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {dataLike.length === 0 && <NotLike />}
    </>
  );
}

export default Like;
