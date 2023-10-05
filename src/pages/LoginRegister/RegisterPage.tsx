import {
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link
} from "@mui/material";
import styles from "./style.module.css";
import { Dialpad, Email, Key, Phone } from "@mui/icons-material";
import { InputWithIcon } from "./InputWithIcon";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useState } from "react";

export function RegisterPage() {
  const navigate = useNavigate();

  const [formName, setFormName] = useState("");
  const [formCpf, setFormCpf] = useState("");
  const [formTel, setFormTel] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formPasswordConfirm, setFormPasswordConfirm] = useState("");

  const handleLoginInstead = () => {
    navigate("..");
  };

  useDocumentTitle("Registro");

  return (
    <Card className={styles.card}>
      <h1>Registro</h1>
      <form className={styles.form}>
        <InputWithIcon
          type="text"
          label="Nome completo"
          icon={<Email />}
          onChange={(e) => setFormName(e.target.value)}
          value={formName}
        />
        <div className={styles.horiz}>
          <InputWithIcon
            type="text"
            label="CPF"
            icon={<Dialpad />}
            onChange={(e) => setFormCpf(e.target.value)}
            value={formCpf}
          />
          <InputWithIcon
            type="tel"
            label="Telefone"
            icon={<Phone />}
            onChange={(e) => setFormTel(e.target.value)}
            value={formTel}
          />
        </div>
        <InputWithIcon
          type="email"
          label="E-mail"
          icon={<Email />}
          onChange={(e) => setFormEmail(e.target.value)}
          value={formEmail}
        />
        <div className={styles.horiz}>
          <InputWithIcon
            type="password"
            label="Senha"
            onChange={(e) => setFormPassword(e.target.value)}
            value={formPassword}
          />
          <InputWithIcon
            type="password"
            label="Confirmar senha"
            icon={<Key />}
            onChange={(e) => setFormPasswordConfirm(e.target.value)}
            value={formPasswordConfirm}
          />
        </div>
        <div className={styles.links}>
          <Link onClick={handleLoginInstead}>Ao invés disso, fazer login</Link>
        </div>
        <div className={styles.formActions}>
          <Button variant="contained">Criar conta</Button>
        </div>
      </form>
      <Dialog open={true} maxWidth="md">
        <DialogTitle>Carregando, aguarde..</DialogTitle>
        <DialogContent >
          <DialogContentText className={styles.loadingModalContent}>
            <CircularProgress />
            O cadastro está sendo feito.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
