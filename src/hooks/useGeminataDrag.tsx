/**
 * Código reaproveitado do projeto GeminataOS: https://github.com/lucas-bortoli/geminata-os/blob/master/src/System/UI/Window/useDrag.tsx
 * Levemente modificado para atender às necessidades deste projeto.
 **/

import { MutableRefObject, useEffect, useState } from "react";

type RefHtmlMaybe = MutableRefObject<HTMLDivElement | null>;

function setElementPosition(element: HTMLDivElement, x: number | "center", y: number | "center") {
  const box = element.getBoundingClientRect();

  const resolvedX = x === "center" ? innerWidth / 2 - box.width / 2 : x;
  const resolvedY = y === "center" ? innerHeight / 2 - box.height / 2 : y;

  // We only want movement in the horizontal axis
  element.style.left = `${resolvedX}px`;
  element.style.top = `${resolvedY}px`;
  element.style.bottom = "unset";
  element.style.right = "unset";
}

export function useGeminataDrag(
  movableElement: RefHtmlMaybe,
  dragArea: RefHtmlMaybe = movableElement
) {
  const [dragState, setDragState] = useState<null | {
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
  }>(null);

  useEffect(() => {
    if (!movableElement.current || !dragArea.current) {
      return;
    }

    function onMouseDown(event: MouseEvent) {
      if (event.target !== dragArea.current) {
        return;
      }

      event.preventDefault();

      const rect = movableElement.current!.getBoundingClientRect();
      console.log(event.clientY, rect.y);
      setDragState({
        x: event.clientX,
        y: event.clientY,
        offsetX: event.clientX - rect.x,
        offsetY: event.clientY - rect.y
      });
    }

    function onMouseUp(event: MouseEvent) {
      if (dragState !== null) {
        event.stopImmediatePropagation();
        event.preventDefault();
        setDragState(null);
      }
    }

    function onMouseMove(event: MouseEvent) {
      const { pageX: x, clientY: y } = event;

      if (dragState === null || !movableElement.current) {
        return;
      }

      setElementPosition(movableElement.current, x - dragState.offsetX, y - dragState.offsetY);
    }

    if (dragState === null) document.body.addEventListener("mousedown", onMouseDown);
    if (dragState !== null) document.body.addEventListener("mouseup", onMouseUp);
    if (dragState !== null) document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousedown", onMouseDown);
      document.body.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, [dragState]);

  const setPosition = (x: number | "center", y: number | "center") => {
    const element = movableElement.current;

    if (!element) {
      return;
    }

    setElementPosition(element, x, y);
  };

  return { setPosition, dragState };
}
