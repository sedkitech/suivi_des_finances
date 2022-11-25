import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2Ck5DFF-I-ikx7vuAvfqqhEMpfKMmMQY",
    authDomain: "projet-suivi-des-finances.firebaseapp.com",
    projectId: "projet-suivi-des-finances",
    storageBucket: "projet-suivi-des-finances.appspot.com",
    messagingSenderId: "419856107876",
    appId: "1:419856107876:web:859cbc55022375100dd271"
};
//init firebase 
firebase.initializeApp(firebaseConfig)
//init firestore service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
//timestamp
const projectTimestamp = firebase.firestore.Timestamp
//export services
export { projectFirestore, projectAuth, projectTimestamp }