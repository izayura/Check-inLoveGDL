const uName = document.getElementById('nombreUsuario');
const pass = document.getElementById('password');



const goToRegistry = () => {
  homePage.style.display = "none";
  profilePage.style.display = "none";
  signInPage.style.display = "block";
};
const signIn = document.getElementById("signIn");
signIn.addEventListener("click", goToRegistry);
const modifyData = document.getElementById("modifyData");
modifyData.addEventListener("click", goToRegistry);


const goToWelcome = () => {
  homePage.style.display = "none";
  signInPage.style.display = "none";
  welcomePage.style.display = "block";
  let name=document.getElementById("nombreUsuario").value;
  document.addEventListener("userName").innerHTML="Bienvenido "
+ name;
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
const checkIn = document.getElementById("checkIn");
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
