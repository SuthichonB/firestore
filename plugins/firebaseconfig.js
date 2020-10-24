import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBd2DPuX63aUP7QHmJLX2IlpzdTTsGm3iY",
        authDomain: "firestore-a566e.firebaseapp.com",
        databaseURL: "https://firestore-a566e.firebaseio.com",
        projectId: "firestore-a566e",
        storageBucket: "firestore-a566e.appspot.com",
        messagingSenderId: "79194792789",
        appId: "1:79194792789:web:de993bc5b35374a0ed05dc",
        measurementId: "G-WR530P3G0R"
    }
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()