import { NavLink, Link } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.Footer}>
      <Title />
      <QuickAccess />
      <Categories />
      <SymbolOfTrust />
    </div>
  );
}

export default Footer;
function SymbolOfTrust() {
  return (
    <div>
      <h4>نماد اعتماد</h4>
      <img src="enamad1.png" alt="enamad" />
      <p>این نماد فاقد اعتبار می باشد و صرفا جنبه نمایشی دارد </p>
    </div>
  );
}
function Categories() {
  return (
    <div>
      <h4>دسته بندی ها</h4>
      <Link to={`/filterProducts/Masculine`}>مردانه</Link>
      <Link to={`/filterProducts/Feminine`}>زنانه</Link>
      <Link to={`/filterProducts/Childish`}>کودکانه</Link>
    </div>
  );
}
function QuickAccess() {
  return (
    <div>
      <h4>دسترسی سریع</h4>
      <NavLink to={"/"}>صفحه اصلی</NavLink>

      <NavLink to={"/aboutUs"}>درباره ما</NavLink>

      <NavLink to={"/store"}>فروشگاه</NavLink>

      <NavLink to={"/blog"}>بلاگ</NavLink>
    </div>
  );
}
function Title() {
  return (
    <div>
      <img src="logow.png" alt="Logo Footer" />
      <p>
        فروشگاه پوشاک سارینا دنیایی از لباس‌های شیک و باکیفیت طیف گسترده‌ای از
        لباس‌های زنانه، مردانه و بچگانه کیفیت بالا، قیمت مناسب، خرید آسان
      </p>
    </div>
  );
}
