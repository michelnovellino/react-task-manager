import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBUbvPoq5MPJGSKumXClGo6FO9z3kX3ONo",
    authDomain: "mi-primer-proyecto-en-react.firebaseapp.com",
    databaseURL: "https://mi-primer-proyecto-en-react.firebaseio.com",
    projectId: "mi-primer-proyecto-en-react",
    storageBucket: "mi-primer-proyecto-en-react.appspot.com",
    messagingSenderId: "732058452886"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
