var firebaseConfig = {
  apiKey: "AIzaSyBvttmCJzrhh6vRD7wH2kBAW4GqR7L5NgQ",
  authDomain: "checkinlovegdl-2806.firebaseapp.com",
  databaseURL: "https://checkinlovegdl-2806.firebaseio.com",
  projectId: "checkinlovegdl-2806",
  storageBucket: "",
  messagingSenderId: "428865783596",
  appId: "1:428865783596:web:4a23598839d4b3a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      console.log("in: main.js signInSuccessWithAuthResult");
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      console.log("in: main.js uiShown");
      // The widget is rendered.
      // Hide the loader.
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "muro.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: "index.html",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>"
};
let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#authContainer", uiConfig);


//Verifica si el usuario esta conectado y toma informacion sobre el
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log("El usuario esta conectado");
    console.log(email);
    console.log(displayName);
    document.getElementById("userName").innerHTML = "Bienvenido " + displayName;

  } else {
   console.log("El usuario NO esta conectado");
  }
});
//cerrar sesion
const logOut = () =>{
  firebase.auth().signOut().then(function() {
  console.log("el usuario se desconectó correctamente");
}).catch(function(error) {
console.log(error);
});
location.assign("index.html");
};
document.getElementById("logOut").addEventListener("click", logOut);
