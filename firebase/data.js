import firebase from "firebase/app";
import "firebase/app"
import "firebase/firestore"

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();

const cityRef = db.collection('UserAccount').doc('rOLIMiecVAR0uEhzqg0miuQIm0G2')
const doc = cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}