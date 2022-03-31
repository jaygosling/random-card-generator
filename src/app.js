/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let types = ["♥", "♦", "♣", "♠"];
let button = document.querySelector("#button");
let cardType = document.querySelector(".cardType");
let cardTypeB = document.querySelector(".cardTypeB");
let color = "";
let cardNum = document.querySelector(".cardNumber");
console.log(cardType);
button.addEventListener("click", function() {
  let num = numbers[Math.floor(Math.random() * 13)];
  let type = types[Math.floor(Math.random() * 4)];
  console.log(type);
  if (type == "♥" || type == "♦") {
    color = "red";
  } else if (type == "♣" || type == "♠") {
    color = "black";
  }
  cardType.innerHTML = type;
  cardTypeB.innerHTML = type;
  cardNum.innerHTML = num;
  cardNum.style.color = color;
  cardType.style.color = color;
  cardTypeB.style.color = color;
});
