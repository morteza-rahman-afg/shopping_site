import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import PropTypes from "prop-types";
import styles from "../pages/FilterProducts.module.css";
import { useStates } from "../contexts/Contexts";

function FilterProducts() {
  const { clothingData } = useStates();
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Nav />
      <h1>{id === "Masculine" && "مردانه"}</h1>
      <h1>{id === "Feminine" && "زنانه"}</h1>
      <h1>{id === "Childish" && "کودکانه"}</h1>
      <div></div>
      {clothingData.map(
        (data) =>
          data.type === id && (
            <div key={data.id}>
              <h1>{data.name}</h1>
            </div>
          )
      )}
    </div>
  );
}

export default FilterProducts;
