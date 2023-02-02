import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title }: { posts: object[]; title: string }) => {
  const nodeRef = React.useRef(null);

  return (
    <div className="post_list">
      <Typography variant="h3" component="h3" className="paragraph">
        {title}
      </Typography>
      <List className="posts">
        <TransitionGroup>
          {posts.map((post: any) => (
            <CSSTransition
              in={true}
              key={post.title}
              nodeRef={nodeRef}
              timeout={500}
              classNames="post"
            >
              <Post post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    </div>
  );
};

export default PostList;
