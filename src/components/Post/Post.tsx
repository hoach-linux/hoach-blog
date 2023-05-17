import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import "./Post.css";
import PostMain from "./PostMain";
import PostFavorites from "./PostFavorites";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Post = React.forwardRef((props: any, ref: any) => {
    const url = "https://directus.hoach.skryonline.com/assets/";
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        vertical: "top" as "top",
        horizontal: "center" as "center",
    });
    const { vertical, horizontal, open } = snackbar;
    const currentLocation: any = window.location.pathname;
    const [image, setImage] = React.useState("");
    const [getImage, isLoading, error] = useFetching(async () => {
        const image = await PostService.getImage(props.post.image);

        setImage(`${url}/${props.post.image}`);
    });

    React.useEffect(() => {
        getImage();
    }, []);

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

    return (
        <>
            {currentLocation === "/" && (
                <PostMain
                    image={image}
                    addToFavorites={addToFavorites}
                    isLoading={isLoading}
                    error={error}
                    post={props.post}
                    ref={ref}
                />
            )}
            {currentLocation === "/favorites" && (
                <PostFavorites
                    image={image}
                    removeFromFavorites={removeFromFavorites}
                    isLoading={isLoading}
                    error={error}
                    post={props.post}
                    ref={ref}
                />
            )}
            <Snackbar
                open={snackbar.open}
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {props.post.title} was added to favorites
                </Alert>
            </Snackbar>
        </>
    );
});

export default Post;
