import styles from "./Post.module.css";

export function Post() {
  return (
    <article>
      <header className={styles.post}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/gitirana.png"
          />

          <div className={styles.authorInfo}>
            <strong>Thayná Gitirana</strong>
            <span>Frontend developer & UI designer</span>
          </div>
        </div>

        <time title="11 de maio às 8:13" dateTime="2022-05-11 08:00:30">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
