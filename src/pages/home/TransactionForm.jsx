import { useState } from 'react'

export default function TransactionForm({ setTransactions }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTransactions((prevtransactions) => {
            return [...prevtransactions, { name, amount, id: Math.round(Math.random() * 100) }]
        })
        setName('')
        setAmount('')
    }
    return (
        <>
            <h3>Ajouter une Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nom:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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