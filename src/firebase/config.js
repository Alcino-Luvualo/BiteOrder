import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvE8MAecisHoItPfB2vzysixPwzGxqD_0",
  authDomain: "biteorder-2025.firebaseapp.com", // Este será o novo domínio se mudares
  projectId: "biteorder-2025",
  storageBucket: "biteorder-2025.firebasestorage.app",
  appId: "1:420465671784:web:eb3b23d0301f26109005dd",
  measurementId: "G-5N46J9CMS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 