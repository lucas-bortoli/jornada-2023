import { Link } from 'react-router-dom';
import styles from './style.module.css';
import "../../animations/fadeInSlide.css";
import classNames from 'classnames';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const MainPage = () => {
  useDocumentTitle("Página inicial");

  return (
    <div className={styles.page}>
      <main className={classNames(styles.mainContent, "animationFadeInSlide")}>
        <p>Página inicial</p>
        <h1>O que você deseja fazer agora?</h1>
        <p>Criar novo...</p>
        <ul className={styles.cardList}>
          <Link to="/roteiro-de-aula/novo">
            <li>
              <p>Roteiro de aula</p>
              <p className={styles.cardSubtitle}>Lista ordenada</p>
            </li>
          </Link>
          <li>
            <p>Slide</p>
            <p className={styles.cardSubtitle}>PowerPoint</p>
          </li>
        </ul>
      </main>
      <div className={styles.bgImage} />
      <svg className="svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="m0.048,0 h0.958 v1 h-0.958 c-0.144,-0.25,0.144,-0.75,0,-1"></path>
        </clipPath>
      </svg>
    </div>
  );
};
