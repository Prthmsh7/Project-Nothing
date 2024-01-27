const firebase=require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyAGqrywIKL4vqOxNXJsMDI5pI0vrsNs8vk",
    authDomain: "semi-colon-2eaa0.firebaseapp.com",
    projectId: "semi-colon-2eaa0",
    storageBucket: "semi-colon-2eaa0.appspot.com",
    messagingSenderId: "1098025317559",
    appId: "1:1098025317559:web:3683a04c8c83f56955c932",
    measurementId: "G-CZ04JP8KSQ"
  };
  firebase.initilizeApp(firebaseConfig)
  const db=firebase.firestore()
  const User=db.collection("Users")
  module.exports=User;