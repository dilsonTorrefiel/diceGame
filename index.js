
// Return a List Collection of img objects in an array
// $(element) or jQuery(element) or document.querySelectorAll(element)
var image =$("img");

// Generate a random numbers from 0 - 0.9
var player1_dice = Math.random();
// Multiply random number by desired range
var player1 =Math.round(player1_dice*5)+1;
// select image based on the random number generated.
image[0].src="images/dice"+player1+'.png';


var player2_dice = Math.random();
var player2 =Math.round(player2_dice*5)+1;
image[1].src="images/dice"+player2+'.png';

// Comparison to check who wins
if(player1 > player2){
  document.querySelector("h1").innerHTML ="Player 1 Wins!";
}else if(player1 < player2){
  document.querySelector("h1").innerHTML ="Player 2 Wins!";
}else{
  document.querySelector("h1").innerHTML ="Tie, Refresh Again.";
}
