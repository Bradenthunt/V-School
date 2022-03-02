const button = document.getElementById('clicker')
let clickCount = 0
let timeLeft = 15

let timerCountdownID = setInterval(timerCountdown, 1000)


function timerCountdown() {
    timeLeft = timeLeft - 1

    document.getElementById("timer").textContent = `Time remaining: ${timeLeft}`
}

setTimeout(stopCountdown, 15000)

function stopCountdown() {
    clearInterval(timerCountdownID)
}


button.addEventListener("click", getClicking)

function getClicking() {
    clickCount = clickCount + 1

    document.getElementById('current-count').textContent = `Click Count: ${clickCount}`

    let lastClickCount = clickCount 
    localStorage.setItem("lastClickCount", lastClickCount)
}

setTimeout(turnOffClickCounter, 15000)

function turnOffClickCounter() {
    button.removeEventListener("click", getClicking)

}

let lastCount = localStorage.getItem("lastClickCount")

document.getElementById('last-count').textContent = `Last Click Count: ${lastCount}`