import { useLoaderData } from "react-router-dom";
import { fetchDataArticle, setComments } from "../serveces/apiProducts";
import styles from "./Article3.module.css";
import Icons from "../components/icons";
import Opinion from "../components/Opinion";
function Article3() {
  const Article = useLoaderData();
  return (
    <div className={styles.Article3}>
      <div>
        <h1>{Article.Headline1.Headline}</h1>
        <img src={Article.img} alt={`Img ${Article.Headline1.imgHeadline}`} />
      </div>
      <div>
        <h3>{Article.Headline2.Headline}</h3>
        <img
          src={Article.Headline2.imgHeadline}
          alt={`Img ${Article.Headline2.Headline}`}
        />
        <ul>
          <li>{Article.Headline2.listHeadline.list1}</li>
          <li>{Article.Headline2.listHeadline.list2}</li>
          <li>{Article.Headline2.listHeadline.list3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline3.Headline}</h3>
        <img
          src={Article.Headline3.imgHeadline}
          alt={`Img ${Article.Headline3.Headline}`}
        />
        <ul>
          <li>{Article.Headline3.listHeadline.list1}</li>
          <li>{Article.Headline3.listHeadline.list2}</li>
          <li>{Article.Headline3.listHeadline.list3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline4.Headline}</h3>
        <img
          src={Article.Headline4.imgHeadline}
          alt={`Img ${Article.Headline4.Headline}`}
        />
        <ul>
          <li>{Article.Headline4.listHeadline.list1}</li>
          <li>{Article.Headline4.listHeadline.list2}</li>
          <li>{Article.Headline4.listHeadline.list3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline5.Headline}</h3>
        <img
          src={Article.Headline5.imgHeadline}
          alt={`Img ${Article.Headline5.Headline}`}
        />
        <ul>
          <li>{Article.Headline5.listHeadline.list1}</li>
          <li>{Article.Headline5.listHeadline.list2}</li>
          <li>{Article.Headline5.listHeadline.list3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline6.Headline}</h3>
        <img
          src={Article.Headline6.imgHeadline}
          alt={`Img ${Article.Headline6.Headline}`}
        />
        <ul>
          <li>{Article.Headline6.listHeadline.list1}</li>
          <li>{Article.Headline6.listHeadline.list2}</li>
          <li>{Article.Headline6.listHeadline.list3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline7.Headline}</h3>
        <ul>
          <li>{Article.Headline7.listHeadline.list1}</li>
          <li>{Article.Headline7.listHeadline.list2}</li>
          <li>{Article.Headline7.listHeadline.list3}</li>
        </ul>
      </div>

      <div>
        <h3>{Article.Headline8.Headline}</h3>
        <p>{Article.Headline8.text1}</p>
        <p>{Article.Headline8.text2}</p>
        <p>{Article.Headline8.text3}</p>
        <p>{Article.Headline8.text4}</p>
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
export default Article3;
