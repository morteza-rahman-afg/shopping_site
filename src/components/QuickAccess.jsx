import { Link } from "react-router-dom";
import styles from "./QuickAccess.module.css";
function QuickAccess({ data }) {
  return (
    <div className={styles.containerQuickAccess}>
      <div className={styles.boxLink}>
        <h4>دسته بندی ها</h4>
        <Link to={"/blog"}>بلاگ</Link>
      </div>
      {data.map((Article) => (
        <Link
          to={`${Article.name}/${Article.id}`}
          key={Article.id}
          className={styles.Category}
        >
          <img src={Article.img} />
          <h3>{Article.Headline1.Headline}</h3>
        </Link>
      ))}
    </div>
  );
}

export default QuickAccess;
