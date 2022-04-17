//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBX14ZV6yJZOO5Z6cId_urm-zVDN_eDIKc",
    authDomain: "kwitter-188e3.firebaseapp.com",
    databaseURL: "https://kwitter-188e3-default-rtdb.firebaseio.com",
    projectId: "kwitter-188e3",
    storageBucket: "kwitter-188e3.appspot.com",
    messagingSenderId: "999123393708",
    appId: "1:999123393708:web:0fad4e8092c20bd5d19309"
  };
  firebase.initializeApp(firebaseConfig);
  var userName=localStorage.getItem("username")
  var roomName=localStorage.getItem("roomname")
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
    window.location="index.html"
}
  
function send() {
    var Message=document.getElementById("Message").value;
    firebase.database().ref(roomName).push({
        like:0,
        message: Message,
        user: userName
  })
  document.getElementById("Message").value=""
  
  }