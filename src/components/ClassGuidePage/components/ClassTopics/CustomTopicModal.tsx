import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from "@mui/material";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onConfirm: (topic: string) => void;
  onClose: () => void;
}

export const CustomTopicModal = (props: Props) => {
  const [topic, setTopic] = useState("");

  const handleClose = () => {
    setTopic("");
    props.onClose();
  };

  const handleConfirm = () => {
    props.onConfirm(topic);
    handleClose();
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <DialogTitle>Definir assunto</DialogTitle>
      <DialogContent>
        <DialogContentText>Insira o assunto a ser abordado na aula.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Assunto da aula (ex. estruturas de repetição)"
          type="text"
          fullWidth
          variant="standard"
          value={topic}
          onChange={(event) => setTopic(event.currentTarget.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleConfirm} disabled={topic.length === 0}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
