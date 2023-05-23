// Create a function that renders the three team images
// Use a for loop, template string (``), plus equals (+=)
// .innerHTML to solve the challange


const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg",
  "images/hip4.jpg",
  "images/hip5.jpg"
]

const container = document.getElementById("container")
// ovo je sredjena varijanta
function renderTeam() {
  let imgsDOM = ""
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt ="Employee in the company" class="team-img" src="${imgs[i]}">`
  }
  container.innerHTML = imgsDOM
}
renderTeam()



// prvo njegovo resenje - ima problem sto on za svaki img mora da salje zahtev DOM-u i kada je u pitanju vise elemenata moze uticati na performanse pa cemo ga urediti 
// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg"
// ]

// const container = document.getElementById("container")

// function renderTeam() {
//     for (let i = 0; i < imgs.length; i++) {      
//           container.innerHTML += `<img class="team-img" src="${imgs[i]}">` 
//     }
   
// }

// renderTeam()




// // sa neta varijanta:
// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg"
// ]

// const container = document.getElementById("container")

// function renderTeam() {
//     let getImgs = ""
//     for (let i = 0; i < imgs.length; i++) {      
//       getImgs += `<img src="${imgs[i]}">`
//     }
//     container.innerHTML = getImgs
// }

// renderTeam()