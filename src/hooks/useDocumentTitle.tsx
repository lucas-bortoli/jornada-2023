import { useEffect } from "react";

export function useDocumentTitle(title: string): void {
  useEffect(() => {
    window.document.title = `🍃 ${title} — NIA`;
  }, [title]);
}
