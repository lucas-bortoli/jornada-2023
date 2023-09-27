import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { ParameterTuningWindow } from "./ParameterTuning";
import { useRef, useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrinter } from "./usePrinter";

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
      <article className={styles.page} ref={articleRef}>
        <h1>Roteiro gerado</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <a href="http://loripsum.net/" target="_blank">
            Quid me istud rogas?
          </a>{" "}
          Quamquam tu hanc copiosiorem etiam soles dicere. Istam voluptatem perpetuam quis potest
          praestare sapienti? Ostendit pedes et pectus. Primum in nostrane potestate est, quid
          meminerimus?{" "}
        </p>

        <p>Quae contraria sunt his, malane? </p>

        <p>
          <a href="http://loripsum.net/" target="_blank">
            Facillimum id quidem est, inquam.
          </a>{" "}
          Dicimus aliquem hilare vivere; Ita multa dicunt, quae vix intellegam. Quis non odit
          sordidos, vanos, leves, futtiles?{" "}
        </p>

        <ol>
          <li>Omnia contraria, quos etiam insanos esse vultis.</li>
          <li>Isto modo, ne si avia quidem eius nata non esset.</li>
          <li>
            Minime id quidem, inquam, alienum, multumque ad ea, quae quaerimus, explicatio tua ista
            profecerit.
          </li>
          <li>Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam.</li>
        </ol>

        <p>
          Ad eas enim res ab Epicuro praecepta dantur. Duo Reges: constructio interrete. Bork Sed
          vos squalidius, illorum vides quam niteat oratio. Non est ista, inquam, Piso, magna
          dissensio. Paria sunt igitur. Facillimum id quidem est, inquam.{" "}
        </p>

        <p>
          Optime, inquam. Quonam, inquit, modo? Bonum incolumis acies: misera caecitas. Urgent tamen
          et nihil remittunt. At enim sequor utilitatem.{" "}
        </p>

        <p>
          Ostendit pedes et pectus. Erat enim Polemonis. At ego quem huic anteponam non audeo
          dicere; Quid de Pythagora?{" "}
        </p>

        <ul>
          <li>Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur.</li>
          <li>At multis se probavit.</li>
          <li>Ut proverbia non nulla veriora sint quam vestra dogmata.</li>
        </ul>

        <blockquote cite="http://loripsum.net">
          Et quis a Stoicis et quem ad modum diceretur, tamen ego quoque exponam, ut perspiciamus,
          si potuerimus, quidnam a Zenone novi sit allatum.
        </blockquote>
      </article>
      <ParameterTuningWindow
        isOpen={isTuningWindowOpen}
        onClose={() => setTuningWindowOpen(false)}
      />
    </main>
  );
}
