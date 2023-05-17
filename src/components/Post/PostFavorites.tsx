import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostFavorites = React.forwardRef((props: any, ref: any) => {
    const navigate = useNavigate();

    return (
        <Card ref={ref} sx={{ maxWidth: 945 }} className="post">
            {!props.isLoading && !props.error ? (
                <CardMedia component="img" alt="img" image={props.image} />
            ) : (
                <Skeleton
                    sx={{ height: 250 }}
                    animation="wave"
                    variant="rectangular"
                    width="100%"
                />
            )}
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ fontSize: "xl", mt: 2 }}
                >
                    {props.post.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5, mb: 2 }}
                >
                    {props.post.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    onClick={props.removeFromFavorites}
                    size="large"
                    color="warning"
                    variant="outlined"
                >
                    Delete
                </Button>
                <Button
                    onClick={() => navigate(`/posts/${props.post.id}`)}
                    size="large"
                    variant="contained"
                >
                    Read more
                </Button>
            </CardActions>
        </Card>
    );
});

export default PostFavorites;
