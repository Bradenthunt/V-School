//1.
function findLargest(){
    const arrOfNumbers = [13, 56, 86, 32, 94];
    temp = 0;

    arrOfNumbers.forEach((element) => {
        if (temp < element){
            temp = element;
        }
    });

    console.log(`The largest number is: ${temp}`);
}

console.log(findLargest());

//2.
function findTheCharacter(){
    const funkyStrings = ['so*(', '#*LKFd', '@#9kds', '@#)jl'];
    const character = '*';
    const stringsWithCharacter = [];

    for (let i = 0; i < funkyStrings.length; i++){
        if (funkyStrings[i].includes(character)){
            stringsWithCharacter.push(funkyStrings[i]);
        }
    }
    console.log(stringsWithCharacter);
}

console.log(findTheCharacter());

//3.
function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(isDivisible(4, 3));