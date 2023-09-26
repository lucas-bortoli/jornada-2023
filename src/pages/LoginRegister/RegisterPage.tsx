import { Button, Card, Link } from "@mui/material";
import styles from "./style.module.css";
import { Email, Key, Phone } from "@mui/icons-material";
import { InputWithIcon } from "./InputWithIcon";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
  const navigate = useNavigate();

  const handleLoginInstead = () => {
    navigate("..");
  }

  return (
    <Card className={styles.card}>
      <h1>Registro</h1>
      <form className={styles.form}>
        <InputWithIcon type="email" label="E-mail" icon={<Email />} />
        <InputWithIcon type="tel" label="Telefone" icon={<Phone />} />
        <div className={styles.horiz}>
          <InputWithIcon type="password" label="Senha" />
          <InputWithIcon type="password" label="Confirmar senha" icon={<Key />} />
        </div>
        <div className={styles.links}>
          <Link onClick={handleLoginInstead}>Ao invés disso, fazer login</Link>
        </div>
        <div className={styles.formActions}>
          <Button variant="contained">Criar conta</Button>
        </div>
      </form>
    </Card>
  );
}
