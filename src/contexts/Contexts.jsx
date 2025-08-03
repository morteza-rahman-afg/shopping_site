import { useReducer } from "react";
import { createContext, useContext, useEffect, useRef } from "react";

const initialState = {
  clothingData: [],
  showWindow: false,
  statusWindowMobile: false,
  isLoding: false,
  newCart: {},
  newData: [],
  status: "",
};
function reducer(states, action) {
  switch (action.type) {
    case "data":
      return { ...states, clothingData: action.payload };
    case "show":
      return { ...states, showWindow: true };
    case "close":
      return { ...states, showWindow: false };
    case "List":
      return { ...states, statusWindowMobile: true };
    case "Category":
      return { ...states, statusWindowMobile: false };
    case "Loading":
      return { ...states, isLoding: true };
    case "CancelUpload":
      return { ...states, isLoding: false };
    case "newData":
      return { ...states, newCart: action.payload };
    case "new":
      return { ...states, newData: action.payload, status: "all" };
    case "all":
      return { ...states, newData: states.clothingData, status: "all" };
    case "Masculine":
      return {
        ...states,
        newData: states.clothingData.filter((d) => d.type === "Masculine"),
        status: "Masculine",
      };
    case "Feminine":
      return {
        ...states,
        status: "Feminine",
        newData: states.clothingData.filter((d) => d.type === "Feminine"),
      };
    case "Childish":
      return {
        ...states,
        status: "Childish",
        newData: states.clothingData.filter((d) => d.type === "Childish"),
      };
    default:
      return states;
  }
}
const URL = "http://localhost:9000";
const Contexts = createContext();
function StatesProvider({ children }) {
  const [
    {
      clothingData,
      showWindow,
      statusWindowMobile,
      isLoding,
      newCart,
      newData,
      status,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const style = {
    width: "100%",
    height: "90px",
    borderRadius: "0px",
    margin: 0,
  };
  useEffect(function () {
    async function fetchData() {
      try {
        dispatch({ type: "Loading" });
        const res = await fetch(`${URL}/Clothing`);
        const data = await res.json();
        dispatch({ type: "data", payload: data });
        dispatch({ type: "new", payload: data });
      } catch (err) {
        console.error(err);
      } finally {
        dispatch({ type: "CancelUpload" });
      }
    }
    fetchData();
  }, []);

  async function fetchId(id) {
    try {
      dispatch({ type: "Loading" });
      const res = await fetch(`${URL}/Clothing/${id}`);
      const data = await res.json();
      dispatch({ type: "newData", payload: data });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({ type: "CancelUpload" });
    }
  }
  const navRef = useRef(null);
  function scrollTop() {
    navRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  //////////////////////////////////////////////

  return (
    <Contexts.Provider
      value={{
        dispatch,
        clothingData,
        statusWindowMobile,
        showWindow,
        isLoding,
        fetchId,
        newCart,
        style,
        newData,
        status,
        navRef,
        scrollTop,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

function useStates() {
  const context = useContext(Contexts);
  return context;
}

export { StatesProvider, useStates };
