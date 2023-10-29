// Equality and inequality with strings
let fruit1 = 'apple';
let fruit2 = 'banana';
let fruit3 = 'apple';
console.log("Are fruit1 and fruit2 equal? I predict False.");
console.log(fruit1 === fruit2);
console.log("Are fruit1 and fruit3 equal? I predict True.");
console.log(fruit1 === fruit3);

// Lowercase function tests
let text1 = 'Hello, World!';
let text2 = 'hello, world!';
let text3 = 'HELLO';
console.log("Is text1 equal to text2 in lowercase? I predict True.");
console.log(text1.toLowerCase() === text2.toLowerCase());
console.log("Is text1 equal to text3 in lowercase? I predict False.");
console.log(text1.toLowerCase() === text3.toLowerCase());

// Numerical tests
let number1 = 10;
let number2 = 5;
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

// Tests using "and" and "or" operators
let isMorning = true;
let isWeekend = false;
let isEvening = true;
console.log("Is it morning and not a weekend? I predict True.");
console.log(isMorning && !isWeekend);
console.log("Is it morning and not evening? I predict False.");
console.log(!isMorning && isEvening);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry', 'date'];
let fruitToCheck1 = 'cherry';
let fruitToCheck2 = 'mango';
console.log(`Is ${fruitToCheck1} in the array? I predict True.`);
console.log(fruits.includes(fruitToCheck1));
console.log(`Is ${fruitToCheck2} in the array? I predict False.`);
console.log(fruits.includes(fruitToCheck2));

// Test whether an item is not in an array
let cars = ['Toyota', 'Honda', 'Ford'];
let carToCheck1 = 'Nissan';
let carToCheck2 = 'Honda';
console.log(`Is ${carToCheck1} not in the array? I predict True.`);
console.log(!cars.includes(carToCheck1));
console.log(`Is ${carToCheck2} not in the array? I predict False.`);
console.log(!cars.includes(carToCheck2));