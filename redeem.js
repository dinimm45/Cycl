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


firebase.auth().onAuthStateChanged(FirebaseUser => {
  if (FirebaseUser) {

    var amountcounter = 0;

    function amountcounterdatabase(){


      var amountcounterFirebase= firebase.database().ref().child(uid).child('users').child("amount");
      amountcounterFirebase.transaction(function(amountcounter) {


      if (amountcounter < 15 ) {
        alert("you dont have enough Cycl Coins")
        couponbtn.disabled=true;
      }else {
        return  amountcounter - 15;
      }

    });
    }


    function refreshResults () {
      document.getElementById('amountaccount').innerHTML= 'You have : ' + amountcounter + " CC";
      if (amountcounter == 70) {
        alert("you have 70")
        console.log(amountcounter);
      }
      else {
        amountaccount=0;
      }

    }

    var uid=firebase.auth().currentUser.uid;
    var database=firebase.database();
    var couponbtn=document.getElementById("redeembtn");


    var amountfirebase = database.ref().child(uid).child('users').child("amount");
    amountfirebase.on('value', function(snapshot) {
      amountcounter = snapshot.val();
      refreshResults();
    });

  couponbtn.addEventListener("click",function(){

    amountcounterdatabase()



  });

    console.log(FirebaseUser);
  }else {
    console.log("not logged in");
  }
});



//copy

// var amountfirebase=firebase.database().ref().child(uid).child("users/").child("amount");
// amountfirebase.on('value',function(snapshot){
// amountfirebase=snapshot.val();
// refreshResults();
// });
// document.getElementById("amountaccount").innerHTML= "You have " + amountfirebase + " CC";
//






//kart




}());
