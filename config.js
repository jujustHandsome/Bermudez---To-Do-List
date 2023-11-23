import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaiGggEgPd8gHOBipZ5K3PNeQhd0y-OcI",
  authDomain: "test-6762a.firebaseapp.com",
  projectId: "test-6762a",
  storageBucket: "test-6762a.appspot.com",
  messagingSenderId: "603956265828",
  appId: "1:603956265828:web:fa39c66faf87531633b071",
  measurementId: "G-WML0V396Z0"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };