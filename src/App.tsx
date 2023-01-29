import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import Form from "./components/Form";

function App() {
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

  const createPost = (newPost: any) => {
    const newPosts = [...posts, newPost];

    setPosts(newPosts);
  };
  const removePost = (postId: number) => {
    const newPostList = posts.filter(post => post.id !== postId)

    setPosts(newPostList)
  }

  return (
    <div className="App">
      <Form create={createPost} title="Create Post" />
      <PostList posts={posts} title="Posts" remove={removePost} />
    </div>
  );
}

export default App;
