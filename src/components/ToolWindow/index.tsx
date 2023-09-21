import classNames from "classnames";
import styles from "./styles.module.css";
import { PropsWithChildren } from "react";

interface Properties extends PropsWithChildren {
  label: string;
  isOpen: boolean;
  onClose(): void;
  disableOverlayClick?: boolean;
  className?: string;
}

export function ToolWindow(props: Properties) {
  const handleCloseOverlay = props.onClose;

  return (
    <div
      className={classNames(styles.overlay, props.isOpen && styles.isOpen)}
      onClick={() => !props.disableOverlayClick && handleCloseOverlay()}
      tabIndex={0}
      autoFocus
    >
      <div className={styles.window} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleBar}>{props.label}</div>
        <main className={props.className}>{props.children}</main>
      </div>
    </div>
  );
}
