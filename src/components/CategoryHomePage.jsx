import { Link } from "react-router-dom";
import styles from "../components/CategoryHomePage.module.css";
const dataCategoryHomePage = [
  {
    type: "Masculine",
    Category: "مردانه",
    text: "پوشاک مردانه",
    img: "min.png",
  },
  {
    type: "Feminine",
    Category: "زنانه",
    text: "انواع پوشاک زنانه",
    img: "women.png",
  },
  {
    type: "Childish",
    Category: "کودک",
    text: "انواع پوشاک کودکانه",
    img: "kids.png",
  },
];
function CategoryHomePage() {
  return (
    <div className={styles.container}>
      {dataCategoryHomePage.map((data, i) => (
        <Link to={`/store?type=${data.type}`} key={i}>
          <div>
            <h2>{data.Category}</h2>

            <p>{data.text}</p>
          </div>
          <div>
            <img
              className={data.type === "Childish" ? styles.imgChildish : ""}
              src={data.img}
              alt="min"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryHomePage;
