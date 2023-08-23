import { useRouteError } from "react-router-dom";
import styles from "./style.module.css";

export const ErrorPage = () => {
  const error = useRouteError() as any;

  return (
    <div className={styles.page}>
      <h1>{error?.message ?? "Houve um erro"}</h1>
      <p>Não foi possível atender a sua solicitação.</p>
      <p className={styles.details}>
        {error.statusText || error.message || JSON.stringify(error, null, "\t")}
      </p>
    </div>
  );
};
