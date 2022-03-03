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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
        //console.log(newDocRef);
    })
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map( doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    //console.log(transformedCollections)
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;