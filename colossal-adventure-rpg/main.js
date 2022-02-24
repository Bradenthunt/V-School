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

while (true) {
    const key = readline.keyIn(`Press 'w' to walk or press 'p' to check your loot.`, {hideEchoBack: true, mask: ``, limit: `wp`});
    if (key === 'p') {
        lootInventory();
    }
    if (key === 'w') {
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
            console.log('The aire of adventure is afoot. Keep walking!')
        }
    }
}

function whichEnemy() {
    let enemyCalculator = Math.floor(Math.random() * 10) + 1;

    if (enemyCalculator <= 3) {
        randomEnemy = `spider`;
        enemy.loot = [`silk`];
    } else if (enemyCalculator > 3 && enemyCalculator < 6) {
        randomEnemy = `dragon`;
        enemy.loot = [`scales`];
    } else if (enemyCalculator >= 6) {
        randomEnemy = `goblin`;
        enemy.loot = [`gold`];
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
    while(player.hp > 0 && enemy.hp > 0) {
        if (player.hp > 0) {
            let yourAttackDamage = Math.floor(Math.random() * 100) + 1;
            console.log(`You attack with all your might doing ${yourAttackDamage} damage!`);
            enemy.hp = enemy.hp - yourAttackDamage;
        }
        if (enemy.hp > 0) {
            let enemyAttackDamage = Math.floor(Math.random() * 100) + 1;
            console.log(`The wild ${randomEnemy} attacks back doing ${enemyAttackDamage} damage!`);
            player.hp = player.hp - enemyAttackDamage;
        }
    }

    if (enemy.hp <= 0) {
        lootEnemy();
        player.hp = player.hp + 25;
        console.log(`You have successfully vanquished the wild ${randomEnemy}! You receive their ${enemy.loot} as loot!`);
    }

    if (player.hp <= 0) {
        console.log(`You have met your demise O' Great ${player.name}. May your name be forever remembered in the legends of your people.`);
        process.exit()
    }
};

function enemyAttacksRun() {
    while (player.hp > 0 && enemy.hp > 0) {
        if (enemy.hp > 0) {
            let enemyAttackDamage = Math.floor(Math.random() * 100) + 1;
            console.log(`The wild ${randomEnemy} attacks doing ${enemyAttackDamage} damage!`);
            player.hp = player.hp - enemyAttackDamage;
        }
        
        if (player.hp > 0) {
            let yourAttackDamage = Math.floor(Math.random() * 100) + 1;
            console.log(`You attack back with all your might doing ${yourAttackDamage} damage!`);
            enemy.hp = enemy.hp - yourAttackDamage;
        }

    }

    if (enemy.hp <= 0) {
        lootEnemy();
        player.hp = player.hp + 25;
        console.log(`You have successfully vanquished the wild ${randomEnemy}! You receive their ${enemy.loot} as loot!`);
    }

    if (player.hp <= 0) {
        console.log(`You have met your demise O' Great ${player.name}. May your name be forever remembered in the legends of your people.`);
        process.exit()
    }
};

function lootEnemy() {
    player.loot.push(enemy.loot);
    enemy.hp = 100
};

function lootInventory() {
    console.log(`${name}, you currently have ${player.hp} hp and ${player.loot} in your loot.`);
};