import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";

const PostList = ({
  posts,
  title,
  remove,
}: {
  posts: object[];
  title: string;
  remove: any;
}) => {
  return (
    <div className="post_list">
      <Typography variant="h3" component="h3" className="paragraph">
        {title}
      </Typography>
      {posts
        .map((post: any) => (
          <div className="posts" key={post.id}>
            <Post post={post} remove={remove} />
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default PostList;
