import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD3SsTn0sovJFf5sH9wghq4_vlGjMjyEIw",
    authDomain: "projectf-9ee6f.firebaseapp.com",
    projectId: "projectf-9ee6f",
    storageBucket: "projectf-9ee6f.appspot.com",
    messagingSenderId: "324621927450",
    appId: "1:324621927450:web:e5b8cb5a2748b0bdf93da3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;