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
//var entireMeal = document.getElementById("entire-meal")
var pot = document.querySelector(".pot")
var letsCookButton = document.querySelector(".lets-cook")
var foodItem = document.querySelector("#food-item")
var suggest = document.querySelector("#suggest")
var clearButton = document.querySelector(".clear")
var btn1 = document.getElementById("side")
var btn2 = document.getElementById("main-dish")
var btn3 = document.getElementById("desert")
var btn4 = document.getElementById("entire-meal")


//event listeners

letsCookButton.addEventListener("click", showFoodItem)
// clearButton.addEventListenrer("click", showMain)
//window.addEventListener('load', loadPage)

//functions
var fullCoarse;


fullCoarse = (mainDish[getRandomIndex(mainDish)]) + " with a side of " + (side[getRandomIndex(side)]) + " and " + (quotes[getRandomIndex(quotes)])


function showFoodItem(event) {
  event.preventDefault();
  pot.classList.add("hidden");
  suggest.classList.remove("hidden");
  foodItem.classList.remove("hidden");
    if (btn1.checked == true) {
      dish.innerText = "Side"
  } else if (btn2.checked == true) {
      dish.innerText = "Main Dish"
  } else if (btn3.checked == true) {
      dish.innerText = "Desert"
  } else if (btn4.checked == true) {
      dish.innerText = "Entire Meal"
  }
}

// function showMain() {
//   pot.classList.remove("hidden");
//   suggest.classList.add("hidden");
//   foodItem.classList.add("hidden");
// }
