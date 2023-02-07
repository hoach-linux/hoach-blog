import * as React from "react";
import PostList from "../components/PostList";
import { useState } from "react";

const Favorites = () => {
  const favoritesPosts: any = localStorage.getItem("favoritesPosts");
  const posts = JSON.parse(favoritesPosts);
  
  return (
    <div>
      <PostList posts={posts} title="Favorites" />
    </div>
  );
};

export default Favorites;
