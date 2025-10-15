import styles from "./BoxTextBlog.module.css";
function BoxTextBlog({ data }) {
  return (
    <div className={styles.cantainerText}>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <button>ادامه مطلب</button>
    </div>
  );
}

export default BoxTextBlog;
