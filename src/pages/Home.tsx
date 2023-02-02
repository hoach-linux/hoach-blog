import { useEffect, useMemo, useState } from "react";
import Divider from "@mui/joy/Divider";
import PostList from "../components/PostList";
import Typography from "@mui/material/Typography";
import PostSelect from "../components/PostSelect";
import { TextField } from "@mui/material";
import PostService from "../API/PostService";

function Home() {
  interface IPost {
    id: number;
  }

  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const options = [
    { value: "title", name: "Title" },
    { value: "body", name: "Description" },
  ];
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a: any, b: any) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post: any) =>
      post.title.toLocaleLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const posts = await PostService.getAll();

    setPosts(posts);
  }

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <TextField
        className="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
      {sortedAndSearchedPosts.length ? (
        <PostList posts={sortedAndSearchedPosts} title="Technology" />
      ) : (
        <Typography
          variant="h3"
          component="h3"
          style={{ marginTop: "50px" }}
          className="paragraph"
        >
          Posts not found
        </Typography>
      )}
    </div>
  );
}

export default Home;
