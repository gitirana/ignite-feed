import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gitirana.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thayná Gitirana</strong>
              <time title="11 de maio às 8:13" dateTime="2022-05-11 08:00:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
