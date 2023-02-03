import { useEffect, useMemo, useState } from "react";
import Divider from "@mui/joy/Divider";
import PostList from "../components/PostList";
import PostSelect from "../components/PostSelect";
import { TextField } from "@mui/material";
import PostService from "../API/PostService";
import Circular from "../components/Circular";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";

function Home() {
  interface IPost {
    id: number;
  }

  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchPosts, isLoading, errorMessage] = useFetching(async () => {
    const posts = await PostService.getAll();

    setPosts(posts);
  });

  const options = [
    { value: "title", name: "Title" },
    { value: "body", name: "Description" },
  ];

  const sortedAndSearchedPosts = usePosts(posts, selectedSort, searchQuery);

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      {errorMessage && (
        <Typography variant="h3" component="h3" className="paragraph">
          {errorMessage}
        </Typography>
      )}
      {isLoading || errorMessage ? (
        <Circular />
      ) : (
        <Box>
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
          <PostList posts={sortedAndSearchedPosts} title="Technology" />
        </Box>
      )}
    </div>
  );
}

export default Home;
