import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import "../assets/style/post.css";

const Post = (props: any) => {
  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 945 }} className="post">
        <Typography gutterBottom level="h5" component="div">
          {props.post.title}
        </Typography>
        <Typography level="body2">{props.post.id}</Typography>
        <Typography level="body2">{props.post.body}</Typography>
      </Card>
    </div>
  );
};

export default Post;
