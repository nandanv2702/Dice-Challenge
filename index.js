// Function to calculate a random number between 1 and 6

function getRandNum() {
  num = Math.random();
  num *= 6;
  num = Math.ceil(num);
  return num;
}

// Variables assigned for random numbers, image file names, and retrieval of images

let randomNumber1 = getRandNum();
let randomNumber2 = getRandNum();

let fileName1 = "images/dice" + randomNumber1 + ".png";
let fileName2 = "images/dice" + randomNumber2 + ".png";

let image1 = document.getElementsByTagName("img")[0];
let image2 = document.getElementsByTagName("img")[1];

// Change the image for randomNumber1

image1.setAttribute("src", fileName1);

// Change the image for randomNumber2

image2.setAttribute("src", fileName2);

// Comparing the numbers to output which one wins in the container h1 section

if(randomNumber1>randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else if(randomNumber1<randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 2 Wins!";
}
else {
  document.querySelector(".container h1").textContent = "Draw!";
}
