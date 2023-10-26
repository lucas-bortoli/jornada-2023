import { Menu, MenuItem } from "@mui/material";
import { useAuth } from "../../../hooks/useAuth";
import { useRef, useState } from "react";
import styles from "../style.module.css";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "../../LoadingButton";
import { useGetCurrentUserQuery } from "../../../api/apiSlice";

export const UserIcon = () => {
  const userMenuAnchor = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const { data: user, ...userReq } = useGetCurrentUserQuery({ token: auth.token ?? "nothing here!!!" });

  const handleMenuMyProfile = () => {
    setMenuOpen(false);
  };

  const handleMenuLogout = () => {
    auth.logout();
    setMenuOpen(false);
  };

  const handleLoginButtonClick = () => {
    navigate("/auth");
  };

  if (userReq.isSuccess) {
    return (
      <>
        <button
          className={styles.userAvatar}
          ref={userMenuAnchor}
          onClick={() => setMenuOpen(true)}
        />
        <Menu
          MenuListProps={{
            "aria-labelledby": "fade-button"
          }}
          anchorEl={userMenuAnchor.current}
          open={isMenuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <MenuItem onClick={handleMenuMyProfile}>Meu perfil</MenuItem>
          <MenuItem onClick={handleMenuLogout}>Sair</MenuItem>
        </Menu>
      </>
    );
  } else {
    return (
      <LoadingButton
        variant="outlined"
        onClick={handleLoginButtonClick}
        size="small"
        disabled={userReq.isLoading}
        loading={userReq.isLoading}
      >
        Fazer login
      </LoadingButton>
    );
  }
};
