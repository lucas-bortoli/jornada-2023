import { MutableRefObject, useEffect } from "react";

type RefHtmlMaybe = MutableRefObject<HTMLDivElement  | null>;

// Sei que devo usar a ContextApi para isso, mas por enquanto tá OK
let zIndex = 200;

function increaseZ(el: HTMLElement) {
  el.style.zIndex = `${++zIndex}`;
}

export function useGeminataStacking(wind: RefHtmlMaybe) {
  useEffect(() => {
    function handleMouseDown() {
      wind.current && increaseZ(wind.current);
    }

    if (wind.current) wind.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      if (wind.current) wind.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [wind]);

  const bringToTop = () => {
    wind.current && increaseZ(wind.current);
  }

  return { bringToTop };
}
