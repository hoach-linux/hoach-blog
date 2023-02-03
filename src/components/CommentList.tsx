import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";
import Grow from "@mui/material/Grow";
import { Box } from "@mui/material";
import Comment from "./Comment";

const CommentList = ({
  comments,
  title,
}: {
  comments: object[];
  title: string;
}) => {
  return (
    <div>
      {comments.length ? (
        <Box className="post_list">
          <Typography variant="h3" component="h3" className="paragraph">
            {title}
          </Typography>
          <List className="posts">
            <TransitionGroup>
              {comments.map((comment: any) => (
                <Grow in key={comment.id}>
                  <Comment comment={comment} />
                </Grow>
              ))}
            </TransitionGroup>
          </List>
        </Box>
      ) : (
        <Typography
          variant="h3"
          component="h3"
          style={{ marginTop: "50px" }}
          className="paragraph"
        >
          Comments not found
        </Typography>
      )}
    </div>
  );
};

export default CommentList;
