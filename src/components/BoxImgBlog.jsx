import styles from "./BoxImgBlog.module.css";
function BoxImgBlog({ img, alt }) {
  return (
    <>
      <div className={styles.boxImg}>
        <img src={img} alt={`img ${alt}`} />
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

export default BoxImgBlog;
