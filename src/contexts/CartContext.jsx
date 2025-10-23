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
