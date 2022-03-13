// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const filteredByAge = peopleArray.filter(function(peopleArray){
    return peopleArray.age >= 18

})

const sortedAlphabetically = filteredByAge.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)

const mappedOfAge = sortedAlphabetically.map(function(sortedAlphabetically){
    return `<li>${sortedAlphabetically.firstName} ${sortedAlphabetically.lastName} is ${sortedAlphabetically.age}</li>`
})

console.log(mappedOfAge)