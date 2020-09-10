import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCyfbiNBWCzyU81QqTfI8otGz5sPkyZnXg",
  authDomain: "react-refresh.firebaseapp.com",
  databaseURL: "https://react-refresh.firebaseio.com",
  projectId: "react-refresh",
  storageBucket: "react-refresh.appspot.com",
  messagingSenderId: "1020924246100",
  appId: "1:1020924246100:web:d7185d253df9f349e695c1",
  measurementId: "G-BC69NZCX4W"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  console.log(snapShot);
}

export default firebase;