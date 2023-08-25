import { Grain } from "@mui/icons-material";
import { Box, Button, Chip, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";

import styles from "./style.module.css";
import { ChipSelect } from "./components/ChipSelect";
import classNames from "classnames";
import "../../animations/fadeInSlide.css";

export const ClassGuidePage = () => {
  return (
    <main className={classNames(styles.mainContent, "animationFadeInSlide")}>
      <h1>Criar roteiro de aula</h1>
      <section className={styles.fields}>
        <Select defaultValue={0} className={styles.aulaDiscipina}>
          <MenuItem value={0}>Lógica de Programação</MenuItem>
        </Select>
        <TextField label="Tema geral da aula" variant="outlined" className={styles.aulaTema} />
        <ChipSelect
          className={styles.aulaAssuntos}
          label="Assuntos a serem abordados na aula"
          items={["A", "B", "C"]}
          onChange={() => {}}
        />
      </section>
      <Button variant="contained" startIcon={<Grain />}>
        Gerar roteiro
      </Button>
    </main>
  );
};
