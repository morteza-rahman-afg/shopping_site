import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import styles from "./Blog.module.css";
import QuickAccess from "../components/QuickAccess";
import BoxImgBlog from "../components/BoxImgBlog";
import BoxTextBlog from "../components/BoxTextBlog";
import TitlePage from "../ui/TitlePage";
import { fetchDataArticles } from "../serveces/apiProducts";

function Blog() {
  const Articles = useLoaderData();

  const Location = useLocation();
  const shoeLink = Location.pathname === "/blog";

  return (
    <div className={styles.containerBlog}>
      <TitlePage>بلاگ</TitlePage>
      <div className={styles.content}>
        <Outlet />
        {shoeLink && (
          <div className={styles.boxLink}>
            {Articles?.map((Article, i) => (
              <Link
                className={styles.link}
                key={Article.id}
                to={`${Article.name}/${Article.id}`}
              >
                <BoxImgBlog img={Article.img} alt={Article.name} />
                <BoxTextBlog
                  data={{
                    title: Article.Headline1.Headline,
                    text: Article.Headline2.Headline,
                  }}
                />
              </Link>
            ))}
          </div>
        )}
        <QuickAccess data={Articles} />
      </div>
    </div>
  );
}
export async function loader() {
  const data = await fetchDataArticles();
  return data;
}
export default Blog;
