//variables

var entireMeal = document.getElementById("entire-meal")
var pot = document.querySelector(".pot")
var letsCookButton = document.querySelector(".lets-cook")
var foodItem = document.querySelector("#food-item")
var suggest = document.querySelector("#suggest")
//event listeners

letsCookButton.addEventListener("click", showFoodItem)

//window.addEventListener('load', loadPage)

//functions

function showFoodItem(event) {
  event.preventDefault()
  pot.classList.add("hidden")
  suggest.classList.remove("hidden")
  foodItem.classList.remove("hidden")
}