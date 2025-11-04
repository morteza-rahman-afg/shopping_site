import { NavLink, Outlet } from "react-router-dom";
import Svg from "../ui/Svg";
import TitlePage from "../ui/TitlePage";
import { useCart } from "../contexts/CartContext";
import toast from "react-hot-toast";
function Basket() {
  const { orderData } = useCart();
  const ordersArray = Object.values(orderData);
  const isInformationUser = ordersArray.some((opder) => opder.InformationUser);
  console.log(isInformationUser);
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
          onClick={(e) => {
            if (!orderData || orderData.length === 0 || !isInformationUser) {
              e.preventDefault();
              toast.error("شما سفارشی ثبت نکردید");
            }
            // !orderData || orderData.length === 0 ? e.preventDefault() : "";
          }}
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
