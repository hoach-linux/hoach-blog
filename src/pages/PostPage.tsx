import * as React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import { Box } from "@mui/system";
import CommentList from "../components/CommentList";
import Circular from "../components/Circular";
import { Typography } from "@mui/material";

const PostPage = () => {
  const params = useParams();
  const [post, setPost]: [post: any, setPost: any] = useState({});
  const [fetchPostById, isLoading, errorMessage] = useFetching(async () => {
    const response = await PostService.getById(params.id);

    setPost(response);
  });
  const [comments, setComments] = useState([]);
  const [fetchComments, isLoadingComments, errorMessageComments] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);

      setComments(response);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);
  return (
    <Box>
      {!isLoading && !errorMessage ? (
        <Post post={post} />
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
      <Box>
        {errorMessageComments && (
          <Typography
            variant="h3"
            component="h3"
            className="paragraph"
            style={{ marginTop: "50px" }}
          >
            {errorMessageComments}
          </Typography>
        )}
        {isLoadingComments || errorMessageComments ? (
          <Circular />
        ) : (
          <CommentList comments={comments} title="Comments" />
        )}
      </Box>
    </Box>
  );
};

export default PostPage;
