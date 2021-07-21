import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey:"AIzaSyDWevhFEBu54KJTV1PrRkvJ9IAMUfb9xbc",
    authDomain:"clone-849f0.firebaseapp.com",
    databaseURL:"https://clone-849f0.firebaseio.com",
    projectId:"clone-849f0",
    storageBucket:"clone-849f0.appspot.com",
    messagingSenderId:"791047340859",
    appId:"1:791047340859:web:b8a2cefa7b0d5adf08ad1e",
    measurementId: "G-R24N4P2W1F"
});

const auth = firebase.auth();

export { auth };