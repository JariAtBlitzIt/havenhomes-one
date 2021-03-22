//import logo from './logo.svg';
//import './App.css';
// https://www.youtube.com/watch?v=2-LISBTczQE
import React, { useState, useEffect } from 'react';
// Components
import Button from './components/Button';
import Channel from './components/Channel';
// FireBase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAne5tKo2DkOKWDgxwmHjybP6bmR8A5JZ0",
  authDomain: "havenhomesapp-3c560.firebaseapp.com",
  projectId: "havenhomesapp-3c560",
  storageBucket: "havenhomesapp-3c560.appspot.com",
  messagingSenderId: "590401661642",
  appId: "1:590401661642:web:ee3ae8130576d286ca6233"
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            if (initializing) {
                setInitializing(false);
            }
        });
        // Cleanup subscription
        return unsubscribe;
    }, [])

    const signInWithGoogle = async() => {
        // Retrieve Goolge provider object
        const provider = new firebase.auth.GoogleAuthProvider();
        // Set language to the default browser preference
        auth.useDeviceLanguage();
        // Start sign in process
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async() => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error.message);
        }
    };

    if (initializing) return 'Loading ... ';

    return ( 
      <div>
        {user ? (
          <> 
            <Button onClick={signOut}>Sign out</Button>  
            <p> Welcome to the chat </p>
            <Channel user={user} db={db}/>
          </>
        ) : ( 
          <Button onClick={signInWithGoogle}> Sign in with Google </Button>
        )} 
      </div>
    );
}

export default App;


/*
function App() {
  return (
    <div>
    </div>
  );
}
*/

// export default App;
