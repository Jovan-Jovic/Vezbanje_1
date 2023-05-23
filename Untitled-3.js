// const welcomeEl = document.getElementById("welcome-el")

// // 3. Add the ability to choose the emoji as well!


// // 1. Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser(greeting, name, lizard, emoji) { // -ovo su parameters
//   // welcomeEl.textContent = greeting + ", " + name + ", " + lizard + "👋"
//   welcomeEl.textContent = `${greeting}, ${name}, ${lizard} ${emoji}` //2.  druga varijanta (prociscenja, citkija)
 
// }

// greetUser("Howdy", "Jovan", "somthing", "🔥") // -ovo su arguments
// // tako mozemo da dodajemo vise parametara i da im dajemo vrednosti redom kako ih nabrajamo.


// svoje eksperimentisanje.
let promenljiva = []
let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
let ulEl = document.getElementById("ul-el")

buttonEl.addEventListener("click", function() {
promenljiva.push(inputEl.value)
inputEl.value = ""
render()
})

function render() {
  let listItems = ""
  for (let i=0; i < promenljiva.length; i++){
    // listItems += "<li>" + promenljiva[i] + "</li>"
    listItems += `<li> ${promenljiva[i]} </li>`
  }
  ulEl.innerHTML = listItems
}
