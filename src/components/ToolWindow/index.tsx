import classNames from "classnames";
import styles from "./styles.module.css";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useGeminataDrag } from "../../hooks/useGeminataDrag";
import { useGeminataResize } from "../../hooks/useGeminataResize";
import { createPortal } from "react-dom";
import { useGeminataStacking } from "../../hooks/useGeminataStacking";
import { useEffectOnce } from "../../hooks/useEffectOnce";

interface Properties extends PropsWithChildren {
  label: string;
  isOpen: boolean;
  onClose(): void;
  className?: string;
  centered?: boolean;
  x?: number | "center",
  y?: number | "center"
}

export function ToolWindow(props: Properties) {
  const titlebarRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const resizeAreaRef = useRef<HTMLDivElement>(null);

  const { setPosition } = useGeminataDrag(windowRef, titlebarRef);
  useGeminataResize(windowRef, resizeAreaRef);
  const { bringToTop } = useGeminataStacking(windowRef);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (props.isOpen) {
      bringToTop();
    }
  }, [props.isOpen]);

  useEffectOnce(() => {
    setReady(true);
  });

  useEffect(() => {
    if (props.x === undefined || props.y === undefined) {
      return;
    }

    setPosition(props.x, props.y);
  }, [props.x, props.y]);

  return createPortal(
    <div
      className={classNames(styles.window, props.isOpen && ready && styles.isOpen)}
      onClick={(e) => e.stopPropagation()}
      ref={windowRef}
    >
      <div className={styles.titleBar} ref={titlebarRef}>
        {props.label}
        <div className={styles.buttons}>
          <button className={styles.close} onClick={props.onClose}></button>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <main className={props.className}>{props.children}</main>
      </div>
      <div className={styles.resizeBorder} ref={resizeAreaRef}></div>
    </div>,
    document.body
  );
}
