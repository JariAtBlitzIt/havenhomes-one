//import logo from './logo.svg';
//import './App.css';
// https://www.youtube.com/watch?v=2-LISBTczQE
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

function App() {
  return (
    <div>
    </div>
  );
}

export default App;
