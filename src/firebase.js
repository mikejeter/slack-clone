import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsHdZtHesjB8McZD5-5pAKKytHxGoTIaU",
    authDomain: "slack-clone-e2d2d.firebaseapp.com",
    projectId: "slack-clone-e2d2d",
    storageBucket: "slack-clone-e2d2d.appspot.com",
    messagingSenderId: "881109021645",
    appId: "1:881109021645:web:7b7e7557d5aed551bd0a84"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;