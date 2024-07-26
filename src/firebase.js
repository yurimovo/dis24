import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNLUiN1cxJ63hA-Cs2r0rREEHN8WW2c34",
    authDomain: "dis24-b874a.firebaseapp.com",
    projectId: "dis24-b874a",
    storageBucket: "dis24-b874a.appspot.com",
    messagingSenderId: "319408672818",
    appId: "1:319408672818:web:ed57c460625edde92a2c2b",
    measurementId: "G-17X2WTTQTW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;