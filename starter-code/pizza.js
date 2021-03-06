// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce){
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach( function($crust){
    if( state.glutenFreeCrust) $crust.classList.add('crust-gluten-free')
    else $crust.classList.remove('crust-gluten-free')
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(function ($btn){
    $btn.classList.remove('active')
  })

  if( state.pepperonni ) document.querySelector('.btn.btn-pepperonni').classList.add('active')
  if( state.mushrooms ) document.querySelector('.btn.btn-mushrooms').classList.add('active')
  if( state.greenPeppers ) document.querySelector('.btn.btn-green-peppers').classList.add('active')
  if( state.whiteSauce ) document.querySelector('.btn.btn-sauce').classList.add('active')
  if( state.glutenFreeCrust ) document.querySelector('.btn.btn-crust').classList.add('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panel_price = document.querySelector('.panel.price>ul')

  const pepperonni = document.createElement('li')
  const mushrooms = document.createElement('li')
  const greenPeppers = document.createElement('li')
  const whiteSauce = document.createElement('li')
  const glutenFreeCrust = document.createElement('li')

  let total = basePrice

  pepperonni.innerText = `$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`
  mushrooms.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
  greenPeppers.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
  whiteSauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
  glutenFreeCrust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`

  panel_price.innerHTML = ''

  if( state.pepperonni ) {
    panel_price.appendChild(pepperonni)
    total += ingredients.pepperonni.price
  }
  if( state.mushrooms ) {
    panel_price.appendChild(mushrooms)
    total += ingredients.mushrooms.price
  }
  if( state.greenPeppers ) {
    panel_price.appendChild(greenPeppers)
    total += ingredients.greenPeppers.price
  }
  if( state.whiteSauce ) {
    panel_price.appendChild(whiteSauce)
    total += ingredients.whiteSauce.price
  }
  if( state.glutenFreeCrust ) {
    panel_price.appendChild(glutenFreeCrust)
    total += ingredients.glutenFreeCrust.price
  }

  price = document.querySelector('.panel.price strong')
  price.innerText = '$'+total
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
} 