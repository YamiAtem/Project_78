import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDVRaVGGKv100qGAGLQ75PRFxilgng_B1U",
    authDomain: "attendenceapp-a49dd.firebaseapp.com",
    databaseURL: "https://attendenceapp-a49dd-default-rtdb.firebaseio.com",
    projectId: "attendenceapp-a49dd",
    storageBucket: "attendenceapp-a49dd.appspot.com",
    messagingSenderId: "389865715660",
    appId: "1:389865715660:web:e905ed6d447917c526cf69"
};

firebase.default.initializeApp(firebaseConfig);

export default firebase.default.firestore();