import * as React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <div className="form">
      <TextField
        className="form_input"
        fullWidth
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        className="form_input"
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <Button
        size="large"
        className="form_button"
        fullWidth
        color="primary"
        variant="contained"
      >
        Create
      </Button>
    </div>
  );
};

export default Form;
