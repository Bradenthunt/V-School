/*Preliminaries

//1.
for (var i = 0; i < 10; i++){
    console.log(i)
}

//2.
for (var i = 9; i >= 0; i--){
    console.log(i)
}

//3.
const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}*/

//Bronze

/*1.
var array = []

for (var i = 0; i < 10; i++){
    array[i] = i
}
console.log(array)

/*2. 
for (var i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}*/

//3. stuck here
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var fruitOne = []
var fruitTwo = []

for (var i = 0; i < fruit.length; i++){
    if (i % 2 === 0){
        fruitOne.push(fruit[i])
    } else {
        fruitTwo.push(fruit[i])
    }
}

console.log(fruitOne)
console.log(fruitTwo)
