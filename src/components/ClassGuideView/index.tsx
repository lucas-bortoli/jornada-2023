import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export function ClassGuideViewPage() {
  const navigate = useNavigate();

  const handleOpenParameterAdjustWindow = () => {
    navigate("/roteiro-de-aula/visualizar/ajustes", { replace: true });
  };

  return (
    <main className={classNames(styles.mainContent, "animationFadeInSlide")}>
      <h1>Visualizar roteiro</h1>
      <div className={styles.actionBar}>
        <Button variant="outlined" onClick={handleOpenParameterAdjustWindow}>
          Alterar parâmetros
        </Button>
        <Button variant="contained">Exportar para PDF</Button>
      </div>
      <article className={styles.page}>
        <h1>Roteiro gerado</h1>
      </article>
      <Outlet />
    </main>
  );
}
