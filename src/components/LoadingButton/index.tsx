import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface Props extends ButtonProps {
  loading?: boolean;
}

export const LoadingButton = (props: Props) => {
  const icon = props.loading ? <CircularProgress size="1em" color="inherit" /> : props.startIcon;

  return <Button {...props} startIcon={icon}>{props.children}</Button>;
};
