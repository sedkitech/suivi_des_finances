import { useState } from 'react'
import format from 'date-fns/format'
export default function ExpenseForm({ setExpenses }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentTime = format(new Date(), 'MM/dd/yyyy HH:mm:ss')
        // console.log("currentTime", currentTime)
        setExpenses((prevExpenses) => {
            return [...prevExpenses,
            {
                title,
                amount,
                id: Math.round(Math.random() * 100),
                date: currentTime
            }
            ]
        })
        setTitle('')
        setAmount('')
    }
    return (
        <>
            <h3>Ajouter une dépense</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Titre:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Montant (Dt):</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        step='any'
                    />
                </label>
                <button>Ajouter</button>
            </form>
        </>
    )
}