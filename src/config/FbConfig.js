import firebase from 'firebase';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAZFErg3nfLZOqcau2dkCrENFPIN9p_BLQ",
    authDomain: "news-modal.firebaseapp.com",
    databaseURL: "https://news-modal.firebaseio.com",
    projectId: "news-modal",
    storageBucket: "news-modal.appspot.com",
    messagingSenderId: "1089218983198"
};
firebase.initializeApp(config);


export const auth = firebase.auth();

export default firebase;

