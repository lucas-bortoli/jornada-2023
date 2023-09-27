import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { ParameterTuningWindow } from "./ParameterTuning";
import { useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function ClassGuideViewPage() {
  const isTuningInitiallyOpen = !useMediaQuery("(max-width: 640px)");
  const [isTuningWindowOpen, setTuningWindowOpen] = useState(isTuningInitiallyOpen);

  const handleOpenParameterAdjustWindow = () => {
    setTuningWindowOpen(!isTuningWindowOpen);
  };

  useDocumentTitle("Visualizar roteiro de aula");

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
