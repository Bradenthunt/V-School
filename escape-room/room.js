const readline = require('readline-sync');
const name = readline.question('What is your name? ');

console.log('Welcome ' + name + ' to my Escape Room!');

console.log(name + ', you are locked in this room. In order to escape, you must find the key to open the door.');

console.log('You have 3 options: put hand in hole, find the key, or open the door.');

readline.setDefaultOptions({limit: ['put hand in hole', 'find the key', 'open the door']});
let decision = readline.question('What would you like to do? ');

switch (decision){
    case 'put hand in hole':
        console.log('You have died..');
        break;
    case 'find the key':
        console.log('You find the key!');
        if (readline.keyInYN('Would you like to open the door with the key? ')){
            console.log('You have successfully opened the door and escaped!!')
        };
        break;
    case 'open the door':
        console.log("It's locked. You must find the key first.");
};

readline.setDefaultOptions({limit: ['put hand in hole', 'find the key']});
let newDecision = readline.question('What would you like to do now? ');

switch (newDecision){
    case 'put hand in hole':
        console.log('You have died..');
        break;
    case 'find the key':
        console.log('You find the key!');
        if (readline.keyInYN('Would you like to open the door with the key? ')){
            console.log('You have successfully opened the door and escaped!!')
        };
};