import {Moviesgrid} from '../Componentes/MoviesGrid'
import styles from '../Componentes/App.module.css';

export function App() {
    return (
        <div>
            <header>
                <h1 className={styles.title}>Movies</h1>
            </header>
            <main>
                <Moviesgrid/>
            </main>
        </div>
    );
}