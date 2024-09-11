import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDzByBT6FRSRaGCS-ix6Bt0EKRDTxjlmhQ",
  authDomain: "my-portifolio-e6f5a.firebaseapp.com",
  projectId: "my-portifolio-e6f5a",
  storageBucket: "my-portifolio-e6f5a.appspot.com",
  messagingSenderId: "976113733511",
  appId: "1:976113733511:web:7ee3120312d667c5ea8d22",
  measurementId: "G-9QCC3FMPQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
