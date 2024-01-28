// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3JBJ2f-IZYUiZir564bCeuK3mLLfHCY8",
  authDomain: "river-span-397610.firebaseapp.com",
  projectId: "river-span-397610",
  storageBucket: "river-span-397610.appspot.com",
  messagingSenderId: "622781954448",
  appId: "1:622781954448:web:360fa7b48f4b2731031b15",
  measurementId: "G-50JNBPC4P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(); 
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider).then((result) => {
  console.log(result);
}
).catch((error) => {
  console.log(error);
}
);  