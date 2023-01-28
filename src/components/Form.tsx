import * as React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

const Form = () => {
  return (
    <div className="form">
      <Card variant="outlined" sx={{ maxWidth: 945 }} className="post">
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
        <Button size="lg" className="form_button" fullWidth>
          Create
        </Button>
      </Card>
    </div>
  );
};

export default Form;
