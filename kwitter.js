function login() {
    var username = document.getElementById("userName").value
    localStorage.setItem("username", username)
    window.location="kwitter_room.html"
}
