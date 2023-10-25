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
import { Dialpad, Email, Key, KeyOutlined, Person, Phone } from "@mui/icons-material";
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
          icon={<Person />}
          onChange={(e) => setFormName(e.target.value)}
          value={formName}
        />
        <div className={styles.horiz}>
          <InputWithIcon
            type="email"
            label="E-mail"
            icon={<Email />}
            onChange={(e) => setFormEmail(e.target.value)}
            value={formEmail}
          />
          <InputWithIcon
            type="text"
            label="CPF"
            icon={<Dialpad />}
            onChange={(e) => setFormCpf(e.target.value)}
            value={formCpf}
          />
        </div>
        <InputWithIcon
          type="password"
          label="Senha"
          icon={<KeyOutlined />}
          onChange={(e) => setFormPassword(e.target.value)}
          value={formPassword}
        />
        <div className={styles.links}>
          <Link onClick={handleLoginInstead}>Ao invés disso, fazer login</Link>
        </div>
        <div className={styles.formActions}>
          <Button variant="contained">Criar conta</Button>
        </div>
      </form>
      <Dialog open={false} maxWidth="md">
        <DialogTitle>Carregando, aguarde..</DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.loadingModalContent}>
            <CircularProgress />O cadastro está sendo feito.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
