window.addEventListener('load', function () {
  let selectedDeviceId;
  var count=0;
  var database = firebase.database();
  const codeReader = new ZXing.BrowserMultiFormatReader()
  console.log('ZXing code reader initialized')
  codeReader.listVideoInputDevices()

  codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {


    if (result) {
  
      const auth= firebase.auth();
      console.log(result)

      var station=["1002","12313123123", "5000112636833"];
      var msg=document.getElementById("message");
      for(let i=0; i<station.length; i++){ 

  if (result == station[i]) {
var station_bag = firebase.database().ref().child('place').child("bag")
station_bag.transaction(function(result) {
  alert("beholderen er nå tom");
   return result = 0;

});

return

} 
}

if (err && !(err instanceof ZXing.NotFoundException)) {
console.error(err)
document.getElementById('rezlt').textContent = err
}

else{
this.alert("Ops en feil har oppståt prøv på nytt")
}

}

  /* find the fuck out of the auth  firebase.auth().onAuthStateChanged(FirebaseUser => {
      if (FirebaseUser) {
        window.open("index.html");
        console.log(FirebaseUser);
      }else {
        console.log("not logged in");
      }
    });*/


     
  })
  console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
})

// document.getElementById('resetButton').addEventListener('click', () => {
//   codeReader.reset()
//   document.getElementById('result').textContent = '';
//   console.log('Reset.')
// })






// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTR4_vw3x8pTxIAiS8Y0-3T4APCwotpyg",
  authDomain: "cycl-77b6c.firebaseapp.com",
  databaseURL: "https://cycl-77b6c.firebaseio.com",
  projectId: "cycl-77b6c",
  storageBucket: "cycl-77b6c.appspot.com",
  messagingSenderId: "139900263133",
  appId: "1:139900263133:web:9c72ae1fd6569fe6a1d934",
  measurementId: "G-VPV104NQQW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
   

    
   

    
