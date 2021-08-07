import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBm0gfmYFhC8ASDh71UNFrWqT4o1oB5hV0",
  authDomain: "to-do-list-react-c53c8.firebaseapp.com",
  projectId: "to-do-list-react-c53c8",
  storageBucket: "to-do-list-react-c53c8.appspot.com",
  messagingSenderId: "217746853532",
  appId: "1:217746853532:web:45e61893d7639dc2066759",
  measurementId: "G-ERXLLVKSR8"
});
  
  const db = fireBaseApp.firestore();

  // export {db} 
   export default db;