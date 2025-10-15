import { useLoaderData } from "react-router-dom";
import { fetchDataArticle, setComments } from "../serveces/apiProducts";
import styles from "./Article2.module.css";
import Icons from "../components/icons";
import Opinion from "../components/Opinion";
function Article2() {
  const Article = useLoaderData();
  return (
    <div className={styles.Article2}>
      <div>
        <h1>{Article.Headline1.Headline}</h1>
        <img src={Article.img} alt={`Img ${Article.Headline1.Headline}`} />
        <p>{Article.Headline1.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline2.Headline}</h3>
        <p>{Article.Headline2.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline3.Headline}</h3>
        <ul>
          <li>{Article.Headline3.d1}</li>
          <li>{Article.Headline3.d2}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline4.Headline}</h3>
        <p>{Article.Headline4.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline5.Headline}</h3>
        <ul>
          <li>{Article.Headline5.d1}</li>
          <li>{Article.Headline5.d2}</li>
          <li>{Article.Headline5.d3}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline6.Headline}</h3>
        <p>{Article.Headline6.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline7.Headline}</h3>
        <ul>
          <li>{Article.Headline7.d1}</li>
          <li>{Article.Headline7.d2}</li>
          <li>{Article.Headline7.d3}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline8.Headline}</h3>
        <p>{Article.Headline8.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline9.Headline}</h3>
        <ul>
          <li>{Article.Headline9.d1}</li>
          <li>{Article.Headline9.d2}</li>
          <li>{Article.Headline9.d3}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline10.Headline}</h3>
        <ul>
          <li>{Article.Headline10.d1}</li>
          <li>{Article.Headline10.d2}</li>
          <li>{Article.Headline10.d3}</li>
        </ul>
      </div>
      <div>
        <h3>{Article.Headline11.Headline}</h3>
        <p>{Article.Headline11.d1}</p>
      </div>
      <div>
        <h3>{Article.Headline12.Headline}</h3>
        <ul>
          <li>{Article.Headline12.d1}</li>
          <li>{Article.Headline12.d2}</li>
          <li>{Article.Headline12.d3}</li>
        </ul>
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
export default Article2;
