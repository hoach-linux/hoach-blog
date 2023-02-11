import * as React from "react";
import PostList from "../components/PostList";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {posts.length ? (
        <PostList posts={posts} title="" />
      ) : (
        <Link to="/">
          <Button size="large" href="/" fullWidth>
            Add favorites
          </Button>
        </Link>
      )}
    </motion.div>
  );
};

export default Favorites;
