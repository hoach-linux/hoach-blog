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
      {posts.map((post: any, index) => (
        <div className="posts" key={post.id}>
          <Post number={index + 1} post={post} remove={remove} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
