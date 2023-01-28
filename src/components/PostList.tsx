import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";
import "../assets/style/posts.css";

const PostList = ({ posts, title }: { posts: object[]; title: string }) => {
  return (
    <div>
      <Typography variant="h2" component="h2" className="paragraph">
        {title}
      </Typography>
      {posts.map((post: any) => (
        <div className="posts">
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
