QUE.(1).
  let num1 = 10;
let num2 = 20;
let num3 = 30;

let mean = (num1 + num2 + num3) / 3;

console.log(`The arithmetic mean of ${num1}, ${num2}, and ${num3} is: ${mean}`);

QUE.(2).
  let dayNumber = 3; // Change this to any number from 1 to 7

let dayOfWeek;

switch (dayNumber) {
    case 1:
        dayOfWeek = "Sunday";
        break;
    case 2:
        dayOfWeek = "Monday";
        break;
    case 3:
        dayOfWeek = "Tuesday";
        break;
    case 4:
        dayOfWeek = "Wednesday";
        break;
    case 5:
        dayOfWeek = "Thursday";
        break;
    case 6:
        dayOfWeek = "Friday";
        break;
    case 7:
        dayOfWeek = "Saturday";
        break;
    default:
        dayOfWeek = "Invalid input. Please enter a number from 1 to 7.";
}

console.log(`The corresponding day of the week is: ${dayOfWeek}`);

QUE. (3).
  let N = 10; // Change this to the desired number of even numbers

if (N <= 0) {
    console.log("Please enter a positive number.");
} else {
    for (let i = 2, count = 0; count < N; i += 2, count++) {
        console.log(i);
    }
}

QUE.(4).
  let numbers = [2, 4, 6, 8, 7, 10, 12]; // Example array of numbers

let i = 0;
let found = false;

while (i < numbers.length && !found) {
    if (numbers[i] % 2 !== 0) {
        found = true;
    } else {
        i++;
    }
}

if (found) {
    console.log(`The first odd number in the array is: ${numbers[i]}`);
} else {
    console.log("No odd numbers found in the array.");
}


QUE.(5).

let age = 25; // Change this to any age you want to classify

let category = (age < 18) ? "child" : (age < 65) ? "adult" : "senior";

console.log(`The person is classified as a ${category}.`);

