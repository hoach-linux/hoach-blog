import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import "../assets/style/post.css";

const Post = (props: any) => {
  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 945 }} className="post">
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={props.post.image}
              srcSet="https://images.unsplash.com/photo-1674420628423-bf7a338af32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <Typography level="h2" sx={{ fontSize: "xl", mt: 2 }}>
          {props.post.title}
        </Typography>
        <Typography level="body2">{props.post.id}</Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          {props.post.body}
        </Typography>
        <Button size="lg" className="remove_button" variant="soft" fullWidth>
          Read more
        </Button>
      </Card>
    </div>
  );
};

export default Post;
