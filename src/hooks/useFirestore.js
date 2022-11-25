import { projectFirestore, projectTimestamp } from "../firebase/config"
import { useEffect } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}
const firestoreReducer = (state, action) => {
    switch (action.type) {
        case "IS_PENDING":
            return { ...state, isPending: true, document: null, error: false, success: false }
        case "ADDED_DOCUMENT":
            return { ...state, success: true, document: action.payload, isPending: false, error: null }
        case "ERROR":
            return { ...state, document: null, isPending: false, error: action.payload, success: false }
        case "DELETED_DOCUMENT":
            return { ...state, success: true, document: action.payload, isPending: false, error: null }

        default:
            return state
    }

}
export const useFirestore = (collection) => {
    const [state, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const ref = projectFirestore.collection(collection)

    const addDocument = async (doc) => {
        dispatch({ type: "IS_PENDING" })
        try {
            const createdAt = projectTimestamp.fromDate(new Date())
            const addedDoc = await ref.add({ ...doc, createdAt })
            if (!isCancelled) {
                dispatch({ type: "ADDED_DOCUMENT", payload: addedDoc })
            }
        }
        catch (err) {
            if (!isCancelled) {
                dispatch({ type: "ERROR", payload: err.message })
            }
        }
    }

    const deleteDocument = async (id) => {
        dispatch({ type: "IS_PENDING" })
        try {
            await ref.doc(id).delete()
            if (!isCancelled) {
                dispatch({ type: "DELETED_DOCUMENT" })
            }
        }
        catch (err) {
            if (!isCancelled) {
                dispatch({ type: "ERROR", payload: err.message })
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    return (
        { addDocument, deleteDocument, state }
    )
}
