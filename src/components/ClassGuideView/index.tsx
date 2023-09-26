import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { ParameterTuningWindow } from "./ParameterTuning";
import { useState } from "react";

export function ClassGuideViewPage() {
  const [isTuningWindowOpen, setTuningWindowOpen] = useState(true);

  const handleOpenParameterAdjustWindow = () => {
    setTuningWindowOpen(!isTuningWindowOpen);
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
