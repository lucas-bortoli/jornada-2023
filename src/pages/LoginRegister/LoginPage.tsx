import { Button, Card, InputAdornment, Link, TextField } from "@mui/material";
import styles from "./style.module.css";
import { useState } from "react";
import { AccountCircle, Key } from "@mui/icons-material";

export function LoginPage() {
  const [email, setEmail] = useState("");

  const resetPassword = () => {
    let newPw = prompt(`Qual a senha nova para o usuário ${email}?`);

    alert(`A senha de ${email} foi alterada para ${newPw}`);
  };

  return (
    <Card className={styles.card}>
      <h1>Login</h1>
      <form className={styles.form}>
        <TextField
          label="E-mail ou telefone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
        <TextField
          type="password"
          label="Senha"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            )
          }}
        />
        <div className={styles.links}>
          <Link onClick={resetPassword}>Não tenho cadastro ainda</Link>
          <Link onClick={resetPassword}>Esqueci minha senha</Link>
        </div>
        <div className={styles.formActions}>
          <Button variant="contained">Entrar</Button>
        </div>
      </form>
    </Card>
  );
}
