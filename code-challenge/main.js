// //take a string and return the number of vowells

// var vowells = ['a', 'e', 'i', 'o', 'u']

// function getNumberOfVowells(string){
//     var count = 0
//     for (i = 0; i < string.length; i++){
//         console.log(string[i])
//         if (vowells.includes(string[i])){
//             count++
//         }
//     }
//     return count
// }

// console.log(getNumberOfVowells("hello world"))

// axios.get("https://swapi.dev/api/people/1/")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

// const arr1 = [ 1, 3, 5 ]
// const arr2 = [ 2, 4, 6 ]
// let arr3 = [ ]

// arr3 = [...arr1, ...arr2]

// console.log(arr3)


const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
   return arr.map(newString => `<h1>${newString}</h1>`)
}

console.log(peopleElements(people))