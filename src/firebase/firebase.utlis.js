import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config ={
    apiKey: "AIzaSyD5JMSrA-3_V0iJolcmC_uuAFdiKnw7W_o",
    authDomain: "clothing-e-commerce-7d24c.firebaseapp.com",
    projectId: "clothing-e-commerce-7d24c",
    storageBucket: "clothing-e-commerce-7d24c.appspot.com",
    messagingSenderId: "589596727161",
    appId: "1:589596727161:web:20a858c174c3e7e3edc1a8",
    measurementId: "G-XD3MYLE20E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }
    const userRef =  firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch( error){
            console.log('error creating user',error.message)
        }
    }
    return userRef;
    //console.log(snapShot)
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;