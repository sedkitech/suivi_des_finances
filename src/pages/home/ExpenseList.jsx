// styles
import styles from './Home.module.css'
import formatDistance from 'date-fns/formatDistance'
import format from 'date-fns/format'
import { useFirestore } from './../../hooks/useFirestore';

export default function ExpenseList({ documents,
    //  expenses, setExpenses
}) {
    // const deleteExpense = (id) => {
    //     const filtredExpenses = expenses.filter(expense => expense.id !== id)
    //     setExpenses(filtredExpenses)
    // }
    let currentTime = Date.now()
    const { deleteDocument, state } = useFirestore("expenses")
    console.log(state)
    return (
        <>
            <h3>List des Dépenses</h3>
            {/* <ul className={styles.expenses}>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span className={styles.date_container}>
                            <em
                                className={styles.date}>{expense.date}</em>
                            <p className={styles.dateAgo}>
                                (
                                {formatDistance(new Date(expense.date), new Date(currentTime), { addSuffix: true })}
                                )
                            </p>
                        </span>
                        <p className={styles.name}>{expense.title}</p>
                        <p p className={styles.amount} > {expense.amount} Dt</p>
                        <button onClick={() => deleteExpense(expense.id)}>x</button>
                    </li>
                ))
                }
            </ul > */}

            <ul className={styles.expenses}>
                {documents.map((expense) => (
                    <li key={expense.id}>
                        <span className={styles.date_container}>
                            <em className={styles.date}>
                                {format(new Date(expense.createdAt.toDate()), 'MM/dd/yyyy HH:mm:ss')}
                            </em>
                            <p className={styles.dateAgo}>
                                (
                                {formatDistance(new Date(expense.createdAt.toDate()), new Date(currentTime), { addSuffix: true })}
                                )
                            </p>
                        </span>
                        <p className={styles.name}>{expense.title}</p>
                        <p p className={styles.amount} > {expense.amount} Dt</p>
                        <button onClick={() => deleteDocument(expense.id)}>x</button>
                    </li>
                ))
                }
            </ul >


        </>

    )
}