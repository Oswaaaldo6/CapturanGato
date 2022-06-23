import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxoWvIDPxhUWjwatAPAtS_vmivLad6oYI",
  authDomain: "fir-capturando-gato-crud.firebaseapp.com",
  projectId: "fir-capturando-gato-crud",
  storageBucket: "fir-capturando-gato-crud.appspot.com",
  messagingSenderId: "397967469001",
  appId: "1:397967469001:web:c80587efa636cdcc4a6018"
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


const auth = getAuth(app);

export { projectStorage, projectFirestore, timestamp, auth };
