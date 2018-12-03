import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB35XG0W9XnvSpvRAbK6LYiqBY9SlD37wo",
    authDomain: "calmly-f3ce2.firebaseapp.com",
    databaseURL: "https://calmly-f3ce2.firebaseio.com",
    projectId: "calmly-f3ce2",
    storageBucket: "calmly-f3ce2.appspot.com",
    messagingSenderId: "745694917519"
};

const firebaseAuth = firebase.initializeApp(firebaseConfig);

export default firebaseAuth; 