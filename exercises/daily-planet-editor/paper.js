/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

//Don't see a var enemyName anywhere
function whoWins(isThereKryptonite, enemyName){
    if (!isThereKryptonite){
        return ("Superman beats " +enemyName+ ", of course");
    } else {
        return ("Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.");
}

for (var i = 0; i < enemies.length; i++){
    // Not sure about the colon below this..
    var isThereKryptonite:
        // Don't know what to do with the '%' here
        if (i % 2 === 0){
            isThereKryptonite = true;
        } else {
            isThereKryptonite = false;
        }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function howAttractedIsLoisLaneToMe(){
    // 1 is not at all attracted, 10 is "super" attracted...
    return math.floor((math.random() * 10) + 1);
}

console.log(howAttractedIsLoisLaneToMe());

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = math.random();
}
    if (phoneBoothQuickChange >= 0.5){
        var clarkKent = false;
        var superman = true;
        console.log("Now I'm Superman!");
    }