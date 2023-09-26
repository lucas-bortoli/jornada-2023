import classNames from "classnames";
import styles from "./styles.module.css";
import { PropsWithChildren, useRef } from "react";
import { useGeminataDrag } from "../../hooks/useGeminataDrag";
import { useGeminataResize } from "../../hooks/useGeminataResize";
import { createPortal } from "react-dom";
import { useGeminataStacking } from "../../hooks/useGeminataStacking";

interface Properties extends PropsWithChildren {
  label: string;
  isOpen: boolean;
  onClose(): void;
  className?: string;
}

export function ToolWindow(props: Properties) {
  const titlebarRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const resizeAreaRef = useRef<HTMLDivElement>(null);

  useGeminataDrag(windowRef, titlebarRef);
  useGeminataResize(windowRef, resizeAreaRef);
  useGeminataStacking(windowRef);

  return createPortal(
    <div
      className={classNames(styles.window, props.isOpen && styles.isOpen)}
      onClick={(e) => e.stopPropagation()}
      ref={windowRef}
    >
      <div className={styles.titleBar} ref={titlebarRef}>
        {props.label}
        <div className={styles.buttons}>
          <button className={styles.close} onClick={props.onClose}></button>
        </div>
      </div>
      <main className={props.className}>{props.children}</main>
      <div className={styles.resizeBorder} ref={resizeAreaRef}></div>
    </div>,
    document.body
  );
}
