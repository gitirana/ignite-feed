import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <strong>Thayná Gitirana</strong>
        <span>Frontend developer & UI designer</span>
      </div>

      <footer>
        <a className={styles.button} href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
