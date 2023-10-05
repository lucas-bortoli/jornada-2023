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
import { api } from "../../api/api";

export function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<null | "PENDING" | "SUCCESS" | "ERROR">(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useDocumentTitle("Login");

  const handleForgotPassword = () => {
    navigate("./esqueci-senha");
  };

  const handleRegisterInstead = () => {
    navigate("./registrar");
  };

  const handleLoginSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    setLoginState("ERROR");

    try {
      const { token } = await api.exchangeCredentialsForToken({ username, password });
      const success = await auth.login(token);

      setLoginState(success ? "SUCCESS" : "ERROR");
    } catch (error) {
      console.error("Falha no login", error);
      setLoginState("ERROR");
    }
  };

  useEffect(() => {
    if (auth.loginStatus === "LOGGED_IN") {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [auth.loginStatus]);

  return (
    <Card className={styles.card}>
      <h1>Bem-vindo de volta</h1>
      {run(() => {
        if (auth.loginStatus === "LOGGED_IN") {
          return <p>O login foi realizado. Você será redirecionado em instantes...</p>;
        }

        return (
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            {loginState === "ERROR" && <p className={styles.loginError}>As informações estão incorretas.</p>}
            <InputWithIcon
              label="E-mail ou telefone"
              icon={<AccountCircle />}
              error={loginState === "ERROR"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputWithIcon
              type="password"
              label="Senha"
              icon={<Key />}
              error={loginState === "ERROR"}
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
                disabled={auth.loginStatus === "PENDING"}
                loading={auth.loginStatus === "PENDING"}
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
