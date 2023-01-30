import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const PostSelect = ({
  options,
  value,
  defaultValue,
  onChange,
}: {
  options: object[];
  value: string;
  defaultValue: string;
  onChange: any;
}) => {
  return (
    <Select
      color="primary"
      placeholder={defaultValue}
      variant="soft"
      size="lg"
      value={value}
      onChange={(e) => onChange((e?.target as HTMLInputElement).value)}
    >
      {options.map((option) => (
        <Option value={option.value} key={option.value}>
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

export default PostSelect;
