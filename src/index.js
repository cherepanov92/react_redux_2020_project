import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";
import App from "./components/App";

import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbPgBetggB8eOnJuc4ErNAuOddB0ddKIw",
  authDomain: "kanban-eec37.firebaseapp.com",
  databaseURL: "https://kanban-eec37-default-rtdb.firebaseio.com",
  projectId: "kanban-eec37",
  storageBucket: "kanban-eec37.appspot.com",
  messagingSenderId: "54488392624",
  appId: "1:54488392624:web:5f4bb0845f5d1ed5792c75",
  measurementId: "G-X6M6QM6N8R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Init VK  Mini App
// bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
