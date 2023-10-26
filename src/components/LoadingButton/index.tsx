import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface Props extends ButtonProps {
  loading?: boolean;
}

export const LoadingButton = (props: Props) => {
  const icon = props.loading ? <CircularProgress size="1em" color="inherit" /> : props.startIcon;

  // loading undefined to disable error for unknown html attribute
  return <Button {...props} {...{loading: undefined}} startIcon={icon}>{props.children}</Button>;
};
