// let and const
// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//ES6 Arrows
//Task 1
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = carrots.map(carrot => ({ type: "carrot", name: carrot }))

// console.log(mapVegetables)

//Task 2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = people.filter(person => person.friendly)

// console.log(filterForFriendly)

//Task 3
// const doMathSum = (a, b) => a + b

// console.log(doMathSum(4, 3))

// var produceProduct = (a, b) => a * b

// console.log(produceProduct(5, 7))

//Task 4
// function printString (firstName, lastName, age) {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// }

// console.log(printString(`Bill`, `Buttlicker`, `69`))

//Task 5
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];
 
// const filterForDogs = animals.filter(animal => animal.type === "dog" ? true : false)
 
// console.log(filterForDogs)

//Template Literals
// function welcomeMessage (name, location) {
//     return `Hi ${name}!

//     Welcome to ${location}.

//     I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
// }

// console.log(welcomeMessage(`Willifer`, `DonBas`))

