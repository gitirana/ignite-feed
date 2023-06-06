import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Thayná Gitirana"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos autem nulla nam ullam modi qui explicabo maiores. Sunt assumenda cum ullam esse deserunt voluptate laudantium, amet inventore iure culpa?"
      />
    </div>
  );
}
