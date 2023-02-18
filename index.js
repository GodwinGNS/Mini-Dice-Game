let fristRondomNum = Math.floor(Math.random() * 6) + 1;

let firstDiceImage = "images/dice" + fristRondomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

//secondDiceImage
let secondRondomNum = Math.floor(Math.random() * 6) + 1;

let secondDiceImage = "images/dice" + secondRondomNum + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

//seting the logical function
if (firstDiceImage >
secondDiceImage) {
  document.querySelector("h1").innerHTML = "The winner is player 1  🏆";

} else if (secondDiceImage > firstDiceImage) {
  document.querySelector("h1").innerHTML = "The winner is Player 2🏆";

} else {
  document.querySelector("h1").innerHTML = "It is a draw";
}
