import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useAuth } from "../../hooks/useAuth";
import { Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";

export const Header = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuAnchor = useRef<HTMLButtonElement | null>(null);

  const auth = useAuth();

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
          🍃 N<span>IA</span>
        </div>
      </Link>
      <div className={styles.spacing} />
      <div className={styles.actions}></div>
      <div>
        {auth.loginStatus} {auth.token}
      </div>
      <button
        className={styles.userAvatar}
        ref={userMenuAnchor}
        onClick={() => setUserMenuOpen(true)}
      />
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
