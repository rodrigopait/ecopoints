import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ecopointsFirebaseCredentials } from "./credentials";

const firebaseConfig = ecopointsFirebaseCredentials;

// Get firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore();
