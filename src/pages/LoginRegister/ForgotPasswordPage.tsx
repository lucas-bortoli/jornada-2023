import { Button, Card, Link } from "@mui/material";
import styles from "./style.module.css";
import { Email } from "@mui/icons-material";
import { InputWithIcon } from "./InputWithIcon";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleLoginInstead = () => {
    navigate("..");
  };

  useDocumentTitle("Recuperação de senha");

  return (
    <Card className={styles.card}>
      <h1>Recuperação de senha</h1>
      <p>
        Digite seu endereço de e-mail. Caso pertença a um usuário, enviaremos um código onde você
        poderá alterar a senha.
      </p>
      <form className={styles.form}>
        <InputWithIcon type="email" label="E-mail" icon={<Email />} />
        <div className={styles.links}>
          <Link onClick={handleLoginInstead}>Ao invés disso, fazer login</Link>
        </div>
        <div className={styles.formActions}>
          <Button variant="contained">Enviar e-mail de confirmação</Button>
        </div>
      </form>
    </Card>
  );
}
