// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzzHDi5WEKURMcz7UlZqmLAB93_vt5YU8",
  authDomain: "app1-ce39e.firebaseapp.com",
  projectId: "app1-ce39e",
  storageBucket: "app1-ce39e.appspot.com",
  messagingSenderId: "78831971817",
  appId: "1:78831971817:web:2c96d7af5a71fcedddef78"
};
let app;
if(firebase.apps.length=== 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app =firebase.app();
}

const auth = firebase.auth();

export {auth};