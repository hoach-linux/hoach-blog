import * as React from "react";
import PostList from "../components/PostList";
import { Button } from "@mui/joy";

import { Link } from "react-router-dom";

const Favorites = () => {
  const favoritesPosts: any = localStorage.getItem("favoritesPosts");
  let posts: any[] = [];

  if (JSON.parse(favoritesPosts)) {
    posts = JSON.parse(favoritesPosts);
  } else {
    posts = [];
  }

  return (
    <div>
      {posts.length ? (
        <PostList posts={posts} title="Favorites" />
      ) : (
        <Link to="/">
          <Button size="lg" href="/" fullWidth>
            Add favorites
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Favorites;
