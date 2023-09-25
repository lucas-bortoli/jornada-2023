import { Outlet } from "react-router-dom";
import styles from "./style.module.css";

export function LoginRegisterPageWrapper() {
  return <div className={styles.mainContent}>
    <Outlet />
  </div>;
}
