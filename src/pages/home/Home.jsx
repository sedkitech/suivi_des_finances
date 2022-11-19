// styles
import styles from './Home.module.css'
// components
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { useState } from 'react';

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
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ExpenseList expenses={expenses} setExpenses={setExpenses} />
            </div>
            <div className={styles.sidebar}>
                <ExpenseForm setExpenses={setExpenses} />
            </div>
        </div>
    )
}
