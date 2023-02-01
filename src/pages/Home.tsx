import { useEffect, useState } from "react";
import Divider from "@mui/joy/Divider";
import PostList from "../components/PostList";
import Typography from "@mui/material/Typography";
import PostSelect from "../components/PostSelect";
import { TextField } from "@mui/material";
import axios from "axios";
import PostService from "../API/PostService";

function Home() {
  interface ISelectedSort {
    title: string;
    body: string;
  }

  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const options = [
    { value: "title", name: "Title" },
    { value: "body", name: "Description" },
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const posts = await PostService.getAll();

    setPosts(posts);
  }

  const removePost = (postId: number) => {
    const newPostList = posts.filter((post) => post.id !== postId);

    setPosts(newPostList);
  };
  const sortPosts = (sort: string) => {
    setSelectedSort(sort);

    setPosts(
      [...posts].sort((a, b) =>
        a[sort as keyof ISelectedSort].localeCompare(
          b[sort as keyof ISelectedSort]
        )
      )
    );
  };

  return (
    <div className="App">
      <TextField
        className="input"
        fullWidth
        id="outlined-basic"
        label="Search"
        variant="outlined"
        inputProps={{ minLength: 1 }}
      />
      <Divider
        style={{ marginBottom: "10px", marginTop: "10px" }}
        component="div"
        role="presentation"
      />
      <PostSelect
        options={options}
        value={selectedSort}
        defaultValue="Sort"
        change={sortPosts}
      />
      {posts.length ? (
        <PostList posts={posts} title="Posts" remove={removePost} />
      ) : (
        <Typography
          variant="h3"
          component="h3"
          style={{ marginTop: "50px" }}
          className="paragraph"
        >
          Postlist is empty
        </Typography>
      )}
    </div>
  );
}

export default Home;
