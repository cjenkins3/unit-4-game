$(document).ready(function() {
    var Random = Math.floor(Math.random() * 150+25)
    //selects a random number to be shown at the beg. of the game
    //Number should be between 25 - 175

$("#randomNumber").text(Random); 

var num1 = Math.floor(Math.random() * 11+1)
var num2 = Math.floor(Math.random() * 11+1)
var num3 = Math.floor(Math.random() * 11+1)
var num4 = Math.floor(Math.random() * 11+1)

var userTotal = 0;
var wins = 0;
var losses = 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);


//resets the game
function reset() {
    Random = Math.floor(Math.random() * 150+25);
    console.log(Random)
    $("#randomNumber").text(Random);
    num1 = Math.floor(Math.random() * 11+1);
    num2 = Math.floor(Math.random() * 11+1);
    num3 = Math.floor(Math.random() * 11+1);
    num4 = Math.floor(Math.random() * 11+1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
}
function won() {
    alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    reset();
}
function lose() {
    alert("You lost!");
    losses++;
    $("#numberLosses").text(losses);
    reset()
}
//set up click for gems
$("#one").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random){
        lose();
    }
})
$("#two").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random){
        lose();
    }
})
$("#three").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random){
        lose();
    }
})
$("#four").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == Random) {
        won();
    }
    else if (userTotal > Random){
        lose();
    }
});
});