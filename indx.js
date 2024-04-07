let numbersArray = [2, 3, 7, 8, 10, 13, 15, 18, 34, 25];

// Task 1: Mapping to Doubles
const doublesArray = numbersArray.map(num => num * 2);
console.log("Doubled Array:", doublesArray);

// Task 2: Filtering Evens
const evenNumbersArray = numbersArray.filter(num => num % 2 === 0);
console.log("Even Numbers Array:", evenNumbersArray);

// Task 3: Summation
const sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of Array:", sum);
