// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions, setTransactions }) {
    const deleteTransaction = (id) => {
        const result = transactions.filter(transaction => transaction.id != id)
        setTransactions(result)
    }
    return (
        <>
            <h3>List des Transactions</h3>
            <ul className={styles.transactions}>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <p className={styles.name}>{transaction.name}</p>
                        <p >{transaction.date}</p>
                        <p className={styles.amount}>{transaction.amount} Dt</p>
                        <button onClick={() => deleteTransaction(transaction.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>

    )
}