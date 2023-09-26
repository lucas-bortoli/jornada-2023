import { Button, Card, Link } from "@mui/material";
import styles from "./style.module.css";
import { AccountCircle, Key } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { InputWithIcon } from "./InputWithIcon";

export function LoginPage() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("./esqueci-senha");
  }

  const handleRegisterInstead = () => {
    navigate("./registrar");
  }

  return (
    <Card className={styles.card}>
      <h1>Login</h1>
      <form className={styles.form}>
        <InputWithIcon label="E-mail ou telefone" icon={<AccountCircle />} />
        <InputWithIcon type="password" label="Senha" icon={<Key />} />
        <div className={styles.links}>
          <Link onClick={handleRegisterInstead}>Não tenho cadastro ainda</Link>
          <Link onClick={handleForgotPassword}>Esqueci minha senha</Link>
        </div>
        <div className={styles.formActions}>
          <Button variant="contained">Entrar</Button>
        </div>
      </form>
    </Card>
  );
}
