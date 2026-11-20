import styles from './App.module.css';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <div className={styles.intro}>
          <h2>Природные достопримечательности мира</h2>
          <p>
            В этой подборке собраны удивительные места нашей планеты: горы,
            водопады, озёра, пустыни и коралловые рифы.
          </p>
        </div>
        <ArticleList />
      </main>
      <footer className={styles.footer} id="about">
        Небольшая подборка красивых природных мест нашей планеты.
      </footer>
    </div>
  );
}

export default App;
