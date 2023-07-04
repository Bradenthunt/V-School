//Datatypes - string, number, boolean, arrays, object

//var vegtable = "Pickle"

//var numOfPickle = 90

//var picklesAreGreat = true

//var picklesFriends = ["mary", "fred", 'ryan']

/*var pickle = {
    family: "cucumber",
    flavors: ['sweet', 'dill', 'spicy'],
    numInJar: 20,
    likesPickles: true,

}*/

//1. Create another Object --> use each data types as a property in that object
//2. use dot and bracket notation to nagivate that object
var cucumber = {
    family: "vegetable",
    numOfBumps: 89,
    types: ['Armenian', 'English', 'Garden', 'Gherkin', 'Kirby', 'Persian'],
    canBecomeAPickle: true,
}

console.log(cucumber.numOfBumps)
console.log(cucumber['types']['3'])

//var dogBreed = "Frenchie"

/*if (dogBreed === "german shephard") {
    console.log("I am from Germany")
} else if (dogBreed === "Frenchie") {
    console.log("I am French")
} else {
    console.log("I am from nowehere")
}*/

//1. Create another conditional statement (if else statement)
var pickleFlavor = "Classic Dill"

if (pickleFlavor === "Bread & Butter") {
    console.log("I am inferior")
} else if (pickleFlavor === "Classic Dill") {
    console.log("I am superior")
} else {
    console.log("What are you eating?")
}


/*for (var i = 0; i < 10; i++) {
    console.log(i)
}*/

//1. write another for loop differnet from the one above
var cucumberTypes = ['Armenian', 'English', 'Garden', 'Gherkin', 'Kirby', 'Persian']

for (var i = 0; i < 6; i++) {
    console.log(cucumberTypes[i])
}


//Run through and learn the DOM Material (last 5 videos on the curriculum spreadsheet)
var button = document.getElementById("button")

document.getElementById("button").addEventListener("click", function () {
    console.log("The Pickle was crunched!")
    document.getElementById("pic").src = "https://media.istockphoto.com/photos/biting-a-pickle-picture-id92464269";
})

document.getElementById("pic").addEventListener("click", function () {
    console.log("The Pickle was uncrunched!")
    document.getElementById("pic").src = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pickle.jpg";
})





