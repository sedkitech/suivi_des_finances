// styles
import styles from './Navbar.module.css'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>Projet suivi des finances</li>
            </ul>
        </nav>
    )
}
