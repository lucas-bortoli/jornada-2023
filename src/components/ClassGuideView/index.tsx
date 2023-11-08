import classNames from "classnames";
import styles from "./style.module.css";
import { Button } from "@mui/material";
import { ParameterTuningWindow } from "./ParameterTuning";
import { useEffect, useRef, useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrinter } from "./usePrinter";
import { LoadingModal } from "./LoadingModal";
import { useCreateLessonPlanMutation } from "../../api/apiSlice";
import { useAuth } from "../../hooks/useAuth";
import  {marked} from "marked";

export function ClassGuideViewPage() {
  useDocumentTitle("Visualizar roteiro de aula");

  const auth = useAuth();

  const isTuningInitiallyOpen = !useMediaQuery("(max-width: 640px)");
  const [isTuningWindowOpen, setTuningWindowOpen] = useState(false);

  const handleOpenParameterAdjustWindow = () => {
    setTuningWindowOpen(!isTuningWindowOpen);
  };

  const articleRef = useRef<HTMLDivElement | null>(null);
  const [articleContent, setArticleContent] = useState(<></>);
  const { triggerPrint } = usePrinter();

  const handlePrintButton = () => {
    triggerPrint(articleRef.current!);
  };

  const [triggerCreateLessonPlanRequest, lessonPlanStatus] = useCreateLessonPlanMutation();

  const createLessonPlan = async () => {
    const generatedPlan = await triggerCreateLessonPlanRequest({
      token: auth.token!,
      syllabus:
        "A disciplina apresenta conceitos de análise e projeto orientados a objetos e a Linguagem de modelagem unificada (UML)",
      content:
        "Introdução a  Análise e Projeto Orientado a Objetos; Casos de Uso; Detalhamento do caso de uso; UML Unified Modeling Language e seus diagramas;  Análise Orientada a Objetos Modelo estático do sistema Modelo dinâmico do sistema3319",
      classesQuantity: 20,
      detailAmount: 1,
      creativityAmout: 2,
      maxLenght: 100
    }).unwrap();

    setTuningWindowOpen(isTuningInitiallyOpen);

    setArticleContent(<>
      <h1>Plano de aula</h1>
      {generatedPlan.planArr.map((plan, i) => {
        return <section key={i} className={styles.pageClass}>
          <h3>{plan.theme}</h3>
          <i>{plan.duration}</i>
          <h5>Objetivo</h5>
          {plan.objectives && <ul>
            {plan.objectives.map((objective, i) => {
              return <li key={i}>{objective}</li>
            })}
          </ul>}
          <h5>Conteúdo da aula</h5>
          {plan.content && <ul>
            {plan.content.map((content, i) => {
              return <li key={i}>{content}</li>
            })}
          </ul>}
        </section>
      })}
    </>);
  };

  useEffect(() => {
    createLessonPlan();
  }, []);

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
        <article className={styles.page} ref={articleRef}>{articleContent}</article>
        <ParameterTuningWindow
          isOpen={isTuningWindowOpen}
          onClose={() => setTuningWindowOpen(false)}
          onRegenerateClick={createLessonPlan}
        />
      </main>
      <LoadingModal isLoading={lessonPlanStatus.isUninitialized || lessonPlanStatus.isLoading} />
    </>
  );
}
