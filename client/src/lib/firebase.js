import firebase from "firebase/app";

import "firebase/auth";
import { firebaseConfig } from "../config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const storage = firebase.storage();

export default firebase;
