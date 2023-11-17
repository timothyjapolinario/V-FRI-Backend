"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var firebaseConfig = {
    apiKey: "AIzaSyB9ejM1JXvt7YzcwR0EAk0UpcFUlLhIy7A",
    authDomain: "v-fri-a403e.firebaseapp.com",
    projectId: "v-fri-a403e",
    storageBucket: "v-fri-a403e.appspot.com",
    messagingSenderId: "1014763471953",
    appId: "1:1014763471953:web:ba59e4c3f4ee9b4cf3e470",
};
var firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
// Initialize Firebase
exports.default = firebaseApp;
