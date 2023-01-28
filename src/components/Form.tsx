import * as React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "../assets/style/form.css";

const Form = () => {
  return (
    <div>
      <TextField
        className="form-input"
        fullWidth
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        className="form-input"
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <Button
        size="large"
        className="form-button"
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
