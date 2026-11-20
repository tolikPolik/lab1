import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.link}>Главная</a>
      <a href="#places" className={styles.link}>Достопримечательности</a>
      <a href="#about" className={styles.link}>О проекте</a>
    </nav>
  );
}

export default Nav;
