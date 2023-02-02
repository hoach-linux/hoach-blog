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
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
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
          {props.post.description}
        </Typography>
        <Button size="lg" className="remove_button" variant="soft" fullWidth>
          Read more
        </Button>
      </Card>
    </div>
  );
};

export default Post;
