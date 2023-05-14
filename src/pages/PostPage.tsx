import * as React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useState, useEffect } from "react";
import PostPagePost from "../components/PostPagePost";
import Circular from "../components/Circular";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const PostPage = () => {
    const params = useParams();
    const [post, setPost]: [post: any, setPost: any] = useState({});
    const [fetchPostById, isLoading, errorMessage] = useFetching(async () => {
        const response = await PostService.getById(params.id);

        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById();
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            {!isLoading && !errorMessage ? (
                <PostPagePost post={post} />
            ) : isLoading ? (
                <Circular />
            ) : (
                <Typography
                    variant="h3"
                    component="h3"
                    className="paragraph"
                    style={{ marginTop: "50px" }}
                >
                    {errorMessage}
                </Typography>
            )}
        </motion.div>
    );
};

export default PostPage;
