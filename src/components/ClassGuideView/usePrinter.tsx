import { useEffect, useRef } from "react";

export const usePrinter = () => {
  const iframe = useRef<HTMLIFrameElement>();

  useEffect(() => {
    const frame = document.createElement("iframe");

    frame.style.position = "fixed";
    frame.style.top = "300vh";

    document.body.appendChild(frame);

    iframe.current = frame;

    return () => {
      if (!iframe.current) {
        return;
      }

      document.body.removeChild(iframe.current);
    };
  }, []);

  const triggerPrint = (srcElement: HTMLElement, title: string = "Documento sem título") => {
    if (!iframe.current) {
      return false;
    }

    const fDocument = iframe.current.contentDocument!;
    const fHead = fDocument.head;
    const fBody = fDocument.body;

    fHead.innerHTML = "";

    // Copiar estilos do parente
    Array.from(document.head.querySelectorAll("style")).forEach((style) => {
      fHead.appendChild(style.cloneNode(true));
    });

    fBody.innerHTML = srcElement.innerHTML;

    fDocument.title = title;

    iframe.current.contentWindow!.print();
  };

  return { triggerPrint };
};
