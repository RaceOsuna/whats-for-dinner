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

var desert = [
  "Hot Fudge Sunday",
  "Creme brulee",
  "Tiramisu",
  "Devils Chocolate Cake",
  "Raspberry Cheesecake"
];

var meal = []

//variables
var dish = document.querySelector("#food-item");
var pot = document.querySelector(".pot")
var letsCookButton = document.querySelector(".lets-cook")
var foodItem = document.querySelector("#food-item")
var suggest = document.querySelector("#suggest")
var clearButton = document.querySelector(".clear")
var btn1 = document.getElementById("side")
var btn2 = document.getElementById("main-dish")
var btn3 = document.getElementById("desert")
var btn4 = document.getElementById("entire-meal")
var rightBox = document.getElementById("right")

//event listeners

letsCookButton.addEventListener("click", showFoodItem)
//clearButton.addEventListenrer("click", showMain)


//functions

//fullCoarse = (mainDish[getRandomIndex(mainDish)]) + " with a side of " + (side[getRandomIndex(side)]) + " and " + (quotes[getRandomIndex(quotes)])
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
var mainItem = mainDish[getRandomIndex(mainDish)];
var sideItem = side[getRandomIndex(side)];
var desertItem = desert[getRandomIndex(desert)];
var fullCoarse = `${mainItem} with a side of ${sideItem} and ${desertItem} for dessert!`

function showMain() {
  pot.classList.remove("hidden");
  suggest.classList.add("hidden");
  foodItem.classList.add("hidden");
  clearButton.classList.add("hidden");
}

function showFoodItem(event) {
  event.preventDefault();
  pot.classList.add("hidden");
  suggest.classList.remove("hidden");
  foodItem.classList.remove("hidden");
  clearButton.classList.remove("hidden")
    if (btn1.checked == true) {
      dish.innerText = `${sideItem}`;
  } else if (btn2.checked == true) {
      dish.innerText = `${mainItem}`;
  } else if (btn3.checked == true) {
      dish.innerText = `${desertItem}`;
  } else if (btn4.checked == true) {
      dish.innerText = `${fullCoarse}`
      meal.push(fullCoarse);
  } else {
    showMain()
    alert("no item selected")
  }
}

