import { projectAuth } from '../firebase/config';
import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        try {
            setError(null)
            setIsPending(true)

            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            dispatch({ type: "LOGIN", payload: res.user })

            if (!isCancelled) {
                setError(null)
                setIsPending(false)
            }

        }
        catch (err) {
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }
    useEffect(() => {

        return () => setIsCancelled(true)

    }, [])

    return (
        { login, error, isPending }
    )
}
