import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../assets/style/post.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Post = React.forwardRef((props: any, ref: any) => {
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    vertical: "top" as "top",
    horizontal: "center" as "center",
  });
  const { vertical, horizontal, open } = snackbar;
  const navigate = useNavigate();
  const currentLocation = window.location.pathname;
  const image: string = `https://directus.hoach.skryonline.com/assets/${props.post.image}`;

  const openSnackbar = () => {
    setSnackbar({ ...snackbar, open: true });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ ...snackbar, open: false });
  };
  function addToFavorites() {
    if (localStorage.getItem("favoritesPosts")) {
      const favoritesPosts: any = localStorage.getItem("favoritesPosts");

      localStorage.setItem(
        "favoritesPosts",
        JSON.stringify([...JSON.parse(favoritesPosts), props.post])
      );

      openSnackbar();
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
              onClick={() => navigate(`/posts/${props.post.id}`)}
              fullWidth
              size="lg"
              sx={{ marginRight: 1 }}
            >
              Read more
            </Button>
            <Button onClick={addToFavorites} size="lg" variant="soft">
              <FavoriteBorder />
            </Button>
          </ButtonGroup>
        </div>
      ) : (
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          {props.post.body}
        </Typography>
      )}
      <Snackbar
        open={snackbar.open}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {props.post.title} was added to favorites
        </Alert>
      </Snackbar>
    </Card>
  );
});

export default Post;
