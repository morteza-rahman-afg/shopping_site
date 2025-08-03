import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../components/Slider.module.css";
import { Link } from "react-router-dom";

const imgs1 = [
  {
    type: "Masculine",
    img: "slide1.png",
    text: "فروش انواع پوشاک مردانه",
  },
  {
    type: "Masculine",
    img: "slide2.png",
    text: "فروش انواع پوشاک مردانه",
  },
  {
    type: "Feminine",
    img: "slide3.png",
    text: "فروش انواع پوشاک زنانه",
  },
];
function Slider() {
  return (
    <Swiper
      className={styles.containerSlide}
      modules={[Navigation, Autoplay, Pagination]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {imgs1.map((data, i) => (
        <SwiperSlide className={styles.slide} key={i}>
          <div className={styles.textSlide}>
            <h1>فروشگاه سارینا</h1>
            <p>{data.text}</p>
            <Link to={`/store?type=${data.type}`}>مشاهده محصولات</Link>
          </div>
          <div className={styles.boxImg}>
            <span className={styles.Circle}></span>
            <img src={data.img} alt={`slide${i}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
