//1.
// const arr = [3, 6, 8, 2]

// const fiveAndGreaterOnly = arr.filter(num => num > 5)

// const fiveAndGreaterOnly = arr.filter(function(num){
//     return num > 5
// })

// console.log(fiveAndGreaterOnly)

//2. 
// const arr = [3, 6, 8, 2]

// const evensOnly = arr.filter(num => num % 2 === 0)

// const evensOnly = arr.filter(function(num){
//     if (num % 2 === 0){
//         return true
//     }
// })

// console.log(evensOnly)

//3.
// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const fiveCharactersOrFewerOnly = arr.filter(word => word.length <= 5)

// const fiveCharactersOrFewerOnly = arr.filter(function(word){
//     return word.length <= 5
// })

// console.log(fiveCharactersOrFewerOnly)

//4.
// const arr = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const peopleWhoBelongToTheIlluminati = arr.filter(arr => arr.member === true)

// const peopleWhoBelongToTheIlluminati = arr.filter(function(arr){
//     return arr.member === true
// })

// console.log(peopleWhoBelongToTheIlluminati)

//5.
// const arr = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const ofAge = arr.filter(arr => arr.age >= 18)

// const ofAge = arr.filter(function(arr){
//     return arr.age >= 18
// })

// console.log(ofAge)