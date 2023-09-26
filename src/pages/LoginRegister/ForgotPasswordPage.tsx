import { Button, Card, Link } from "@mui/material";
import styles from "./style.module.css";
import { Email, Key, Phone } from "@mui/icons-material";
import { InputWithIcon } from "./InputWithIcon";
import { useNavigate } from "react-router-dom";

export function ForgotPasswordPage() {
  const navigate = useNavigate();

  const handleLoginInstead = () => {
    navigate("..");
  };

  return (
    <Card className={styles.card}>
      <h1>Recuperação de senha</h1>
      <p>
        Hmph, você esqueceu sua senha, não é? Baka! Não acredito que você fez isso, mas não se
        preocupe, eu não tenho escolha a não ser ajudar a recuperá-la.
      </p>
      <p>
        Siga em frente e digite seu endereço de e-mail, sua senha perdida está por aí em algum
        lugar, mas não espere que eu vá facilitar para você! E não se atreva a criar outra senha tão
        complicada da próxima vez, ou vou fazer você se arrepender! 💢🔍
      </p>
      <p>
        Agora, vá em frente e faça o que precisa ser feito. Não pense que estou fazendo isso porque
        quero, é apenas uma obrigação! 😠
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
