import * as app from "firebase/app";

import "firebase/auth";
import "firebase/database";

let firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};
// Initialize Firebase
export const firebase = app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
