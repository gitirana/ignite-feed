import { Header } from "./components/Header";
import { Sidebar } from "./components/SIdebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gitirana.png",
      name: "Thayná Gitirana",
      role: "Frontend developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋 ",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-06-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/italoh623.png",
      name: "Ítalo Henrique",
      role: "Data analyst jr",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋 ",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
