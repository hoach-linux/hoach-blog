import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import "../assets/style/post.css";

const Post = (props: any) => {
  return (
    <Card sx={{ maxWidth: 945 }} className="post">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.post.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
