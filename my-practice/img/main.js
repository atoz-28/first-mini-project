/*
function playGuessingGame() {
  let secretNumber = Math.floor(Math.random() * 20) + 1; // Random number between 1 and 20
  let maxTries = 5;

  console.log("🎯 Welcome to the Guessing Game!");
  console.log("I'm thinking of a number between 1 and 20.");
  console.log("You have " + maxTries + " tries. Good luck!");

  for (let tries = 1; tries <= maxTries; tries++) {
    let playerGuess = parseInt(prompt("Guess #" + tries + ":"));

    if (playerGuess === secretNumber) {
      console.log("🎉 You got it! The number was " + secretNumber);
      return; // Ends the game
    } else if (playerGuess < secretNumber) {
      console.log("📉 Too low!");
    } else if (playerGuess > secretNumber) {
      console.log("📈 Too high!");
    } else {
      console.log("🤔 That's not a number!");
    }
  }

  console.log("😢 Out of tries! The number was " + secretNumber);
}

*/





/*

    function calculate() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operator = document.getElementById('operator').value;
      let result;

      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
      } else {
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Can't divide by zero!";
            break;
          default:
            result = "Invalid operator";
        }
      }

      document.getElementById('result').textContent = "Result: " + result;
    }

    */








































/*
    const anime = ["Luffy", "Naruto", "Gaara", "Goku"];
    const characterUpper = anime.map(upperCase);

    console.log(characterUpper);


    function upperCase(element){
      return element.toUpperCase();
    }

*/


























/*
const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;


function convert(){
  if(toFahrenheit.checked){
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°";

  } else if(toCelcius.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°";
    

  } else {
    result.textContent = "Select a unit";
  }

}
  */
















/*
const numbers = [4, 6, 8, 12, 45, 56];
const miniMum = numbers.filter(getMin);

function getMin(element){
  return Math.min(element % 2 === 0);
}

console.log(miniMum);



const grades = [4, 6, 8, 12, 45, 56];
const minumum = grades.reduce(function getMin(one, two){
  return Math.min(one, two);
}
);



console.log(minumum);

*/















/*
class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }

  calculateTotal(){
    return this.price + (this.price * saleTax);
  }
}

const saleTax = 0.05;
const product1 = new Product("Socks", 19.99);
const product2 = new Product("Cap", 30.50);
const product3 = new Product("Shirt", 70.45);

product2.displayProduct();

const total = product2.calculateTotal(saleTax);
  console.log(`Total price (with tax): $${total.toFixed(2)}`);

*/




































/*
class Haircut{
  constructor(name, price, duration){
    this.name = name;
    this.price = price;
    this.duration = duration;
  }

  displayService(){
      console.log(`Haircut: ${this.name}`);
      console.log(`Price: ${this.price.toFixed(2)}`);
      console.log(`Duration: ${this.duration}`);
  }

  calculateTotal(customerTip){
    return this.price + (this.price * customerTip);
  }
}


const haircut1 = new Haircut("Taper fade", 29.99, "30 mins");
const haircut2 = new Haircut("16 Guard", 34.99, "35 mins");


haircut2.displayService();

const total = haircut2.calculateTotal(0.15);
console.log(`Total price (with tip): $${total.toFixed(2)}`);






class Haircut {
  constructor(name, basePrice, duration) {
    this.name = name;
    this.basePrice = basePrice;
    this.duration = duration; // e.g., "30 mins"
  }

  displayService() {
    console.log(`Service: ${this.name}`);
    console.log(`Base Price: $${this.basePrice.toFixed(2)}`);
    console.log(`Duration: ${this.duration}`);
  }

  calculateTotalPrice(tipRate) {
    return this.basePrice + (this.basePrice * tipRate);
  }
}

// Create an instance
const haircut1 = new Haircut("Taper fade", 29.99, "30 mins");

// Use the methods
haircut1.displayService();

const total = haircut1.calculateTotalPrice(0.15); // 15% tip
console.log(`Total price with tip: $${total.toFixed(2)}`);
*/











/*
class Animal{
  constructor(name, sound){
    this.isSleep = false;
    this.name = name;
    this.sound = sound;
    this.energy = 100;
  }


  makeSound(){
    if(this.isSleep){
      console.log(`The ${this.name} is sleeping...Zzz`);
    } else {
      console.log(`The ${this.name} wakes and says: ${this.sound}`);
    }
  }

  wakeUp() {
    this.isSleep = false;
    this.makeSound();
  }

  sleep(){
    this.isSleep = true;
    console.log(`The ${this.name} is now going to sleep... Zzz`)
  }

  play() {
    if(this.isSleep){
      console.log(`The ${this.name} cant play while sleeping!`);
      return;
    }

    if(this.energy < 20){
      console.log(`The ${this.name} is too tired to play. Try feeding or letting sleep.`);
      return;
    }

    this.energy -= 10;
    console.log(`The ${this.name} is playing ! Energy: ${this.energy}`);
  }

  eat(){
    if(this.isSleep){
      console.log(`The ${this.name} cant eat while sleeping! `);
      return;
    }

    this.energy += 20;
    if(this.energy > 100) this.energy = 100;
    console.log(`The ${this.name} is eating. Energy:${this.energy}`);
  }
  showStats() {
    console.log(`🐾 ${this.name} | Energy: ${this.energy} | Sleeping: ${this.isSleep}`);
  }
}
const dog = new Animal("dog", "Woof woof!");



dog.makeSound();
dog.wakeUp();
dog.sleep();
dog.makeSound();
dog.play();
dog.play();
dog.eat();
dog.showStats();




class Robot {
  constructor(name){
    this.name = name;
    this.isOn = false;
    this.batteryLevel = 100;
  }

  turnOn() {
    if(this.isOn){
      console.log(`${this.name} is already On!`);
    } else {
      this.isOn = true;
      console.log(`${this.name} says: Hello, I'm On!`)
    }
  } 

  turnOff(){
    if(!this.turOn){
      console.log(`${this.name} is already off!`);
    } else {
      this.isOn = false;
      console.log(`${this.name} says: Goodbye, shutting down!`);
    }
  }
}

const robo = new Robot("Roboton");

robo.turnOn();
robo.turnOff();

*/

















const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice){
    result =  "IT'S A TIE!";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greentext", "redtext");

  switch(result){
    case "YOU WIN!":
      resultDisplay.classList.add("greentext");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redtext");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }

}

























