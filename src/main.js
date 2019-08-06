const uName = document.getElementById("nombreUsuario");
const pass = document.getElementById("password");
const cUserName =document.getElementById("name");
const cUserMail = document.getElementById("mail");
const cUserPhone = document.getElementById("phoneNumber");
const cUserPass = document.getElementById("createPassword");
const cUserConPass = document.getElementById("confirmPassword");
const btnCUser = document.getElementById("register");

btnCUser.addEventListener("click", ()=>{

let name =  cUserName.value;
let mail = cUserMail.value;
let phone = cUserPhone.value;
let pass = cUserPass.value;
let cpass = cUserConPass.value;

createNewUser(mail,pass);


})

const createNewUser = (email,pass) =>{

  firebase.auth().createUserWithEmailAndPassword(email,pass).
  then(function (user){
    console.log('¡Creamos al usuario!');
    console.log(user);
    const userId = firebase.auth().currentUser.uid;
    goToWelcome();

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  })

};


const goToRegistry = () => {

  homePage.style.display = "none";
  profilePage.style.display = "none";
  signInPage.style.display = "block";
};
let signIn = document.getElementById("signIn");
signIn.addEventListener("click", goToRegistry);
let modifyData = document.getElementById("modifyData");
modifyData.addEventListener("click", goToRegistry);

const goToWelcome = () => {
  homePage.style.display = "none";
  signInPage.style.display = "none";
  welcomePage.style.display = "block";
  uName.value;
  document.getElementById("userName").innerHTML = "Bienvenido " + uName.value;
};

const logIn = document.getElementById("logIn");
logIn.addEventListener("click", goToWelcome);
const register = document.getElementById("register");
register.addEventListener("click", goToWelcome);

const goToGuest = () => {
  homePage.style.display = "none";
  guestWelcomePage.style.display = "block";
};
const guest = document.getElementById("guest");
guest.addEventListener("click", goToGuest);

const goToProfile = () => {
  welcomePage.style.display = "none";
  profilePage.style.display = "block";
};
const profile = document.getElementById("profile");
profile.addEventListener("click", goToProfile);

const goToCheckIn = () => {
  welcomePage.style.display = "none";
  checkInPage.style.display = "block";
};
/*const checkIn = document.getElementById("checkIn");
checkIn.addEventListener("click", goToCheckIn);

const geoLog = document.getElementById('geoLocal');

geoLog.addEventListener("click",() => {

  navigator.geolocation.getCurrentPosition(viewMap,ViewError,{timeout:1000});

  var lon = position.coords.longitude;	//guardamos la longitud
	var lat = position.coords.latitude;		//guardamos la latitud

	var link = "http://maps.google.com/?ll="+lat+","+lon+"&z=14";
	document.getElementById("long").innerHTML = "Longitud: "+lon;
	document.getElementById("latitud").innerHTML = "Latitud: "+lat;

	document.getElementById("link").href = link;

});

/*const goToCheckIn = () => {
  welcomePage.style.display = "none";
  checkInPage.style.display = "block";
};
const checkIn = document.getElementById("checkIn");
checkIn.addEventListener("click", goToCheckIn);

*/

/*
const goToEncode = () => {
  homePage.style.display = "none";
  encodePage.style.display = "block";
  buttonReturn.style.display = "block";
  };

let encode = document.getElementById("encode");
encode.addEventListener("click", goToEncode);
*/
