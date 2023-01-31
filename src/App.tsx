import { useState } from "react";
import "./App.css";
import Divider from "@mui/joy/Divider";
import PostList from "./components/PostList";
import Typography from "@mui/material/Typography";
import PostSelect from "./components/PostSelect";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import { TextField } from "@mui/material";
import LabelBottomNavigation from "./components/LabelBottomNavigation";

function App() {
  interface ISelectedSort {
    title: string;
    body: string;
  }

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "TS",
      body: "TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript. Разработчиком языка TypeScript является Андерс Хейлсберг, создавший ранее Turbo Pascal, Delphi и C#. Википедия",
    },
    {
      id: 2,
      title: "JS",
      body: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.",
    },
    {
      id: 3,
      title: "Python",
      body: "Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ.",
    },
    {
      id: 4,
      title: "Bash",
      body: "Bash — усовершенствованная и модернизированная вариация командной оболочки Bourne shell. Одна из наиболее популярных современных разновидностей командной оболочки UNIX. Особенно популярна в среде Linux, где она часто используется в качестве предустановленной командной оболочки. Википедия",
    },
    {
      id: 5,
      title: "Ruby",
      body: "Ruby — динамический, рефлективный, интерпретируемый высокоуровневый язык программирования. Язык обладает независимой от операционной системы реализацией многопоточности, сильной динамической типизацией, сборщиком мусора и многими другими возможностями. Википедия",
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const options = [
    { value: "title", name: "Title" },
    { value: "body", name: "Description" },
  ];

  const createPost = (newPost: any) => {
    const newPosts = [...posts, newPost];

    setPosts(newPosts);
  };
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
      <Navbar create={createPost} />
      <Toolbar />
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
      <Toolbar />
      <LabelBottomNavigation />
    </div>
  );
}

export default App;
