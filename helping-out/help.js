const largestNum = [0,4,7,9,1,5,-6,8]

const maxNum = largestNum[0]

for (let i = 0; i < largestNum.length; i++){
    if (largestNum[i] > maxNum){
        max = largestNum[i]
    }
}


// Things that work

// let max = 0

// for (let i = 0; i < largestNum.length; i++){
//     if (largestNum[i] > max){
//         max = largestNum[i]
//     }
// }

// const max = Math.max(...largestNum)

// const max = largestNum.reduce((acc, cur) => {
//     return acc > cur ? acc : cur
// })

console.log(max)