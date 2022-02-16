let output = []

for (let i = 1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0){
        output.splice(i, 1, 'FizzBuzz')
    } else if (i % 5 === 0){
        output.push('buzz')
    } else if (i % 3 === 0){
        output.push('fizz')
    } else {
        output.push(i)
    }
}


console.log(output.join(""))