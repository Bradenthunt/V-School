var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.pop();
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);

console.log(fruit.indexOf('orange'));

fruit.push(fruit.indexOf('orange'));
console.log(fruit);

console.log(vegetables.length);
console.log("vegetables: ", vegetables);

vegetables.push(vegetables.length);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log(food);

var removed = food.splice(4, 2);
console.log(food);

var reversedFood = food.reverse();
console.log(food);

var final = reversedFood.join();
console.log(final);