import { useState } from 'react'
import { useSignup } from './../../hooks/useSignup';

// styles
import styles from './Signup.module.css'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { error, isPending, signup } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName)
        signup(email, password, displayName)
    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>sign up</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required

                />
            </label>
            <label>
                <span>display name:</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                    required

                />
            </label>
            {isPending ? <button disabled >Loading...</button> : <button >Sign up</button>}
            {error && <p>{error}</p>}
        </form>
    )
}