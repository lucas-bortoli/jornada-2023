import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ParameterTuningWindow } from "./ParameterTuning";
import { useState } from "react";

export function ClassGuideViewPage() {
  const navigate = useNavigate();
  const [isTuningWindowOpen, setTuningWindowOpen] = useState(false);

  const handleOpenParameterAdjustWindow = () => {
    setTuningWindowOpen(true);
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
      <ParameterTuningWindow
        isOpen={isTuningWindowOpen}
        onClose={() => setTuningWindowOpen(false)}
      />
    </main>
  );
}
