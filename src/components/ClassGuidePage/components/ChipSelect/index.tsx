import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import styles from "./style.module.css";
import classNames from "classnames";

interface Props {
  label: string;
  className?: string;
  items: string[];
  onChange: (items: string[]) => void;
}

export const ChipSelect = (props: Props) => {
  return (
    <fieldset className={classNames(props.className, styles.fieldSet)}>
      <label>{props.label}</label>
      <Select
        multiple
        value={props.items}
        onChange={(ev) =>
          props.onChange(
            Array.isArray(ev.target.value) ? ev.target.value : ev.target.value.split(",")
          )
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value.repeat(15)} />
            ))}
          </Box>
        )}
      >
        {props.items.map((item, index) => (
          <MenuItem key={item} value={item} divider={index === props.items.length - 1} >
            {item}
          </MenuItem>
        ))}
        <MenuItem>Definir assunto...</MenuItem>
      </Select>
    </fieldset>
  );
};
