import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

export function InputWithIcon(props: TextFieldProps & { icon?: React.ReactNode }) {
  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: props.icon && <InputAdornment position="end">{props.icon}</InputAdornment>
      }}
    />
  );
}
