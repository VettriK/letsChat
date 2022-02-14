
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBX14ZV6yJZOO5Z6cId_urm-zVDN_eDIKc",
      authDomain: "kwitter-188e3.firebaseapp.com",
      databaseURL: "https://kwitter-188e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-188e3",
      storageBucket: "kwitter-188e3.appspot.com",
      messagingSenderId: "999123393708",
      appId: "1:999123393708:web:0fad4e8092c20bd5d19309"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {

}