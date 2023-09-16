import { Grain } from "@mui/icons-material";
import { Button, MenuItem, Select, TextField } from "@mui/material";

import styles from "./style.module.css";
import { ClassTopics } from "./components/ClassTopics";
import classNames from "classnames";
import "../../animations/fadeInSlide.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClassGuideCreatePage = () => {
  const navigate = useNavigate();
  const [classTopics, setClassTopics] = useState<string[]>([]);

  const handleCreateClick = async () => {
    navigate("/roteiro-de-aula/visualizar");
  }

  return (
    <main className={classNames(styles.mainContent, "animationFadeInSlide")}>
      <h1>Criar roteiro de aula</h1>
      <section className={styles.fields}>
        <Select defaultValue={0} className={styles.aulaDiscipina}>
          <MenuItem value={0}>Lógica de Programação</MenuItem>
        </Select>
        <TextField label="Tema geral da aula" variant="outlined" className={styles.aulaTema} />
        <ClassTopics
          className={styles.aulaAssuntos}
          label="Assuntos a serem abordados na aula"
          items={classTopics}
          onChange={(items) => setClassTopics(items)}
        />
      </section>
      <Button variant="contained" startIcon={<Grain />} onClick={handleCreateClick}>
        Gerar roteiro
      </Button>
    </main>
  );
};
