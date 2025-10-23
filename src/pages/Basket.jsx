import { NavLink, Outlet } from "react-router-dom";
import Svg from "../ui/Svg";
import TitlePage from "../ui/TitlePage";
import { useState } from "react";
function Basket() {
  return (
    <div>
      <Svg />
      <TitlePage>
        <NavLink
          style={({ isActive }) =>
            isActive ? { opacity: "1" } : { opacity: "0.5" }
          }
          to={"ShoppingCartPage"}
        >
          سبد خرید
        </NavLink>
        <svg>
          <use href="#arrow_left_long_fill"></use>
        </svg>
        <NavLink
          style={({ isActive }) =>
            isActive ? { opacity: "1" } : { opacity: "0.5" }
          }
          to={"ContainerOrders"}
        >
          تسویه حساب
        </NavLink>
        <svg>
          <use href="#arrow_left_long_fill"></use>
        </svg>
        <NavLink
          style={({ isActive }) =>
            isActive ? { opacity: "1" } : { opacity: "0.5" }
          }
          to={"CompleteOrder"}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          تکمیل سفارش
        </NavLink>
      </TitlePage>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Basket;
