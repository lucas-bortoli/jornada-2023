import { Dialog, DialogContent, DialogTitle, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Curiosidades } from "./Curiosidades";

interface Props {
  isLoading: boolean;
}

export function LoadingModal(props: Props) {
  const [isShown, setShown] = useState(props.isLoading);
  const [fakeProgress, setFakeProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFakeProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }

        const diff = Math.random() * 1.1;
        return Math.min(oldProgress + diff, 95);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (props.isLoading === false) {
      setTimeout(() => setShown(false), 1000);
    } else {
      setFakeProgress(0);
      setShown(true);
    }
  }, [props.isLoading]);

  return (
    <Dialog open={isShown} maxWidth="sm">
      <DialogTitle style={{ width: "100vw"}}>Gerando roteiro...</DialogTitle>
      <DialogContent>
        <LinearProgress variant="determinate" value={props.isLoading ? fakeProgress : 100 } />
        <Curiosidades />
      </DialogContent>
    </Dialog>
  );
}
