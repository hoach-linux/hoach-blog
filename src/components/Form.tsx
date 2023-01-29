import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

const Form = ({ create, title }: { create: any, title: string }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [isLoading, setIsloading] = useState(false);

  const addNewPost = () => {
    if (post.title.length >= 1 && post.body.length >= 1) {
      const newPost = {
        ...post,
        id: Date.now(),
      };
      setIsloading(true);

      setTimeout(() => {
        create(newPost);

        setIsloading(false);
      }, 1000);

      setPost({ title: "", body: "" });
    }
  };

  return (
    <div className="form">
      <Card variant="outlined" sx={{ maxWidth: 945 }} className="post">
        <Typography variant="h3" component="h3" className="paragraph">
          {title}
        </Typography>
        <TextField
          value={post.title}
          required
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="form_input"
          fullWidth
          id="outlined-basic"
          label="Title"
          variant="outlined"
          inputProps={{ minLength: 1 }}
        />
        <TextField
          value={post.body}
          required
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          className="form_input"
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          inputProps={{ minLength: 1 }}
        />
        <Button
          loading={isLoading}
          size="lg"
          className="form_button"
          fullWidth
          onClick={addNewPost}
        >
          Create
        </Button>
      </Card>
    </div>
  );
};

export default Form;
