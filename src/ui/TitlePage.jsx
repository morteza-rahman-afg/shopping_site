import styles from "./TitlePage.module.css";
function TitlePage({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default TitlePage;
