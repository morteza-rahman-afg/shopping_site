import { createContext, useContext, useReducer } from "react";

const windowContext = createContext();

const initialState = {
  showWindow: false,
  statusWindowMobile: false,
  statusWindiwBasket: false,
  statusWindiwLogin: false,
};
function windowReducer(state, action) {
  switch (action.type) {
    case "show":
      return { ...state, showWindow: true };
    case "close":
      return { ...state, showWindow: false };
    case "List":
      return { ...state, statusWindowMobile: true };
    case "Category":
      return { ...state, statusWindowMobile: false };
    case "showBasket":
      return { ...state, statusWindiwBasket: true };
    case "closeBasket":
      return { ...state, statusWindiwBasket: false };
    case "showWindowLogin":
      return { ...state, statusWindiwLogin: true };
    case "closeWindowLogin":
      return { ...state, statusWindiwLogin: false };
    default:
      return state;
  }
}
function WindowPrevider({ children }) {
  const [
    { showWindow, statusWindowMobile, statusWindiwBasket, statusWindiwLogin },
    dispatch,
  ] = useReducer(windowReducer, initialState);

  return (
    <windowContext.Provider
      value={{
        showWindow,
        statusWindowMobile,
        statusWindiwBasket,
        statusWindiwLogin,
        dispatch,
      }}
    >
      {children}
    </windowContext.Provider>
  );
}

function useWindow() {
  const context = useContext(windowContext);
  return context;
}

export { WindowPrevider, useWindow };
