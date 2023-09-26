/**
 * Código reaproveitado do projeto GeminataOS: https://github.com/lucas-bortoli/geminata-os/blob/master/src/System/UI/Window/useDrag.tsx
 * Levemente modificado para atender às necessidades deste projeto.
**/

import { MutableRefObject, useEffect, useState } from "react";

type RefHtmlMaybe = MutableRefObject<HTMLDivElement  | null>;

export function useGeminataDrag(movableElement: RefHtmlMaybe, dragArea: RefHtmlMaybe = movableElement) {
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
      console.log(event.clientY, rect.y)
      setDragState({
        x: event.clientX,
        y: event.clientY,
        offsetX: event.clientX - rect.x,
        offsetY: event.clientY - rect.y,
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

      const element = movableElement.current;

      // We only want movement in the horizontal axis
      element.style.left = `${x - dragState.offsetX}px`;
      element.style.top = `${y - dragState.offsetY}px`;
      element.style.bottom = "unset";
      element.style.right = "unset";
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

  return dragState;
}
