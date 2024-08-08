import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbuyJuf55xQhq2YNE8MKnPRZFJvdF06g",
  authDomain: "our-voice-8eee9.firebaseapp.com",
  projectId: "our-voice-8eee9",
  storageBucket: "our-voice-8eee9.appspot.com",
  messagingSenderId: "1017877873417",
  appId: "1:1017877873417:web:f8d5ad8c1e551fb5d3c9d8",
  measurementId: "G-GTCEZ8BZ4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
