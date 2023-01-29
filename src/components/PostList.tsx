import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";

const PostList = ({ posts, title, remove }: { posts: object[]; title: string, remove: any }) => {
  const removePost = (postId: number) => {
    remove(postId)
  }

  return (
    <div className="post_list">
      <Typography variant="h3" component="h3" className="paragraph">
        {title}
      </Typography>
      {posts.map((post: any, index) => (
        <div className="posts">
          <Post
            number={index + 1}
            post={post}
            key={post.id}
            remove={removePost}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
