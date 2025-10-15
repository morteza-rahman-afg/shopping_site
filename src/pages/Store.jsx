import { useLoaderData, useSearchParams } from "react-router-dom";
import styles from "./Store.module.css";
import Cart from "../components/Cart";
import TitlePage from "../ui/TitlePage";
import { fetchFillterDataProduct } from "../serveces/apiProducts";
function Store() {
  const dataFillterProduct = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParams = searchParams.get("type");

  return (
    <div className={styles.containerStore}>
      <div className={styles.containerTextLink}>
        <TitlePage>محصولات</TitlePage>
        <div>
          <button
            style={
              typeParams === "all" ? { borderBottom: "solid 1px red" } : {}
            }
            onClick={() => {
              setSearchParams("type=all");
            }}
          >
            همه محصولات
          </button>
          <button
            style={
              typeParams === "Masculine"
                ? { borderBottom: "solid 1px red" }
                : {}
            }
            onClick={() => {
              setSearchParams("type=Masculine");
            }}
          >
            مردانه
          </button>
          <button
            style={
              typeParams === "Feminine" ? { borderBottom: "solid 1px red" } : {}
            }
            onClick={() => {
              setSearchParams("type=Feminine");
            }}
          >
            زنانه
          </button>
          <button
            style={
              typeParams === "Childish" ? { borderBottom: "solid 1px red" } : {}
            }
            onClick={() => {
              setSearchParams("type=Childish");
            }}
          >
            کودکانه
          </button>
        </div>
      </div>
      <div className={styles.containerCart}>
        {dataFillterProduct.map((cart) => (
          <Cart cart={cart} key={cart.id} />
        ))}
      </div>
    </div>
  );
}
export async function loader({ request }) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const data = await fetchFillterDataProduct(type);
  return data;
  throw new Response("Not Found");
}
export default Store;
