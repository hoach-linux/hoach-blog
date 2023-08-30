import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

function PostPagePost(props: any) {
    const url = "https://directus.hoachnt.com/assets/";
    const [image, setImage] = useState("");
    const [getImage, isLoading, error] = useFetching(async () => {
        const image = await PostService.getImage(props.post.image);

        setImage(`${url}/${props.post.image}`);
    });

    useEffect(() => {
        getImage();
    }, []);

    return (
        <Card sx={{ maxWidth: 945, background: "inherit", boxShadow: "none" }} className="post">
            {!isLoading && !error ? (
                <CardMedia component="img" alt="img" image={image} />
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
                    dangerouslySetInnerHTML={{ __html: props.post.body }}
                ></Typography>
            </CardContent>
        </Card>
    );
}

export default PostPagePost;
