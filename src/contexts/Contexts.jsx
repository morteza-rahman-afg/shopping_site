import { createContext, useContext, useEffect, useState } from "react";

const URL = "http://localhost:9000";
const Contexts = createContext();
function StatesProvider({ children }) {
  const [clothingData, setClothingData] = useState([]);
  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`Clothing.json`);
      const data = await res.json();
      setClothingData(data);
    }
    fetchData();
  }, []);

  // ////////////////////////////////////////////////////

  const [show, setShow] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

  return (
    <Contexts.Provider
      value={{ clothingData, show, setShow, showWindow, setShowWindow }}
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
