import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "../assets/style/post.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { CardActions } from "@mui/material";

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
  const currentLocation: any = window.location.pathname;
  const image: string = `https://directus.hoach.skryonline.com/assets/${props.post.image}`;

  if (!localStorage.getItem("favoritesPosts")) {
    localStorage.setItem("favoritesPosts", JSON.stringify([]));
  }

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
    const favoritesPosts: any = localStorage.getItem("favoritesPosts");
    let favorites = JSON.parse(favoritesPosts);

    localStorage.setItem(
      "favoritesPosts",
      JSON.stringify([...favorites, props.post])
    );

    openSnackbar();
  }
  function removeFromFavorites() {
    const favoritesPosts: any = localStorage.getItem("favoritesPosts");
    const filteredPosts = JSON.parse(favoritesPosts).filter(
      (post: any) => post.id !== props.post.id
    );

    localStorage.setItem("favoritesPosts", JSON.stringify(filteredPosts));

    props.remove(filteredPosts);
  }
  function reloadPage() {
    window.location.reload();
  }

  return (
    <Card ref={ref} sx={{ maxWidth: 945 }} className="post">
      <CardMedia component="img" alt="img" image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "xl", mt: 2 }}
        >
          {props.post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.post.id}
        </Typography>
        {currentLocation === "/" ? (
          <div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5, mb: 2 }}
            >
              {props.post.description}
            </Typography>
            <CardActions>
              <Button
                onClick={() => navigate(`/posts/${props.post.id}`)}
                fullWidth
                variant="contained"
                size="large"
              >
                Read more
              </Button>
              <Button onClick={addToFavorites} size="large">
                <FavoriteBorder />
              </Button>
            </CardActions>
          </div>
        ) : (
          <div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5, mb: 2 }}
            >
              {props.post.body}
            </Typography>
            {currentLocation === "/favorites" && (
              <CardActions>
                <Button
                  onClick={removeFromFavorites}
                  color="error"
                  size="large"
                  fullWidth
                  variant="text"
                >
                  Delete
                </Button>
              </CardActions>
            )}
          </div>
        )}
      </CardContent>
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
