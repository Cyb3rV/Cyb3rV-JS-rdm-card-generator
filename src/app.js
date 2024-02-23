/* eslint-disable */
import "bootstrap";
import "./style.css";

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function checkColor(suit) {
  if (suit === "♥" || suit === "♦") return "red";
  else return "black";
}

const suits = ["♦", "♥", "♠", "♣"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

window.onload = function() {
  //write your code here

  const currentSuit = getRandomNumber(4);
  const currentValue = getRandomNumber(13);

  console.log(`${suits[currentSuit]} ${values[currentValue]}`);
  document.body.style.background = "green";

  const tlSuit = document.createElement("p");
  const value = document.createElement("p");
  const brSuit = document.createElement("p");

  tlSuit.className = "col-auto";
  tlSuit.textContent = suits[currentSuit];
  tlSuit.style.fontSize = "120px";
  tlSuit.style.textAlign = "left";
  tlSuit.style.color = checkColor(suits[currentSuit]);

  value.className = "col-auto";
  value.textContent = values[currentValue];
  value.style.fontSize = "160px";
  value.style.textAlign = "center";
  value.style.fontWeight = "bold";

  brSuit.className = "col-auto";
  brSuit.textContent = suits[currentSuit];
  brSuit.style.fontSize = "120px";
  brSuit.style.textAlign = "right";
  brSuit.style.color = checkColor(suits[currentSuit]);

  const myDiv = document.querySelector("div");

  myDiv.className = "card mt-3 px-4";
  myDiv.style.width = "30rem";

  myDiv.appendChild(tlSuit);
  myDiv.appendChild(value);
  myDiv.appendChild(brSuit);
};
