import { cache } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const URL = "http://localhost:9000";
const Contexts = createContext();
function StatesProvider({ children }) {
  const [clothingData, setClothingData] = useState();
  const [show, setShow] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  // const [error, setError] = useState();
  const [newCart, setNewCart] = useState({});
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoding(true);
        const res = await fetch(`${URL}/Clothing`);
        const data = await res.json();
        setClothingData(data);
      } catch (err) {
        console.error(err);
        // setError(err.message);
      } finally {
        setIsLoding(false);
      }
    }
    fetchData();
  }, []);

  async function fetchId(id) {
    try {
      setIsLoding(true);
      const res = await fetch(`${URL}/Clothing/${id}`);
      const data = await res.json();
      setNewCart(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoding(false);
    }
  }

  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  return (
    <Contexts.Provider
      value={{
        clothingData,
        show,
        setShow,
        showWindow,
        setShowWindow,
        isLoding,
        fetchId,
        newCart,
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
