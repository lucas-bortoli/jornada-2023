import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./app.module.css";
import { Outlet } from "react-router-dom";

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
