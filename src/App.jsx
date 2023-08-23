//Components
import NavBarComponent from "../NavBarComponent/NavBar";


//Styles
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBarComponent />
      </nav>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  );
};

export default App;
