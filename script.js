/*let Person = {name: "Mosope", age: 22, country: "Nigeria" }

function logData(){
    console.log(Person.name + " is " + Person.age + " years old and lives in " + Person.country)
}


logData()

let age = 15

if (age < 6){
    console.log ("free") 
} else if (age < 18){
    console.log("child discount")
} else if (age < 27){
    console.log("student discount")
} else if (age < 67){
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

console.log("The top 5 largest countries in the world: ")

for (let i = 0; i < largeCountries.length ; i++ ){
    console.log("- " + largeCountries[i])
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

largeCountries.pop()
largeCountries.push("Nigeria")
largeCountries.shift()
largeCountries.unshift("Brazil")
console.log(largeCountries)

let dayOfMonth = 31
let weekday = "Friday"

if (dayOfMonth === 31 && weekday === "Friday"){
    console.log("🤩")
}
let hands = ["rock", "paper", "scissor"]

function handsEl(){
    let randomNumber = Math.floor(Math.random() * 3)
    return hands[randomNumber]
}

console.log(handsEl())

const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl = document.getElementById("stage")
const fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  const randomfighter = Math.floor(Math.random() * fighters.length)  
  const randomfighter2 = Math.floor(Math.random() * fighters.length)

  stageEl.textContent = `${[fighters[randomfighter]]} vs ${[fighters[randomfighter2]]}`
})*/