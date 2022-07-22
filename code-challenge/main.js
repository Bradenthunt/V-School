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


// const people = [ "John", "Adam", "Amber" ]

// function peopleElements(arr) {
//    return arr.map(newString => `<h1>${newString}</h1>`)
// }

// console.log(peopleElements(people))

// An election was recently held and it's time to count the votes. Votes are
// counted in two stages:
//
//   1. Each voting district counts the votes in its district and ranks the
//      candidates by total number of votes in the district.
//   2. The top N candidates and their votes are reported to the central
//      authority, who determines the final results across all districts.
//
// The central authority either designates the winner of the election, or
// declares that it is impossible to determine a winner. Let's consider some
// examples for the central authority.
//
// Example 1: 2 districts, top N=2 candidates reported.
//   Inputs to the central authority:
//     District A:
//       1. Candidate a = 10 votes
//       2. Candidate b = 8 votes
//     District B:
//       1. Candidate b = 6 votes
//       2. Candidate c = 2 votes
//   Output: Candidate b is the winner!
//
// Example 2: 2 districts, top N=2 candidates reported.
//   Inputs to the central authority:
//     District A:
//       1. Candidate a = 10 votes
//       2. Candidate b = 8 votes
//     District B:
//       1. Candidate b = 6 votes
//       2. Candidate c = 5 votes
//       -- can't see below here ---
//       3. Candidate a = 0-5 votes
//   Output: Impossible to determine a winner.
//   Reason:
//     While Candidate b has 14 votes, it's possible that Candidate a has 15
//     votes (10 from District A and 5 from District B), and so Candidate a or
//     Candidate b could be the winner.
//
// The task is to implement the central authority algorithm and designate the
// winner of the election or declare that it is impossible to determine the
// winner.