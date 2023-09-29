import { Button, Card, IconButton } from "@mui/material";
import styles from "./style.module.css";
import { ArrowBack, Dialpad, Email } from "@mui/icons-material";
import { InputWithIcon } from "./InputWithIcon";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useState } from "react";

type Stages = "inputEmail" | "inputCode" | "success" | "error";

export function ForgotPasswordPage() {
  const [stage, setStage] = useState<Stages>("inputEmail");
  const navigate = useNavigate();

  const handleLoginInstead = () => {
    navigate("..");
  };

  useDocumentTitle("Recuperação de senha");

  if (stage === "inputEmail") {
    return (
      <Card className={styles.card}>
        <form className={styles.form} key={stage}>
          <h1>
            <IconButton aria-label="Voltar" onClick={handleLoginInstead}>
              <ArrowBack />
            </IconButton>
            Recuperação de senha
          </h1>
          <p>
            Digite seu endereço de e-mail. Caso pertença a um usuário, enviaremos um código onde
            você poderá alterar a senha.
          </p>
          <InputWithIcon type="email" label="E-mail" icon={<Email />} />
          <div className={styles.formActions}>
            <Button variant="contained" onClick={() => setStage("inputCode")}>
              Enviar confirmação
            </Button>
          </div>
        </form>
      </Card>
    );
  } else if (stage === "inputCode") {
    return (
      <Card className={styles.card}>
        <form className={styles.form} key={stage}>
          <h1>
            <IconButton aria-label="Voltar" onClick={() => setStage("inputEmail")}>
              <ArrowBack />
            </IconButton>
            Recuperação de senha
          </h1>
          <p>
            Enviamos um código ao e-mail <strong></strong>. Digite-o aqui.
          </p>
          <InputWithIcon
            type="number"
            placeholder="000000"
            icon={<Dialpad />}
            className={styles.inputConfirmCode}
          />
          <div className={styles.formActions}>
            <Button variant="contained">Verificar código</Button>
          </div>
        </form>
      </Card>
    );
  }
}
