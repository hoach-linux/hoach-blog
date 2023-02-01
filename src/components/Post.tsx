import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import "../assets/style/post.css";

const Post = (props: any, remove: any) => {
  const removePost = () => {
    props.remove(props.post.id);
  };

  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 945 }} className="post">
        <Typography gutterBottom level="h5" component="div">
          {props.post.title}
        </Typography>
        <Typography level="body2">{props.post.id}</Typography>
        <Typography level="body2">{props.post.body}</Typography>
        <Button
          size="lg"
          className="remove_button"
          color="danger"
          variant="soft"
          fullWidth
          onClick={removePost}
        >
          Remove
        </Button>
      </Card>
    </div>
  );
};

export default Post;
