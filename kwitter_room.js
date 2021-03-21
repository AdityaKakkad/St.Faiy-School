var firebaseConfig = {
      apiKey: "AIzaSyB9IqaF_JZl1Xgmxh5tuuY4PQCJbHerkFY",
      authDomain: "kwitter-da47f.firebaseapp.com",
      databaseURL:"https://kwitter-da47f-default-rtdb.firebaseio.com/",
      projectId: "kwitter-da47f",
      storageBucket: "kwitter-da47f.appspot.com",
      messagingSenderId: "187313842398",
      appId: "1:187313842398:web:d3dfffd191eff81f413a4f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
