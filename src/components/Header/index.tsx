import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import styles from './style.module.css';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const auth = useAuth();

  // debugging
  //@ts-expect-error
  window["auth"] = auth;

  return (
    <header className={styles.header}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.logo}>
          🍃 N<span>IA</span>
        </div>
      </Link>
      <div className={styles.spacing} />
      <div className={styles.actions}>
        <Button>Configurações</Button>
      </div>
      <div>
        {auth.loginStatus} {auth.token}
      </div>
      <div className={styles.userAvatar} />
    </header>
  );
};
