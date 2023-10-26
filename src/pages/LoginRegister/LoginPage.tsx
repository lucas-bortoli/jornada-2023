import { Card, Link } from "@mui/material";
import styles from "./style.module.css";
import { AccountCircle, Key } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { InputWithIcon } from "./InputWithIcon";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useAuth } from "../../hooks/useAuth";
import { FormEventHandler, useEffect, useState } from "react";
import { LoadingButton } from "../../components/LoadingButton";
import { run } from "../../utils/run";
import { useLoginMutation } from "../../api/apiSlice";

export function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [ triggerLogin, loginStatus ] = useLoginMutation();

  useDocumentTitle("Login");

  const handleForgotPassword = () => {
    navigate("./esqueci-senha");
  };

  const handleRegisterInstead = () => {
    navigate("./registrar");
  };

  const handleLoginSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const { token } = await triggerLogin({ username, password }).unwrap();

      auth.setToken(token);
    } catch (error) {
      console.error("Falha no login", error);
    }
  };

  useEffect(() => {
    if (loginStatus.isSuccess) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [loginStatus.isSuccess]);

  return (
    <Card className={styles.card}>
      <h1>Bem-vindo de volta</h1>
      {run(() => {
        if (loginStatus.isSuccess) {
          return <p>O login foi realizado. Você será redirecionado em instantes...</p>;
        }

        return (
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            {loginStatus.isError && <p className={styles.loginError}>As informações estão incorretas.</p>}
            <InputWithIcon
              label="E-mail ou telefone"
              icon={<AccountCircle />}
              error={loginStatus.isError}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputWithIcon
              type="password"
              label="Senha"
              icon={<Key />}
              error={loginStatus.isError}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.links}>
              <Link onClick={handleRegisterInstead}>Não tenho cadastro ainda</Link>
              <Link onClick={handleForgotPassword}>Esqueci minha senha</Link>
            </div>
            <div className={styles.formActions}>
              <LoadingButton
                variant="contained"
                onClick={handleLoginSubmit}
                disabled={loginStatus.isLoading}
                loading={loginStatus.isLoading}
              >
                Entrar
              </LoadingButton>
            </div>
          </form>
        );
      })}
    </Card>
  );
}
