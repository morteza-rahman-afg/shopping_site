import { object } from "prop-types";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const cartContext = createContext();

const initialState = {
  dataCart: JSON.parse(localStorage.getItem("dataCart")) || [],
  orderData: JSON.parse(localStorage.getItem("orderData")) || [],
  duplicateOrder: null,
};
function cartReducer(state, action) {
  switch (action.type) {
    case "addCart":
      const exists = state.dataCart.some(
        (item) => item.id == action.payload.id
      );
      return exists
        ? state
        : {
            ...state,
            dataCart: [
              ...state.dataCart,
              { ...action.payload.data, Quantity: action.payload.quantity },
            ],
          };
    case "deleteProduct":
      return {
        ...state,
        dataCart: state.dataCart.filter((p) => p.id !== action.payload),
      };
    case "newDataOrder":
      const key = `${action.payload.Province}-${action.payload.City}-${action.payload.ZipCode}`;
      if (state.orderData[key]) return { ...state, duplicateOrder: "error" };

      return {
        ...state,
        duplicateOrder: "addOrder",
        orderData: {
          ...state.orderData,
          [key]: action.payload,
        },
      };
    case "RESET_DUPLICATE_ORDER":
      return { ...state, duplicateOrder: null };

    case "addInformationUser":
      // مقادیر payload شده
      const { orderId, InformationUser } = action.payload;

      // اعتبار سنجی key هدف
      const targetKey = Object.keys(state.orderData).find(
        (key) => state.orderData[key].OrderCode == orderId
      );

      // اگر key وجود نداشت return کن
      if (!targetKey) return state;

      // ذخیره ابجکت هدف با استفاده از key
      const currentOrder = state.orderData[targetKey];

      // اعتبار سنجی که ایا InformationUser در ابجکت وجود دارد یا نه
      const hasInformationUser = !!currentOrder.InformationUser;

      // اگر وجود داشت ارور نشون بده
      if (hasInformationUser) return { ...state, duplicateOrder: "SingleUser" };

      // اگه وجود نداشت ابجکت هد ف را با اطلاعات کاربر اپدیت کن
      const updateOrder = {
        ...currentOrder,
        statusOrder: "در حال بررسی",
        InformationUser,
      };

      // حالا یا استفاده از key هدف مقدارش رو مساوی با ابجکت اپدیت شده قرار بده
      return {
        ...state,
        orderData: {
          ...state.orderData,
          [targetKey]: updateOrder,
        },
      };
    case "Shopping":
      return { ...state, duplicateOrder: "Shopping" };
    case "logoutUser":
      return { ...state, dataCart: [], orderData: [] };
    default:
      return state;
  }
}
function CartProvider({ children }) {
  const [{ dataCart, orderData, duplicateOrder }, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  useEffect(
    function () {
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
    },
    [dataCart]
  );
  useEffect(
    function () {
      localStorage.setItem("orderData", JSON.stringify(orderData));
    },
    [orderData]
  );

  function logoutUser() {
    dispatch({ type: "logoutUser" });
  }
  return (
    <cartContext.Provider
      value={{ dataCart, orderData, dispatch, logoutUser, duplicateOrder }}
    >
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  return context;
}

export { CartProvider, useCart };
