import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import styles from "../pages/AboutUs.module.css";
import { useStates } from "../contexts/Contexts";

function AboutUs() {
  const { style } = useStates();
  return (
    <>
      <NavMobile />
      <Nav objStyle={style} />
      <div className={styles.aboutUs}>
        <h1>درباره ما</h1>
        <div>
          <div className={styles.conteinerText}>
            <h2>فروشگاه پوشاک سارینا</h2>
            <p>
              راهبرد اصلی فروشگاه اینترنتی سارینا از همان ابتدا ایجاد بالاترین
              مزیت برای مشتریان و تامین رضایت حداکثری آنها بود. این فروشگاه
              موفقیت خود را صرفا در گرو رضایت مشتریان خود از خرید اینترنتی
              محصولات می‌داند، زیرا مطلع است که در دنیای امروز، با ابزارات
              ارتباطی پیشرفته و گسترش شبکه‌های اجتماعی رضایت مشتریان تنها برگ
              برنده او خواهد بود و لذا سعی نموده است بجای صرف بودجه‌های کلان
              برای تبلیغات، تمرکز و بودجه خود را صرف تامین حداکثر رضایت مشتریان
              کنند.
            </p>
          </div>
          <div className={styles.conteinerImg}>
            <img
              className={styles.img}
              src="About_Us_Page_Image.png"
              alt="About_Us_Page_Image"
            />
            <img
              className={styles.bg}
              src="About_Us_Page_Image_BG.jpg"
              alt="About_Us_Page_Image_BG"
            />
            <span className={styles.gradien}></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
