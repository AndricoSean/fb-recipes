import firebase from "./FirebaseConfig";
import "firebase/compat/firestore"; // need this because of the v9 update

const firestore = firebase.firestore();

const createDocument = (collection, document, data) => {
  //return firestore.collection(collection).doc(document).set(data);
  return firestore.collection(collection).add(data);
};

const FirebaseFirestoreService = {
  createDocument,
};

export default FirebaseFirestoreService;
