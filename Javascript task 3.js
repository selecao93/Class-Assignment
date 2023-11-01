QUE (1).
let celsiusValue = 20;
let fahrenheitValue = 68;

let celsiusToResult = celsiusToFahrenheit(celsiusValue);
let fahrenheitToResult = fahrenheitToCelsius(fahrenheitValue);
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(`${celsiusValue}°C in Fahrenheit is: ${celsiusToResult}°F`);
console.log(`${fahrenheitValue}°F in Celsius is: ${fahrenheitToResult}°C`);

Que 2.

let num = 8; // Change this to any non-negative integer

let result = factorial(num);
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(`The factorial of ${num} is: ${result}`);

QUE. (3).

let numbers = [1, 2, 3, 4, 5];
function double(number) {
    return number * 2;
}
let doubledNumbers = applyCallback(double, numbers);
function applyCallback(callback, numbers) {
    return numbers.map(callback);
}
console.log(doubledNumbers);

QUE. (4).
let Library = {
    books: [],

    addBook: function(title, author, isRead) {
        this.books.push({title: title, author: author, isRead: isRead});
    },

    deleteBook: function(title) {
        this.books = this.books.filter(book => book.title !== title);
    },

    displayReadBooks: function() {
        let readBooks = this.books.filter(book => book.isRead);
        return readBooks;
    }
};
Library.addBook("A Better Tomorrow", "Chinua Achebe", true);
Library.addBook("1984", "George Orwell", true);
Library.addBook("The Catcher in the Rye", "J.D. Salinger", false);

Library.deleteBook("1984");

let readBooks = Library.displayReadBooks();

console.log(Library.books); // Display all books in the library
console.log(readBooks); // Display all read books


QUE .(5).
    let person = {
    name: "Awojulu Aaron",
    age: 26,
    occupation: "Software Engineer"
};

let { name, age } = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

