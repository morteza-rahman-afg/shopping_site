import { useLoaderData } from "react-router-dom";
import styles from "./Article1.module.css";

import Icons from "../components/icons";
import Opinion from "../components/Opinion";
import { fetchDataArticle, setComments } from "../serveces/apiProducts";
function Article1() {
  const Article = useLoaderData();

  return (
    <div className={styles.Article1}>
      <div>
        <h1>{Article.Headline1.Headline}</h1>
        <img src={Article.img} alt={`img ${Article.name}`} />
        <p>{Article.Headline1.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline2.Headline}</h3>
        <p>{Article.Headline2.Description}</p>
        <ul>
          <li>{Article.Headline2.Descriptions.d1}</li>
          <li>{Article.Headline2.Descriptions.d2}</li>
          <li>{Article.Headline2.Descriptions.d3}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline3.Headline}</h3>
        <p>{Article.Headline3.Description}</p>
        <ul>
          <li>{Article.Headline3.Descriptions.d1}</li>
          <li>{Article.Headline3.Descriptions.d2}</li>
          <li>{Article.Headline3.Descriptions.d3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline4.Headline}</h3>
        <p>{Article.Headline4.Description}</p>
        <ul>
          <li>{Article.Headline4.Descriptions.d1}</li>
          <li>{Article.Headline4.Descriptions.d2}</li>
          <li>{Article.Headline4.Descriptions.d3}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline5.Headline}</h3>
        <p>{Article.Headline5.Description}</p>
        <ul>
          <li>{Article.Headline5.Descriptions.d1}</li>
          <li>{Article.Headline5.Descriptions.d2}</li>
          <li>{Article.Headline5.Descriptions.d3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Conclusion.Headline}</h3>
        <p>{Article.Conclusion.d1}</p>
      </div>

      <Icons />
      <Opinion />
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newComment = await setComments(data);
  return null;
}

export async function loader({ params }) {
  const data = await fetchDataArticle(params.id);
  return data;
}
export default Article1;
