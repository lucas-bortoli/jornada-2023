import { Button, Slider } from "@mui/material";
import { Loop } from "@mui/icons-material";
import { useNumber } from "../../../hooks/useNumber";
import styles from "./style.module.css";
import { ToolWindow } from "../../ToolWindow";

interface Properties {
  isOpen: boolean;
  onClose(): void;
}

export function ParameterTuningWindow(props: Properties) {
  const [detailLevel, setDetailLevel] = useNumber({ min: 1, max: 3, initial: 2 });
  const [creativity, setCreativity] = useNumber({ min: 1, max: 3, initial: 2 });
  const [maxLength, setMaxLength] = useNumber({ min: 1, max: 5, initial: 1 });

  const handleCloseOverlay = () => {
    props.onClose();
  };

  const getSliderValue = (e: Event) => {
    return (e.target as unknown as { value: number }).value;
  };

  return (
    <ToolWindow
      label="Alterar parâmetros"
      isOpen={props.isOpen}
      onClose={handleCloseOverlay}
      className={styles.window}
    >
      <fieldset>
        <legend>
          Nível de detalhe: {["visão geral", "equilibrado", "detalhista"][detailLevel - 1]}
        </legend>
        <Slider
          marks
          min={1}
          max={3}
          step={1}
          value={detailLevel}
          onChange={(e) => setDetailLevel(getSliderValue(e))}
        />
      </fieldset>
      <fieldset>
        <legend>
          Criatividade: {["mais preciso", "equilibrado", "mais criativo"][creativity - 1]}
        </legend>
        <Slider
          marks
          min={1}
          max={3}
          step={1}
          value={creativity}
          onChange={(e) => setCreativity(getSliderValue(e))}
        />
      </fieldset>
      <fieldset>
        <legend>
          Comprimento do roteiro:{" "}
          {["sucinto", "menos texto", "normal", "mais texto", "exagerado"][maxLength - 1]}
        </legend>
        <Slider
          marks
          min={1}
          max={5}
          step={1}
          value={maxLength}
          onChange={(e) => setMaxLength(getSliderValue(e))}
        />
      </fieldset>
      <div className={styles.actionButtons}>
        <Button onClick={handleCloseOverlay}>Cancelar</Button>
        <Button variant="contained" startIcon={<Loop />} className={styles.regenerate}>
          Regenerar
        </Button>
      </div>
    </ToolWindow>
  );
}
