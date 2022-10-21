// styles
import styles from './Home.module.css'
// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import { useState } from 'react';

export default function Home() {
    const oldTransactions = [
        {
            id: 1,
            name: 'Facture internet',
            amount: '30',
        },
        {
            id: 2,
            name: 'Lavage de la voiture',
            amount: '15',
        },
    ]

    const [transactions, setTransactions] = useState(oldTransactions);
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <TransactionList transactions={transactions} setTransactions={setTransactions} />
            </div>
            <div className={styles.sidebar}>
                <TransactionForm setTransactions={setTransactions} />
            </div>
        </div>
    )
}
