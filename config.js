import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyAcCHHXpCLTM0aj4DuNWQf9P14f-d8cf1g",
  authDomain: "pro---c67.firebaseapp.com",
  projectId: "pro---c67",
  storageBucket: "pro---c67.appspot.com",
  messagingSenderId: "311809334331",
  appId: "1:311809334331:web:36405a89b2fafeb631101e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();