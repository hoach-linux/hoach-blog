import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../assets/style/post.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const Post = React.forwardRef((props: any, ref: any) => {
  const navigate = useNavigate();
  const currentLocation = window.location.pathname;
  const image: string = `https://directus.hoach.skryonline.com/assets/${props.post.image}`;

  function addToFavorites() {
    if (localStorage.getItem("favoritesPosts")) {
      const favoritesPosts: any = localStorage.getItem("favoritesPosts");
      localStorage.setItem(
        "favoritesPosts",
        JSON.stringify([...JSON.parse(favoritesPosts), props.post])
      );
    } else {
      localStorage.setItem("favoritesPosts", JSON.stringify([props.post]));
    }
  }

  return (
    <Card variant="outlined" ref={ref} sx={{ maxWidth: 945 }} className="post">
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            srcSet={image}
            src="https://images.unsplash.com/photo-1674420628423-bf7a338af32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "xl", mt: 2 }}>
        {props.post.title}
      </Typography>
      <Typography level="body2">{props.post.id}</Typography>
      {currentLocation === "/" ? (
        <div>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            {props.post.description}
          </Typography>
          <ButtonGroup
            variant="outlined"
            size="large"
            fullWidth
            aria-label="outlined primary button group"
          >
            <Button
              variant="contained"
              onClick={() => navigate(`/posts/${props.post.id}`)}
            >
              Read more
            </Button>
            <Button onClick={addToFavorites}>
              <FavoriteBorder />
            </Button>
          </ButtonGroup>
        </div>
      ) : (
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          {props.post.body}
        </Typography>
      )}
    </Card>
  );
});

export default Post;
