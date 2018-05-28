import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyAKRe5tKAPboQqYxIGH6888qvT54fDKWog",
    authDomain: "mod3-personal.firebaseapp.com",
    databaseURL: "https://mod3-personal.firebaseio.com",
    projectId: "mod3-personal",
    storageBucket: '',
    messagingSenderId: "892875262249"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();
  
  export {
    auth,
  };