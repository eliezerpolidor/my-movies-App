import movies from '../Componentes/movies.json';
import MoviesCards from '../Componentes/MoviesCards';
import styles from '../Componentes/MoviesGrid.module.css';

export function Moviesgrid() {
     return (
        <ul className={styles.moviedGrid}>
            {movies.map((movie) => <MoviesCards  key={movie.id} movie={movie}/> )}
        </ul>
    );
}