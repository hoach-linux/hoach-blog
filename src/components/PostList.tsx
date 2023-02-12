import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";
import Grow from "@mui/material/Grow";
import { Box } from "@mui/material";

const PostList = ({
  posts,
  title,
  remove,
}: {
  posts: object[];
  title: string;
  remove?: any;
}) => {
  return (
    <div>
      {posts.length ? (
        <Box className="post_list">
          {title.length !== 0 && (
            <Typography
              variant="h3"
              component="h3"
              className="paragraph"
              sx={{ textAlign: "left" }}
            >
              {title}
            </Typography>
          )}
          <List className="posts">
            <TransitionGroup>
              {posts.map((post: any) => (
                <Grow in key={post.id}>
                  <Post post={post} remove={remove} />
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
          Posts not found
        </Typography>
      )}
    </div>
  );
};

export default PostList;
