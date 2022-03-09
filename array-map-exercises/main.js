// 1.
// const arr = [2, 5, 100]

// const result = arr.map(num => num * 2)

// const result = arr.map(function(num){
//     return num * 2
// })
  
//   console.log(result)

// 2. 
// const arr = [2, 5, 100]

// const result = arr.map(num => num + "")

// const result = arr.map(function(num){
//     return num + ""
// })

// console.log(result)

// 3. 
// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const result = arr.map(function(arr){
//     return arr[0].toUpperCase() + arr.slice(1).toLowerCase()
// })

// const result = arr.map(arr => arr[0].toUpperCase() + arr.slice(1).toLowerCase())

// console.log(result)

// 4.
// const arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const namesOnly = arr.map(function(people){
//     return people.name
// })

// const namesOnly = arr.map(people => people.name)

// console.log(namesOnly)

// 5.
// const arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const makeStrings = arr.map(function(arr){
//     if (arr.age >= 18) {
//         return `${arr.name} can go to The Matrix`
//     } else {
//         return `${arr.name} is under age!!`
//     }
// })

// const makeStrings = arr.map(arr => arr.age >= 18 ? `${arr.name} can go to The Matrix` : `${arr.name} is under age!!`)

// console.log(makeStrings)

// 6.
// const arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const readyToPutInTheDOM = arr.map(function(arr){
//     return `<h1>${arr.name}</h1><h2>${arr.age}</h2>`
// })

// const readyToPutInTheDOM = arr.map(arr => `<h1>${arr.name}</h1><h2>${arr.age}</h2>`)

// console.log(readyToPutInTheDOM)