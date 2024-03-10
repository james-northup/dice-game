function returnDice1Roll() {
  var randomNumber1 = Math.floor(Math.random() * 6);
  if (randomNumber1 == 0) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (randomNumber1 == 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (randomNumber1 == 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (randomNumber1 == 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (randomNumber1 == 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  }
  return randomNumber1;
}

function returnDice2Roll() {
  var randomNumber2 = Math.floor(Math.random() * 6);
  if (randomNumber2 == 0) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (randomNumber2 == 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (randomNumber2 == 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (randomNumber2 == 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (randomNumber2 == 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }
  return randomNumber2;
}

function gameAction() {
  var randomNumber1 = returnDice1Roll(); // Capture the returned value
  var randomNumber2 = returnDice2Roll(); // Capture the returned value
  if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "⛳️ Player one wins!";
  } else {
    document.querySelector("h1").textContent = "Player two wins! ⛳️";
  }
}
