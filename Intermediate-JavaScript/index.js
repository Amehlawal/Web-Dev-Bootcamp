prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 100) {
    alert("Your love score is" + loveScore + "%" + "you love each other like Kany loves Kanye.");
}
if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is" + loveScore + "%");
}
if (loveScore <= 30) {
    alert("Your love score is" + loveScore + "%" + "You go together like oil and water.");
}else {
    alert("No love" + loveScore);
}


var age = 20;

if (age > 19) {
    console.log("I am going to be a star");

}
else{
    alert(
        "He is a criminal"
    )
}