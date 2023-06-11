import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWc5rVQBaTTtXdp0wM2eySRL2Rm0BNqZk",
  authDomain: "key-crafters.firebaseapp.com",
  projectId: "key-crafters",
  storageBucket: "key-crafters.appspot.com",
  messagingSenderId: "666753832650",
  appId: "1:666753832650:web:3a7a53c6fb6c759a7b8633",
  measurementId: "G-MWZ3DXLH8R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/* import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig); */