// styles
import styles from './Home.module.css'
// components
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { useState } from 'react';
import { useAuthContext } from './../../hooks/useAuthContext';
import { useCollection } from './../../hooks/useCollection';

export default function Home() {
    const oldExpenses = [
        {
            id: 1,
            title: 'Facture internet',
            amount: '30',
            date: "11/16/2022 21:06:58"
        },
        {
            id: 2,
            title: 'Lavage de la voiture',
            amount: '15',
            date: "11/17/2022 16:20:12"

        },
    ]

    const [expenses, setExpenses] = useState(oldExpenses);
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        "expenses",
        ["uid", "==", user.uid],
        ["createdAt", "desc"]
    )
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {error && <p>{error}</p>}
                {documents && <ExpenseList
                    uid={user.uid}
                    documents={documents}
                    expenses={expenses}
                    setExpenses={setExpenses}
                />}
            </div>
            <div className={styles.sidebar}>
                <ExpenseForm uid={user.uid} setExpenses={setExpenses} />
            </div>
        </div>
    )
}
