// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments


// parameters - su u funkciji
function greetUser(greeting, name) {
  // welcomeEl.textContent = `${greeting}, ${name} 👋`
  welcomeEl.textContent = greeting + ", " name + "👋"
}
              // arguments - kreiraju se van funckije
let hi = "Howdy"
greetingUser(hi, "James")


function add(num1, num2) {
  return num1 + num2 
}

console.log(add(3,4))
