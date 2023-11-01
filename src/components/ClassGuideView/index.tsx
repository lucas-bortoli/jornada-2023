import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { ParameterTuningWindow } from "./ParameterTuning";
import { useRef, useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrinter } from "./usePrinter";
import { LoadingModal } from "./LoadingModal";

export function ClassGuideViewPage() {
  useDocumentTitle("Visualizar roteiro de aula");

  const isTuningInitiallyOpen = !useMediaQuery("(max-width: 640px)");
  const [isTuningWindowOpen, setTuningWindowOpen] = useState(isTuningInitiallyOpen);

  const handleOpenParameterAdjustWindow = () => {
    setTuningWindowOpen(!isTuningWindowOpen);
  };

  const articleRef = useRef<HTMLDivElement | null>(null);
  const { triggerPrint } = usePrinter();

  const handlePrintButton = () => {
    triggerPrint(articleRef.current!);
  };

  return (
    <>
      <main className={classNames(styles.mainContent, "animationFadeInSlide")}>
        <h1>Visualizar roteiro</h1>
        <div className={styles.actionBar}>
          <Button variant="outlined" onClick={handleOpenParameterAdjustWindow}>
            Alterar parâmetros
          </Button>
          <Button variant="contained" onClick={handlePrintButton}>
            Imprimir
          </Button>
        </div>
        <article className={styles.page} ref={articleRef} />
        <ParameterTuningWindow
          isOpen={isTuningWindowOpen}
          onClose={() => setTuningWindowOpen(false)}
        />
      </main>
      <LoadingModal isLoading close={() => alert("ok")} />
    </>
  );
}
