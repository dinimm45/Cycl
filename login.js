(function(){

const firebaseConfig = {
  apiKey: "AIzaSyAV2_eu5cnRDNp5eq9AjTuX8q0XiRT3EZw",
  authDomain: "cycl-e6998.firebaseapp.com",
  databaseURL: "https://cycl-e6998.firebaseio.com",
  projectId: "cycl-e6998",
  storageBucket: "cycl-e6998.appspot.com",
  messagingSenderId: "16228296144",
  appId: "1:16228296144:web:a60e1aaa1ee9d8f4aa05d5",
  measurementId: "G-3BVVW1GDNC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//get email and pass
var txtemail=document.getElementById("email");
var resetbutton=document.getElementById("forgotpass");
var txtpassword=document.getElementById("passwrd");
var btnlogin=document.getElementById("login");
var btnsignup=document.getElementById("signup");
var btnlLogout=document.getElementById("logout");
var database = firebase.database();


btnlogin.addEventListener("click", e=>{
  //get email and passwrd
  if (txtemail.value=="") {
    alert("please write your email adress")

  }else {

    var email=txtemail.value;
    var password=txtpassword.value;
    const auth= firebase.auth();
  //sign in
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e => console.log(e.message));

  }

});
//add singup event
btnsignup.addEventListener("click", e=>{
  //get email and pass
  //TODO CHECK 5 REAL EMAIL
  window.location.href=("member.html");


});

resetbutton.addEventListener("click",function() {
  window.location.href=("resetpass.html");
});
//realtile listener
//we can check if we are logged in from here aswell
//if user is loged in forward to the map.
firebase.auth().onAuthStateChanged(FirebaseUser => {
  if (FirebaseUser) {
    window.location.href=("index.html")
    console.log(FirebaseUser);
  }else {
    console.log("not logged in");
  }
});

}());

// TODO: Verifes email adresses
// TODO: email addresses has to be godkjent
// TODO: Forgot passwrd fixing
// TODO: redeeming
// TODO: connect firebase to the respected stores and partners
// TODO: kilometers
//gps as icon
// TODO: for extra fix the maps
