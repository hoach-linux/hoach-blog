import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { TransitionGroup } from "react-transition-group";
import Grow from "@mui/material/Grow";
import { Box } from "@mui/material";

const PostList = ({ posts, title }: { posts: object[]; title: string }) => {
  return (
    <div>
      {posts.length ? (
        <Box className="post_list">
          <Typography variant="h3" component="h3" className="paragraph">
            {title}
          </Typography>
          <List className="posts">
            <TransitionGroup>
              {posts.map((post: any) => (
                <Grow key={post.id}>
                  <Post post={post} />
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
