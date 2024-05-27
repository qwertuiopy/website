function newpost() {
    var name = document.getElementById("username");
    var message = document.getElementById("message");
    document.getElementById("messages").innerHTML = message+" - "+name
}