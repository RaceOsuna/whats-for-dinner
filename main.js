// data

var side = [
  "Garlic Mashed Potatoes",
  "Roasted Green Beans",
  "Bacon Wrapped Asparagus",
  "Balsamic Glazed Brussel Sprouts",
  "Parmesan Broccoli"
];

var mainDish = [
  "Lemon Pepper Chicken",
  "Honey Garlic Pork Chops",
  "Steak Diane",
  "Pesto Salmon",
  "Cajun VooDoo Pasta"
];

var dessert = [
  "Hot Fudge Sunday",
  "Creme brulee",
  "Tiramisu",
  "Devils Chocolate Cake",
  "Raspberry Cheesecake"
];

var meal = [];

//variables

var dish = document.querySelector("#food-item");
var pot = document.querySelector(".pot");
var letsCookButton = document.querySelector(".lets-cook");
var foodItem = document.querySelector("#food-item");
var suggest = document.querySelector("#suggest");
var btn1 = document.getElementById("side");
var btn2 = document.getElementById("main-dish");
var btn3 = document.getElementById("dessert");
var btn4 = document.getElementById("entire-meal");
var rightBox = document.getElementById("right");
var mainItem = mainDish[getRandomIndex(mainDish)];
var sideItem = side[getRandomIndex(side)];
var dessertItem = dessert[getRandomIndex(dessert)];
var fullCoarse = `${mainItem} with a side of ${sideItem} and ${dessertItem} for dessert!`;

//event listeners

letsCookButton.addEventListener("click", showFoodItem);

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showMain() {
  pot.classList.remove("hidden");
  suggest.classList.add("hidden");
  foodItem.classList.add("hidden");
}

function showFoodItem(event) {
  event.preventDefault();
  pot.classList.add("hidden");
  suggest.classList.remove("hidden");
  foodItem.classList.remove("hidden");
    if (btn1.checked == true) {
      dish.innerText = `${sideItem}`;
      btn1.checked = false;
  } else if (btn2.checked == true) {
      dish.innerText = `${mainItem}`;
      btn2.checked = false;
  } else if (btn3.checked == true) {
      dish.innerText = `${dessertItem}`;
      btn3.checked = false;
  } else if (btn4.checked == true) {
      dish.innerText = `${fullCoarse}`
      btn4.checked = false;
      meal.push(fullCoarse);
  } else {
      showMain()
      alert("Please Select an Option")
  }
}

