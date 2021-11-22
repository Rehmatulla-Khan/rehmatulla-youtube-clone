import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzqMxbaacbBzxGFr9GzsNS_9hnMcCrblo",
  authDomain: "rehmatulla-yt-clone.firebaseapp.com",
  projectId: "rehmatulla-yt-clone",
  storageBucket: "rehmatulla-yt-clone.appspot.com",
  messagingSenderId: "522138954454",
  appId: "1:522138954454:web:e35146fd8d61b60a797777",
  measurementId: "G-EDJER613H3",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
