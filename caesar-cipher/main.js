var readline = require('readline-sync')
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
var shift = parseInt(readline.question('How many letters would you like to shift? '))

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var newAlpha = ''

function getShifted(shift) {
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + shift) % alphabet.length;
		newAlpha += alphabet[offset]
	}
}

function encode(input) {
    let result = "";
    for (let i = 0; i < input.length; i++){
        let index = alphabet.indexOf(input[i])
        result += newAlpha[index]
    }
    console.log(result)
}

getShifted(shift)

encode(input)