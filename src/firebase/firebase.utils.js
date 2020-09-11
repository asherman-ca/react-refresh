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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // no action taken for unauthed users
  if (!userAuth) return;
  
  // uid = id for a google user that represents their auth to your site
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  // if they have an auth without a user account, this creates one. mostly fires on initial auth.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message)
    }
  }
  
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;