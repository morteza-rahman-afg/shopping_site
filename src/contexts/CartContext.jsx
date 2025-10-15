import { createContext, useContext, useEffect, useReducer } from "react";

const cartContext = createContext();

const initialState = {
  dataCart: JSON.parse(localStorage.getItem("dataCart")) || [],
  // orderData: {
  //   Province: "",
  //   City: "",
  //   ZipCode: "",
  //   Postage: 0,
  // },
  orderData: null,
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
      return {
        ...state,
        orderData: {
          ...action.payload,
        },
      };
    case "logoutUser":
      return { ...state, dataCart: [], orderData: [] };
    default:
      return state;
  }
}
function CartProvider({ children }) {
  const [{ dataCart, orderData }, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  useEffect(
    function () {
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
    },
    [dataCart]
  );

  function logoutUser() {
    dispatch({ type: "logoutUser" });
  }
  console.log(dataCart, orderData);
  return (
    <cartContext.Provider value={{ dataCart, orderData, dispatch, logoutUser }}>
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  return context;
}

export { CartProvider, useCart };
