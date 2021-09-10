(function (){
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

  firebase.initializeApp(firebaseConfig);

var scnnrbtn=document.getElementById("scannbtn");
var signout=document.getElementById("hidesignoff");
var redeem=document.getElementById("redeem");
var signin=document.getElementById("hidesignin");
var database = firebase.database();
var user = firebase.auth().currentUser;
var email= firebase.auth().currentUser && firebase.auth().currentUser.email;
var signoutbtn=document.getElementById("logoff");



scnnrbtn.addEventListener("click", function(){
  firebase.auth().onAuthStateChanged(FirebaseUser => {


    if (FirebaseUser) {
      window.location.href=("scanner.html")
      console.log(FirebaseUser);
    }else {
      console.log("not logged in");
      window.location.href=("login.html");
    }

    var users = firebase.database().child(uid).child("users/");

    users.push ({
       info: {
          email: email

       }
    });

    });
    var uid= firebase.auth().currentUser.uid;

});
signout.addEventListener("click", function(){
  firebase.auth().signOut();
});

redeem.addEventListener("click",function(){
  window.location.href=("Redeem.html")
});

firebase.auth().onAuthStateChanged(FirebaseUser => {
if (FirebaseUser) {
  console.log(FirebaseUser);
  signin.style.display="none";

}else {
  console.log("not logged in");
  signoutbtn.style.display = "none";
  redeem.style.display="none";
}
});


//kart




}());
