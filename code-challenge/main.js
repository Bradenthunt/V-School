//take a string and return the number of vowells

var vowells = ['a', 'e', 'i', 'o', 'u']

function getNumberOfVowells(string){
    var count = 0
    for (i = 0; i < string.length; i++){
        console.log(string[i])
        if (vowells.includes(string[i])){
            count++
        }
    }
    return count
}

console.log(getNumberOfVowells("hello world"))