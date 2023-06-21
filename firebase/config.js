  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"; 
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js"
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"
  import { getStorage }
  const firebaseConfig = {
    apiKey: "AIzaSyDntbi5vPU74cGBiMBTCI_XNNNazm7gWdY",
    authDomain: "web1-5df7f.firebaseapp.com",
    databaseURL: "https://web1-5df7f-default-rtdb.firebaseio.com",
    projectId: "web1-5df7f",
    storageBucket: "web1-5df7f.appspot.com",
    messagingSenderId: "51740552775",
    appId: "1:51740552775:web:3eb0964efa056d5b3a8b62",
    measurementId: "G-97ZG7384XF"
  };

  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app)
  

  export { auth, db }

  
