import { Header } from "./components/Header";
import { Sidebar } from "./components/SIdebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thayná Gitirana"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos autem nulla nam ullam modi qui explicabo maiores. Sunt assumenda cum ullam esse deserunt voluptate laudantium, amet inventore iure culpa?"
          />
        </main>
      </div>
    </div>
  );
}
