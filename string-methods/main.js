var word = "pickles"

1.
function capAndLower(){
    var both = word.toUpperCase() + word.toLowerCase();
    console.log(both);
}

console.log(capAndLower(word));

2.
function findHalfLength(){
    var total = word.length;
    var half = (total / 2);
    var rounded = Math.floor(half);
    console.log(rounded);
}

console.log(findHalfLength(word));

3.
function halfMe(){
    var firstHalf = word.slice(0, 4);
    console.log(firstHalf);
}

console.log(halfMe(word));

4.
function halfsies(){
    var firstHalf = word.slice(0, 4).toUpperCase();
    var secondHalf = word.slice(4);
    var combined = firstHalf.concat(secondHalf);
    console.log(combined);
}

console.log(halfsies(word));