import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";
function Error() {
  const navigate = useNavigate();
  const err = useRouteError();
  return (
    <div className={styles.err}>
      <p>{(err.data, err.status, err.massage)}</p>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
}

export default Error;
