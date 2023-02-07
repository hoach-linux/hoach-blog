import { useEffect, useRef, useState } from "react";
import Divider from "@mui/joy/Divider";
import PostList from "../components/PostList";
import PostSelect from "../components/PostSelect";
import { TextField } from "@mui/material";
import PostService from "../API/PostService";
import Circular from "../components/Circular";
import Typography from "@mui/material/Typography";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getTotalPage } from "../utils/pages";

function Home() {
  interface IPost {
    id: number;
  }

  const [posts, setPosts]: [posts: any, setPosts: any] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  let [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  let [page, setPage] = useState(1);
  const [loadMorePosts, setLoadMorePosts] = useState(false);
  const [lastPage, isLastPageLoading, lastPageErrorMessage] = useFetching(
    async () => {
      const [lastPagePosts, lastPage] = await PostService.getLastPage(limit);

      setPosts(lastPagePosts.reverse());
      setTotalPages(lastPage);
      setLoadMorePosts(true);
    }
  );

  const [fetchPosts, isLoading, errorMessage] = useFetching(async () => {
    const response = await PostService.getAll(limit, totalPages);

    setPosts([...posts, ...response.data.reverse()]);
  });

  const lastElement: any = useRef();
  const observer: any = useRef();

  const options = [
    { value: "title", name: "Title" },
    { value: "body", name: "Description" },
  ];

  const sortedAndSearchedPosts = usePosts(posts, selectedSort, searchQuery);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    var callback = function (entries: any, observer: any) {
      if (entries[0].isIntersecting && page < totalPages) {
        setTotalPages(totalPages - 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);
  useEffect(() => {
    lastPage();
  }, []);
  useEffect(() => {
    if (loadMorePosts) {
      fetchPosts();
    }
  }, [totalPages]);

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
      {errorMessage ||
        (lastPageErrorMessage && (
          <Typography
            variant="h3"
            component="h3"
            className="paragraph"
            style={{ marginTop: "50px" }}
          >
            {errorMessage}
          </Typography>
        ))}
      <PostList posts={sortedAndSearchedPosts} title="All Posts" />
      <div ref={lastElement} style={{ height: 0 }} />
      {isLoading || (isLastPageLoading && <Circular />)}
    </div>
  );
}

export default Home;
