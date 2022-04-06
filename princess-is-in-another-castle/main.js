class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked) {
        this.name = namePicked
    }

    gotHit() {
        if (this.hasStar = true) {
            this.hasStar = false

            console.log(`Your star saved you!`)
        }
        
        if (this.status = `Powered Up`) {
            this.status = `Big`

            console.log(`Ouch! There goes my powerup!`)
        }
        
        if (this.status = `Big`) {
            this.status = `Small`

            console.log(`Ouch! Now I'm a smol boi..`)
        }
        
        if (this.status = `Small`) {
            this.status = `Dead`

            console.log(`You have died! GAME OVER`)
            clearInterval(myGame)
        }
    }

    gotPowerup() {
        if (this.status = `Small`) {
            this.status = `Big`
        }

        if (this.status = `Big`) {
            this.status = `Powered Up`
        }

        if (this.status = `Powered Up`) {
            this.hasStar = true

            console.log(`Congrats! You got a star!`)
        }
    }

    addCoin() {
        this.totalCoins = this.totalCoins + 1
    }

    print() {
        console.log(`Name: ${this.name}
        Coins: ${this.totalCoins}
        Status: ${this.status}
        `)
    }
}

let myGame = setInterval(function getRandomNumber() {
    let action = Math.floor(Math.random() * 3 + 0)

    if (action = 0) {
        myPlayer.gotHit()
        myPlayer.print()
    }
    
    if (action = 1) {
        myPlayer.gotPowerup()
        myPlayer.print()
    }
    
    if (action = 2) {
        myPlayer.addCoin()
        myPlayer.print()
    }
}, 1000)

const myPlayer = new Player(`Mario`, 0, `Small`, false)

// let action = Math.floor(Math.random() * 3 + 0)
//     console.log(action)