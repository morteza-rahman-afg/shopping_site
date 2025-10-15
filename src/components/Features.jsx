import styles from "./Features.module.css";
import Svg from "../ui/Svg";

function Features() {
  return (
    <div className={styles.containerFeatures}>
      <Svg />
      <div>
        <div>
          <svg>
            <use href="#Medal"></use>
          </svg>
        </div>
        <div>
          <h3>ضمانت اصالت کالا</h3>
          <p>تضمین اصل بودن کالا</p>
        </div>
      </div>
      <div>
        <div>
          <svg>
            <use href="#cart"></use>
          </svg>
        </div>
        <div>
          <h3>پرداخت ایمن</h3>
          <p>خرید از طریق درگاه بانکی</p>
        </div>
      </div>
      <div>
        <div>
          <svg>
            <use href="#truck_line"></use>
          </svg>
        </div>
        <div>
          <h3>ارسال فوری</h3>
          <p>ارسال سریع به سراسر کشور</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
