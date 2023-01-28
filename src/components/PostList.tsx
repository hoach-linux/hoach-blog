import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";

const PostList = ({ posts, title }: { posts: object[]; title: string }) => {
  return (
    <div className="post_list">
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
