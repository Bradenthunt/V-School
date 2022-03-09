//1.
// const arr = [1, 2, 3]

// const total = arr.reduce(function(final, num){
//     final += num

//     return final
// })

// const total = arr.reduce((final, num) => final += num)

// console.log(total)

//2.
// const arr = [1, 2, 3]

// const stringConcat = arr.reduce(function(final, num){
//     final = arr.join("")
    
//     return final
// })

// const stringConcat = arr.reduce((final, num) => arr.join(""))

// console.log(stringConcat)

//3.
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const totalVotes = voters.reduce(function(final, voter){
//     if (voter.voted) {
//         final++
//     }
//     return final
// }, 0)

// console.log(totalVotes)

//4.
// const wishlist = [
// { title: "Tesla Model S", price: 90000 },
// { title: "4 carat diamond ring", price: 45000 },
// { title: "Fancy hacky Sack", price: 5 },
// { title: "Gold fidgit spinner", price: 2000 },
// { title: "A second Tesla Model S", price: 90000 }
// ]

// const shoppingSpree = wishlist.reduce(function(final, item){
//     final += item.price
    
//     return final
// }, 0)

// console.log(shoppingSpree)

//5. not in a mixed array
// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// const flatten = arrays.reduce(function(final, array){
//     final.push(array.concat().join())

//     return final
// })

// console.log(flatten)

//6.
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age: 55, voted: true},
//     {name:'Tami' , age: 54, voted: true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const voterResults = voters.reduce(function(final, voter){
//     if (voter.age <= 25) {
//         final.numYoungPeople++
//         if (voter.voted) {
//             final.numYoungVotes++
//         }
//     }
//     if (voter.age >= 26 && voter.age <= 35) {
//         final.numMidPeople++
//         if (voter.voted) {
//             final.numMidVotes++
//         }
//     }
//     if (voter.age >= 36 && voter.age <= 55) {
//         final.numOldPeople++
//         if (voter.voted) {
//             final.numOldVotes++
//         }
//     }

//     return final
// }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})

// console.log(voterResults)