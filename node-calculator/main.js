var readlineSync = require('readline-sync');

var num1 = readlineSync.question('Please enter your first number: ');
var num2 = readlineSync.question('Please enter your second number: ');

readlineSync.setDefaultOptions({limit: ['add', 'sub', 'mul', 'div']});
var operation = readlineSync.question('Please enter the operation to perform: (add, sub, mul, div) ');


function sum(x, y){
    return Number(num1) + Number(num2)
}
var difference = Number(num1) - Number(num2);
var product = Number(num1) * Number(num2);
var quotient = Number(num1) / Number(num2);

if (operation === 'add') {
    console.log('The result is: ' + sum(num1, num2));
} else if (operation === 'sub') {
    console.log('The result is: ' + difference);
} else if (operation === 'mul') {
    console.log('The result is: ' + product);
} else if (operation === 'div') {
    console.log('The result is: ' + quotient);
}