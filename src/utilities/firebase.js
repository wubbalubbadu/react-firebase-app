import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update,connectDatabaseEmulator } from 'firebase/database';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithCredential } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDubBAukJO2U88l6O-mUXvT8_5F5erjYVE",
    authDomain: "scheduler-react-firebase-f179f.firebaseapp.com",
    databaseURL: "https://scheduler-react-firebase-f179f-default-rtdb.firebaseio.com",
    projectId: "scheduler-react-firebase-f179f",
    storageBucket: "scheduler-react-firebase-f179f.appspot.com",
    messagingSenderId: "1000376041001",
    appId: "1:1000376041001:web:6ab57a5a49c40116c0e638",
    measurementId: "G-YF286BQJ9E"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

if (process.env.REACT_APP_EMULATE === "true") {
  const testFirebase = initializeApp(firebaseConfig);
  const testDB = getDatabase(testFirebase);
  const testAuth = getAuth(testFirebase);

  connectAuthEmulator(testAuth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(testDB, "127.0.0.1", 9000);

  signInWithCredential(
    testAuth,
    GoogleAuthProvider.credential(
      '{"sub": "M1nKdqHLqL8mdVKO25NsOEMenYZG", "email": "test@gmail.com", "displayName":"Test User", "email_verified": true}'
    )
  );
}

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ));

  return [user];
};