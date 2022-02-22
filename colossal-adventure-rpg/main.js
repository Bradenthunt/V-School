const readline = require("readline-sync");

console.log(`Greetings! You are about to embark on the greatest adventure of your life! You will encounter things you would have never thought you would.`);

const name = readline.question(`What is your name great adventurer? `);

console.log(`Welcome ${name}! Your adventure begins now!`);

let player = {
    name: name,
    hp: 100,
    loot: []
};

let enemy = {
    hp: 100,
    loot: []
};

console.log(`You can press 'p' at any time to check your loot.`)

readline.keyIn(`Press 'w' to walk.`, {hideEchoBack: true, mask: ``, limit: `w`});

while (key = `w`) {
    let walkRisk = Math.floor(Math.random() * 10) + 1;

    if (walkRisk % 3 === 0) {
        console.log(`Something is off...`);
        whichEnemy();
        console.log(`A wild ${randomEnemy} appeared!`);
        let action = readline.keyIn(`Oh no! How would you like to proceed? r - run, a - attack`, {hideEchoBack: true, mask: ``, limit: `ra`})
        switch (action) {
            case 'r':
                runAwayChance();
                break;
            case 'a':
                attackEnemy();
                }   
    } else {
        readline.keyIn(`Press 'w' to keep walking.`, {hideEchoBack: true, mask: ``, limit: `w`});

    }
}

function whichEnemy() {
    let enemyCalculator = Math.floor(Math.random() * 10) + 1;

    if (enemyCalculator <= 3) {
        randomEnemy = `spider`;
        enemy.loot = [`venom`, ` silk`];
    } else if (enemyCalculator > 3 && enemyCalculator < 6) {
        randomEnemy = `dragon`;
        enemy.loot = [`scales`, ` fang`];
    } else if (enemyCalculator >= 6) {
        randomEnemy = `goblin`;
        enemy.loot = [`gold`, ` dagger`];
    }
};

function runAwayChance() {
    let runRisk = Math.floor(Math.random() * 10) + 1;

    if (runRisk % 2 === 0){
        console.log(`You run away as fast as your legs will take you.`);
    } else {
        console.log(`You try to run, but your legs don't move. You're paralyzed by fear.`);
        enemyAttacksRun();
    }

};

function attackEnemy() {
    let yourAttackDamageTotal = 0;
    let enemyAttackDamageTotal = 0;
    
    do {
        let yourAttackDamage = Math.floor(Math.random() * 100) + 1;
        console.log(`You attack with all your might doing ${yourAttackDamage} damage!`);
        yourAttackDamageTotal = yourAttackDamageTotal + yourAttackDamage;

        let enemyAttackDamage = Math.floor(Math.random() * 100) + 1;
        console.log(`The wild ${randomEnemy} attacks back doing ${enemyAttackDamage} damage!`);
        enemyAttackDamageTotal = enemyAttackDamageTotal + enemyAttackDamage;

    } while (yourAttackDamageTotal < 100 || enemyAttackDamageTotal < 100);

    if (yourAttackDamageTotal >= 100) {
        lootEnemy();
        console.log(`You have successfully vanquished the wild ${randomEnemy}! You receive their ${enemy.loot} as loot!`);
    } else if (enemyAttackDamageTotal >= 100) {
        console.log(`You have met your demise O' Great ${player.name}. May your name be forever remembered in the legends of your people.`);
        exit();
    }
};

function enemyAttacksRun() {
    let yourAttackDamageTotal = 0;    
    let enemyAttackDamageTotal = 0;

    do {
        let enemyAttackDamage = Math.floor(Math.random() * 100) + 1;
        console.log(`The wild ${randomEnemy} attacks doing ${enemyAttackDamage} damage!`);
        enemyAttackDamageTotal = enemyAttackDamageTotal + enemyAttackDamage;
        
        let yourAttackDamage = Math.floor(Math.random() * 100) + 1;
        console.log(`You attack back with all your might doing ${yourAttackDamage} damage!`);
        yourAttackDamageTotal = yourAttackDamageTotal + yourAttackDamage;
    } while (yourAttackDamageTotal < 100 || enemyAttackDamageTotal < 100);

    if (yourAttackDamageTotal >= 100) {
        lootEnemy();
        console.log(`You have successfully vanquished the wild ${randomEnemy}! You receive their ${enemy.loot} as loot!`);
    } else if (enemyAttackDamageTotal >= 100) {
        console.log(`You have met your demise O' Great ${player.name}. May your name be forever remembered in the legends of your people.`);
        exit();
    }
};

function lootEnemy() {
    player.loot.push(enemy.loot);
};

function lootInventory() {
    do {
    console.log(player);
    } while (key = 'p');
};