const form = document["calculator"]

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const firstAddend = form["first-addend"].value
    const secondAddend = form["second-addend"].value

    const sum = Number(firstAddend) + Number(secondAddend)

    document.body.getElementsByTagName('p')[0].textContent = `The sum is: ${sum}`

    const minuend = form["minuend"].value
    const subtrahend = form["subtrahend"].value

    const difference = Number(minuend) - Number(subtrahend)

    document.body.getElementsByTagName('p')[1].textContent = `The difference is: ${difference}`

    const firstFactor = form["first-factor"].value
    const secondFactor = form["second-factor"].value

    const product = Number(firstFactor) * Number(secondFactor)

    document.body.getElementsByTagName('p')[2].textContent = `The product is: ${product}`
})
