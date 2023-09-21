import { Outlet } from "react-router-dom";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        <Sidebar />
        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
