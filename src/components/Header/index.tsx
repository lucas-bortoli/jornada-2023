import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useAuth } from "../../hooks/useAuth";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import { run } from "../../utils/run";

export const Header = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuAnchor = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleGoToLogin = () => {
    navigate("/auth");
  };

  const handleUserMenuClose = () => {
    setUserMenuOpen(false);
  };

  // debugging
  //@ts-expect-error
  window["auth"] = auth;

  return (
    <header className={styles.header}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.logo}>
          🍃 Nav<span>IA</span>
        </div>
      </Link>
      <div className={styles.spacing} />
      <div className={styles.actions}></div>
      <div>
        {auth.loginStatus} {auth.token}
      </div>
      {run(() => {
        switch (auth.loginStatus) {
          case "LOGGED_IN":
            return (
              <button
                className={styles.userAvatar}
                ref={userMenuAnchor}
                onClick={() => setUserMenuOpen(true)}
              />
            );
          case "LOGGED_OUT":
            return (
              <Button variant="contained" onClick={handleGoToLogin}>
                Fazer login
              </Button>
            );
        }
      })}
      <Menu
        MenuListProps={{
          "aria-labelledby": "fade-button"
        }}
        anchorEl={userMenuAnchor.current}
        open={isUserMenuOpen}
        onClose={handleUserMenuClose}
      >
        <MenuItem onClick={handleUserMenuClose}>Meu perfil</MenuItem>
        <MenuItem onClick={handleUserMenuClose}>Sair</MenuItem>
      </Menu>
    </header>
  );
};
