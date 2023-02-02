import * as React from "react";
import Post from "./Post";
import Typography from "@mui/material/Typography";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({
  posts,
  title,
  remove,
}: {
  posts: object[];
  title: string;
  remove: any;
}) => {
  const nodeRef = React.useRef(null);

  return (
    <div className="post_list">
      <Typography variant="h3" component="h3" className="paragraph">
        {title}
      </Typography>
      <div className="posts">
        <TransitionGroup>
          {posts
            .map((post: any) => (
              <CSSTransition
                key={post.id}
                nodeRef={nodeRef}
                timeout={500}
                classNames="post"
              >
                <Post post={post} remove={remove} />
              </CSSTransition>
            ))
            .reverse()}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default PostList;
