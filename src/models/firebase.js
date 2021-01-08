import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

export const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAbPgBetggB8eOnJuc4ErNAuOddB0ddKIw",
    authDomain: "kanban-eec37.firebaseapp.com",
    databaseURL: "https://kanban-eec37-default-rtdb.firebaseio.com",
    projectId: "kanban-eec37",
    storageBucket: "kanban-eec37.appspot.com",
    messagingSenderId: "54488392624",
    appId: "1:54488392624:web:5f4bb0845f5d1ed5792c75",
    measurementId: "G-X6M6QM6N8R"
  });
  firebase.analytics();
}