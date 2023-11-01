


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
