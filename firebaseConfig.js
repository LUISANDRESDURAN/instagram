import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCxYt5qN61iPPFFcIlqdWMDsSGeodVpZiI",
  authDomain: "cloneinstagram-4c441.firebaseapp.com",
  projectId: "cloneinstagram-4c441",
  storageBucket: "cloneinstagram-4c441.firebasestorage.app",
  messagingSenderId: "282612450129",
  appId: "1:282612450129:web:884a15092c91ab8f8ec970",
  measurementId: "G-3LGZJ2VJDZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export {app, db};