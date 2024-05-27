function collectbalsabadge() {
    alert("Congratulations! You have collected the Balsa Badge. The Balsa tree, or Ochroma pyramidale is native to the Americas and known for its soft wood, which is used in woodworking.");
}
function collectfishbadge() {
    alert("Congratulations! You have collected the Special Fish Badge. Atlantic Cod can live for more than 20 years, and range from Greenland to North Carolina. They have a whisker like organ called a barbel on the bottom of their head.");
}
function newpost() {
    var name = document.getElementById("username");
    var message = document.getElementById("message");
    document.getElementById("post").innerHTML = "message +'-'+ name"
}