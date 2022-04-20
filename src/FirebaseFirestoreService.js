import firebase from "./FirebaseConfig";
import "firebase/compat/firestore"; // need this because of the v9 update

const firestore = firebase.firestore();

const createDocument = (collection, data) => {
  //return firestore.collection(collection).doc(document).set(data);
  return firestore.collection(collection).add(data);
};

const readDocuments = (collection) => {
  return firestore.collection(collection).get();
};

const FirebaseFirestoreService = {
  createDocument,
  readDocuments,
};

export default FirebaseFirestoreService;
