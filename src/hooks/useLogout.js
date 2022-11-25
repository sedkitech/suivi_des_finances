
import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';
export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false)

    const logout = async () => {
        try {
            setError(null)
            setIsPending(true)

            await projectAuth.signOut()
            dispatch({ type: "LOGOUT" })

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

    return { logout, error, isPending }
}
