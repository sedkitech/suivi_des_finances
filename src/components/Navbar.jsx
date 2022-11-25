import { Link } from "react-router-dom"
import { useAuthContext } from './../hooks/useAuthContext';
import { useLogout } from './../hooks/useLogout';

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
    const { user } = useAuthContext()
    console.log("navbar  user", user)
    const { logout } = useLogout()
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}><Link to="/">Projet suivi des finances</Link></li>

                {!user &&
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                }
                {user &&
                    <>
                        <li><p>{`Salut, ${user.displayName}`}</p></li>
                        <li ><Link to="/login"><button onClick={logout}>Logout</button></Link></li>
                    </>
                }

            </ul>
        </nav>
    )
}
