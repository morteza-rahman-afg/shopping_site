import { NavLink, Outlet } from "react-router-dom";
import Svg from "../ui/Svg";
import TitlePage from "../ui/TitlePage";
function Basket() {
  return (
    <div>
      <Svg />
      <TitlePage>
        <NavLink>سبد خرید</NavLink>
        <svg>
          <use href="#arrow_left_long_fill"></use>
        </svg>
        <NavLink>تسویه حساب</NavLink>
        <svg>
          <use href="#arrow_left_long_fill"></use>
        </svg>
        <NavLink>تکمیل سفارش</NavLink>
      </TitlePage>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Basket;
