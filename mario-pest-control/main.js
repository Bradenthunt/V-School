const form = document['pest-cost']

form.addEventListener("submit", pestControlTotal)

function pestControlTotal(e) {
    e.preventDefault()
    let goombaTotal = form.goombas.value * 5
    let bobombsTotal = form.bobombs.value * 7
    let cheepsTotal = form.cheeps.value * 11

    let totalCost = goombaTotal + bobombsTotal + cheepsTotal

    document.getElementById('total').textContent = `The total cost for your requested services will be ${totalCost} coins.`
    // alert(`The total cost for your requested services will be ${totalCost} coins.`)
}