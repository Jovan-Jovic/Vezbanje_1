const credits = 0

if (credits > 0) {             // ako umesto credits > 0 ubacimo npr "nesto" ili ["nesto", "nesto2"] itd. pretvorice to u true i rezultat ce biti "Let's paly 🎰"; ako bude npr prazan string "" ili '', izbacice  "Sorry, you have no credits"!!
  console.log("Let's play 🎰")
} else {
  console.log("Sorry, you have no credits")
}

// truthy 
// falsy

// koje sve nepoznate vrednosti postoje:
// false      -> false
// 0          -> zero
// ""         -> empty string
// null       -> null (how you as a developer signalize emptiness)
// undefined  -> undefined (how JavaScript signalizes emptiness)
// NaN        -> not a number

//1. null

// let currentViewers = null
// currentViewers = ["jane", "nick"]

// // currentViewers = null // ako ubacimo null nakon nabrajanja "pratilaca" on gleda poslednje i nece izbaciti nista jer null znaci prazno. Ako bi npr stavili [] on bi stavio true u "if" i onda bi log out-ovao "we have viewers". Takodje i sa "" bi isto uradio kao sa empty [].

// if (currentViewers) {
//   // do something, e.g notify the live streamers
//   console.log("we have viewers")
// } 

//2. undefined
let currentViewers

console.log(currentViewers)
