// styles
import styles from './Home.module.css'
import formatDistance from 'date-fns/formatDistance'
export default function ExpenseList({ expenses, setExpenses }) {
    const deleteExpense = (id) => {
        const filtredExpenses = expenses.filter(expense => expense.id != id)
        setExpenses(filtredExpenses)
    }
    let d = Date.now()
    let result = null
    return (
        <>
            <h3>List des Dépenses</h3>
            <ul className={styles.expenses}>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span className={styles.date_container}>
                            <em
                                className={styles.date}>{expense.date}</em>
                            <p className={styles.dateAgo}>
                                (
                                {formatDistance(new Date(expense.date), new Date(d), { addSuffix: true })}
                                )
                            </p>
                        </span>
                        <p className={styles.name}>{expense.title}</p>
                        <p p className={styles.amount} > {expense.amount} Dt</p>
                        <button onClick={() => deleteExpense(expense.id)}>x</button>
                    </li>
                ))
                }
            </ul >
        </>

    )
}