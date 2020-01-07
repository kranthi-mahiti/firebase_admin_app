import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCO0y3PIwthmhTcziPwSLomJJG3ueQFuYw",
    authDomain: "realtimechatting-d28f5.firebaseapp.com",
    databaseURL: "https://realtimechatting-d28f5.firebaseio.com/",
    projectId: "realtimechatting-d28f5",
    storageBucket: "gs://realtimechatting-d28f5.appspot.com",
    messagingSenderId: "919282323349"
  };

  const MyStore = firebase.initializeApp(config);

  export default MyStore;