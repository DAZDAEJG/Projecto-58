import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDeL7HX8QU0jrGR6VpU3k2-FmMp76HPd7Q",
  authDomain: "newsletter-a26cb.firebaseapp.com",
  databaseURL: "https://newsletter-a26cb-default-rtdb.firebaseio.com",
  projectId: "newsletter-a26cb",
  storageBucket: "newsletter-a26cb.appspot.com",
  messagingSenderId: "989810362423",
  appId: "1:989810362423:web:4aded3f03b4f16053a97b2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();