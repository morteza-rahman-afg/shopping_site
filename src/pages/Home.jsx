import styles from "../pages/Home.module.css";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import CategoryHomePage from "../components/CategoryHomePage";
import MensProducts from "../components/MensProducts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";
// import { useStates } from "../contexts/Contexts";
function Home() {
  // const { clothingData } = useStates();
  return (
    <>
      <Nav />
      <NavMobile />
      <div className={styles.container}>
        <Slider />
        <CategoryHomePage />
        <MensProducts type={"Masculine"} />
        <MensProducts type={"Feminine"} />
        <MensProducts type={"Childish"} />
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default Home;
