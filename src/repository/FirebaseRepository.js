import firebase from 'firebase';

const SESSION_COLLECTION = 'Session';
// Initialize Firebase
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const firebaseApp = firebase.initializeApp(config);
const database = firebaseApp.firestore();

const getSessionDoc = sessionId => database.collection(SESSION_COLLECTION).doc(sessionId);

const FirebaseRepository = {
    getSessionDoc
}

export default FirebaseRepository;

