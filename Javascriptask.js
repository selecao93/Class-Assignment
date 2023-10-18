//Que 2.
let num1 = 10;
let num2 = 20;

let result = num1 > num2 ? `${num1} is greater` : num1 < num2 ? `${num2} is greater` : "Both are equal";

console.log(result);


//Que 2.
 let num1 = 10;
let num2 = 20;
let num3 = 30;

let mean = (num1 + num2 + num3) / 3;

console.log(`The arithmetic mean of ${num1}, ${num2}, and ${num3} is: ${mean}`);


//Que 3.
let num = 7; // Change this to any number you want to check

if (num % 2 === 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}


//Que 4.
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a:", a); // Output: 10
console.log("b:", b); // Output: 5


//Que 5.
let variable1 = 5;
let variable2 = "5";

// Using === (strict equality)
console.log(variable1 === variable2); // Output: false

// Using == (loose equality)
console.log(variable1 == variable2); // Output: true
