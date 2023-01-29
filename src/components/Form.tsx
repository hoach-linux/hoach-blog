import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";

const Form = ({ create }: { create: any }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [isLoading, setIsloading] = useState(false);

  const addNewPost = () => {
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
  };

  return (
    <div className="form">
      <Card variant="outlined" sx={{ maxWidth: 945 }} className="post">
        <TextField
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="form_input"
          fullWidth
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          className="form_input"
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
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
