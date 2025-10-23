import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const likeContext = createContext();

const initialState = {
  dataLike: JSON.parse(localStorage.getItem("dataLike")) || [],
  statusSvgLike: false,
};

function likeReducer(state, action) {
  switch (action.type) {
    case "addLike":
      const exists = state.dataLike.some(
        (item) => item.id == action.payload.id
      );
      return exists
        ? state
        : {
            ...state,
            statusSvgLike: true,
            dataLike: [...state.dataLike, action.payload.data],
          };
    case "deleteProductLike":
      return {
        ...state,
        dataLike: state.dataLike.filter((p) => p.id !== action.payload),
      };
    case "allDelete":
      return { ...state, dataLike: [] };
    default:
      return state;
  }
}

function LikeProvider({ children }) {
  const [{ dataLike, statusSvgLike }, dispatch] = useReducer(
    likeReducer,
    initialState
  );
  useEffect(
    function () {
      localStorage.setItem("dataLike", JSON.stringify(dataLike));
    },
    [dataLike]
  );
  function loguotUserDeleteLike() {
    dispatch({ type: "allDelete" });
  }
  return (
    <likeContext.Provider
      value={{ dataLike, dispatch, statusSvgLike, loguotUserDeleteLike }}
    >
      {children}
    </likeContext.Provider>
  );
}

function useLike() {
  const context = useContext(likeContext);
  return context;
}

export { LikeProvider, useLike };
