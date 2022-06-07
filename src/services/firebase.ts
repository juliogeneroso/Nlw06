import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCX0buvYcomnB7_vZA9pvpRtXaIZhxj5FY",//process.env.REACT_APP_APP_API_KEY,
  authDomain: "letmeask-ac995.firebaseapp.com", //process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://letmeask-ac995-default-rtdb.firebaseio.com",//process.env.REACT_APP_DATABSE_URL,
  projectId: "letmeask-ac995",//process.env.REACT_APP_PROJECT_ID,
  storageBucket: "letmeask-ac995.appspot.com",//process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "906059873869",//process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:906059873869:web:cd1a97ddaf82149be0e604"//process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database();