import { Dialog, DialogContent, DialogTitle, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Curiosidades } from "./Curiosidades";

interface Props {
  isLoading: boolean;
  close: () => void;
}

export function LoadingModal(props: Props) {
  const [fakeProgress, setFakeProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFakeProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 1;
        return Math.min(oldProgress + diff, 95);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (props.isLoading === false) {
      setTimeout(() => props.close(), 1000);
    }
  }, [props.isLoading]);

  return (
    <Dialog open={props.isLoading} maxWidth="sm">
      <DialogTitle style={{ width: "100vw"}}>Gerando roteiro...</DialogTitle>
      <DialogContent>
        <LinearProgress variant="determinate" value={props.isLoading ? fakeProgress : 100 } />
        <Curiosidades />
      </DialogContent>
    </Dialog>
  );
}
