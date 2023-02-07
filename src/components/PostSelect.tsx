import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IOption {
  value?: string;
  name?: string;
}

const PostSelect = ({
  options,
  value,
  defaultValue,
  change,
}: {
  options: object[];
  value: string;
  defaultValue: string;
  change: any;
}) => {
  const changeSelect = (e: any) => {
    change(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="post-list-select">Sort</InputLabel>
        <Select
          labelId="post-list-select-label"
          id="post-list-select-simple-select"
          value={value}
          label="Sort"
          onChange={changeSelect}
        >
          {options.map((option: IOption) => (
            <MenuItem value={option.value} key={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PostSelect;
