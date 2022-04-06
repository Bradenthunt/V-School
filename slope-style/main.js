//Green Circle
// function collectAnimals(...animal) {
//     return animal
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// function combineFruit(fruit, sweets, vegetables){
//     return {
//         fruit,
//         sweets,
//         vegetables
//     }
// }

// console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//   console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }))

// function returnFirst(items){
//     const [firstItem] = items
//     return firstItem
// }

// console.log(returnFirst([`pens`, `caps`, `balls`]))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]

// function returnFavorites([firstFav, secondFav, thirdFav]) {
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, ${thirdFav}.`
// }

// console.log(returnFavorites(favoriteActivities))


//Blue Square **don't see where the rest operator would be**
// function combineAnimals(firstArr, secondArr, lastArr) {
//     return [...firstArr, ...secondArr, ...lastArr]
// }

// const realAnimals = ["dog", "cat", "mouse"]
// const magicalAnimals = ["jackolope"]
// const mysteriousAnimals = ["platypus"]

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


//Black Diamond
// function product(...numbers) {  
//     return numbers.reduce((acc, number) => acc * number, 1)
// }

// console.log(product(1, 2, 3, 4, 5))

// function unshift(array, ...letters) {
//     return [...letters, ...array]
// }

// console.log(unshift(`piafkld`, `alfjdsa`))


//Double Black Diamond
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         let [firstName, lastName] = name
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))