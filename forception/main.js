var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    var mixed = [];
    var newAlph = alphabet.split("");
    for (var i = 0; i < people.length; i++){
        var newPeople = people[i].concat(":");
        mixed.push(newPeople);
        for (var j = 0; j < newAlph.length; j++){
            var capAlph = newAlph[j].toUpperCase();
            mixed.push(capAlph);
        }
    }
    return mixed;
}

console.log(forception(people, alphabet));