import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export const ErrorPage = () => {

    return (
        <main className={styles.errorPage}>
            <div className={styles.content}>
                <h1 className={styles.title}>Erro 404 NOT Found</h1>
            </div>
            <p className={styles.paragraph}>Desculpe, a página que você está tentando acessar não existe.</p>
            <Link className={styles.button} to={"/"}>VOLTAR</Link>
        </main>
    );
};
