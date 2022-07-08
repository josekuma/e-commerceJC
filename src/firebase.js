import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA-yG1oeZZQyPV0_da3Etf9vAaFJ4X-Ydo",
    authDomain: "e-commercejk.firebaseapp.com",
    projectId: "e-commercejk",
    storageBucket: "e-commercejk.appspot.com",
    messagingSenderId: "664765452050",
    appId: "1:664765452050:web:1b64bd16421a32cb1eedcb",
    measurementId: "G-MSS1NRTYY4"
  };

  const firebaseApp=initializeApp(firebaseConfig);

  const auth= getAuth(firebaseApp);

  export {auth};