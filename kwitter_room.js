
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
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  function addRoom() {
      var roomname=document.getElementById("roomName").value
      firebase.database().ref("/").child(roomname).update({
          purpose:"addingRoom"
      })
      localStorage.setItem("roomName", roomname)
      window.location="kwitter_page.html"
  }
    
    // Initialize Firebase
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       roomname = childKey;
      //Start code
        row="<div class='room_name' id="+roomname+" onclick='redirectToRoomName(this.id)'>#"+roomname+" </div>"
        document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function logout() {
  localStorage.removeItem("username")
  localStorage.removeItem("roomname")
  window.location="index.html"
}

var username=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome "+username+"!"

function redirectToRoomName(name) {
  localStorage.setItem("roomname", name)
  window.location="kwitter_page.html"
}