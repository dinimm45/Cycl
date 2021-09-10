(function (){


  function writeUserData(name) {

    var uid = firebase.auth().currentUser.uid;
  firebase.database().ref().child('accounts').child(name).set({
    name: name,
  });
}

})
