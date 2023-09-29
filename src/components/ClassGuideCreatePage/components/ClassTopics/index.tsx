import {
  Chip,
  IconButton,
  Paper,
} from "@mui/material";
import styles from "./style.module.css";
import classNames from "classnames";
import { useState } from "react";
import { CustomTopicModal } from "./CustomTopicModal";
import { Add } from "@mui/icons-material";

interface Props {
  label: string;
  className?: string;
  items: string[];
  onChange: (items: string[]) => void;
}

export const ClassTopics = (props: Props) => {
  const [isCustomTopicOpen, setCustomTopicOpen] = useState(false);

  const handleNewCustomTopic = (topic: string) => {
    props.onChange([...props.items, topic]);
  };

  const handleDelete = (topic: string) => {
    props.onChange(props.items.filter((item) => item !== topic));
  };

  return (
    <fieldset className={classNames(props.className, styles.fieldSet)}>
      <label>{props.label}</label>
      <Paper variant="outlined" className={styles.chipList}>
        {props.items.map((topic) => (
          <Chip key={topic} label={topic} onDelete={() => handleDelete(topic)} />
        ))}
        <IconButton
          size="small"
          aria-label="Adicionar assunto de aula"
          onClick={() => setCustomTopicOpen(true)}
        >
          <Add />
        </IconButton>
      </Paper>
      <CustomTopicModal
        isOpen={isCustomTopicOpen}
        onClose={() => setCustomTopicOpen(false)}
        onConfirm={handleNewCustomTopic}
      />
    </fieldset>
  );
};
