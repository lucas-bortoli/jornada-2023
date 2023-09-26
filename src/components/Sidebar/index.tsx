import { useState } from "react";
import styles from "./style.module.css";
import { ToolWindow } from "../ToolWindow";

export const Sidebar = () => {
  const [isHelpOpen, setHelpOpen] = useState(false);

  return (
    <div className={styles.sidebar}>
      <button className={styles.helpButton} onClick={() => setHelpOpen(!isHelpOpen)}>
        ?
      </button>
      <ToolWindow
        label="Ajuda"
        isOpen={isHelpOpen}
        onClose={() => setHelpOpen(false)}
        className={styles.helpWindow}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
          return (
            <details key={el} className={styles.helpTopic}>
              <summary>Teste {el}</summary>
              // TODO
            </details>
          );
        })}
      </ToolWindow>
    </div>
  );
};
