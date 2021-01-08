import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";
import App from "./components/App/App";
import * as backend from './models/firebase';

// Init VK  Mini App
// bridge.send("VKWebAppInit");

backend.initialize();

ReactDOM.render(<App />, document.getElementById("root"));
