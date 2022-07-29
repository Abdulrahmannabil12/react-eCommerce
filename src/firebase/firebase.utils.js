import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const config = {
    apiKey: "AIzaSyB6OKb9SnpP7glwmGpbb3jms5juOERpUek",
    authDomain: "reacttestapp-c503f.firebaseapp.com",
    projectId: "reacttestapp-c503f",
    storageBucket: "reacttestapp-c503f.appspot.com",
    messagingSenderId: "1098158468823",
    appId: "1:1098158468823:web:e3e3c0b0d739f445894a92",
    measurementId: "G-JLT2BH2ERJ"
};

firebase.initializeApp(config);
 export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
