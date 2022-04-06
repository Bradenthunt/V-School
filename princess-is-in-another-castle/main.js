class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName() {
        let named = Math.floor(Math.random() * 2 + 0)

        if (named = 0) {
            this.name = `Mario`
        } else if (named = 1) {
            this.name = `Luigi`
        }
    }

    gotHit() {
        if (this.status = `Powered Up`) {
            this.status = `Big`
        }

        if (this.status = `Big`) {
            this.status = `Small`
        }

        if (this.status = `Small`) {
            this.status = `Dead`

            clearInterval(myGame)
            console.log(`You have died! GAME OVER`)
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
        this.totalCoins = totalCoins + 1
    }

    print() {
        console.log(`Name: ${this.name}
        Coins: ${this.totalCoins}
        Status: ${this.status}
        Star: ${this.hasStar}`)
    }
}

let myGame = setInterval(function getRandomNumber() {
    let action = Math.floor(Math.random() * 3 + 0)

    if (action = 0) {
        Player.gotHit()
        Player.print()
    }

    if (action = 1) {
        Player.gotPowerup()
        Player.print()
    }

    if (action = 2) {
        Player.addCoin()
        Player.print()
    }
}, 1000)