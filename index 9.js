let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse ( localStorage.getItem("myLeads") ) 
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

if  ( leadsFromLocalStorage ) {
  myLeads = leadsFromLocalStorage
  render( myLeads)
}

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function() {
  // 3. Save the url instead of logging it out (save in localStorage, add to myLeads array and to trigger render so it wil be rendered to the page.)
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify (myLeads) )
  render(myLeads)
 
  //console.log(tabs[0].url) // ovako je object, a ako ne stavim [0], onda je array. Dodatno ako dodamo .url onda ce nam ucitati kao link (url).
})

const tabs = [
    {url:"http://www.linkedin.com/in/per-harald-borgen/"}
]

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++){
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>  
    ${leads[i]}
    </a>
    </li>
    `
}
ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  console.log("double click!")
  localStorage.clear()
  myLeads = []
  render(myLeads) 
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  
  console.log ( localStorage.getItem("myLeads") ) // da kada refresujemo stranu a ne pritisnemo deleteBtn i opet idemo inputBtn (SAVE INPUT) da nam nastavi u console.log gde smo stali na osnovu localStorage
})


// EVO KAKO JE BILO PRE
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// // localStorage.clear()
// // 1. Store the delete button in a deleteBtn variable
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse ( localStorage.getItem("myLeads") ) // promenili smo u const jer necemo da ponovo dodeljujemo i da menjamo dalje u kodu. 
// console.log(leadsFromLocalStorage ) 

// if  ( leadsFromLocalStorage ) {
//   myLeads = leadsFromLocalStorage
//   renderLeads()
// }

// // 2. Listen for double clicks on the delete button (google it)
// // 3. When clicked, clear localStorage, myLeads and the DOM

// deleteBtn.addEventListener("dblclick", function() {
//   console.log("double click!")
//   localStorage.clear()
//   myLeads = []
//   renderLeads() // da bi nam ucitao ponovo listItems da bi nam obrisao i sa stranice listu koju smo imali!
// })

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//    inputEl.value = ""
//    localStorage.setItem("myLeads", JSON.stringify(myLeads))
//   renderLeads()
  
//   console.log ( localStorage.getItem("myLeads") )
// })

// function renderLeads() {
//   let listItems = ""
//   for (let i = 0; i < myLeads.length; i++){
//     listItems += `
//     <li>
//     <a target='_blank' href='${myLeads[i]}'>  
//     ${myLeads[i]}
//     </a>
//     </li>
//     `
// }
// ulEl.innerHTML = listItems
// }

