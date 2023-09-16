import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { Button, Slider } from "@mui/material";
import { Loop } from "@mui/icons-material";
import { useState } from "react";
import { useNumber } from "../../../hooks/useNumber";

export function ParameterTuningWindow() {
  const navigate = useNavigate();

  const [detailLevel, setDetailLevel] = useNumber({ min: 1, max: 3, initial: 2 });
  const [creativity, setCreativity] = useNumber({ min: 1, max: 3, initial: 2 });
  const [maxLength, setMaxLength] = useNumber({ min: 1, max: 5, initial: 1 });

  const handleCloseOverlay = () => {
    navigate("/roteiro-de-aula/visualizar", { replace: true });
  };

  const getSliderValue = (e: Event) => {
    return (e.target as unknown as { value: number }).value;
  };

  return (
    <div className={styles.overlay} onClick={handleCloseOverlay} tabIndex={0} autoFocus>
      <div className={styles.window} onClickCapture={(e) => e.stopPropagation()}>
        <div className={styles.titleBar}>Alterar parâmetros</div>
        <main>
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
          <Button variant="contained" startIcon={<Loop />} className={styles.regenerate}>
            Regenerar
          </Button>
        </main>
      </div>
    </div>
  );
}
