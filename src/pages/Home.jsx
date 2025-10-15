import styles from "../pages/Home.module.css";
import Slider from "../components/Slider";
import CategoryHomePage from "../components/CategoryHomePage";
import ProductCart from "../components/ProductCart";
import Features from "../components/Features";
import { fetchDataProducts } from "../serveces/apiProducts";
import { useLoaderData } from "react-router-dom";
function Home() {
  return (
    <div className={styles.container}>
      <Slider />
      <CategoryHomePage />
      <ProductCart type={"Masculine"} />
      <ProductCart type={"Feminine"} />
      <ProductCart type={"Childish"} />
      <Features />
    </div>
  );
}
export async function loader() {
  const data = await fetchDataProducts();
  return data;
}

export default Home;
