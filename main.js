//functions syntax
//return parametrs
//function greet(name:string) {
//   return `Welcome, ${name}`
//}
//function call
console.log(greet("Areeba Ahmed"));
console.log(greet("Ahmed"));
//birthday party/
function party(guest, arrangement) {
    return guest + arrangement;
}
console.log(party(50, 25));
// two types of parameters
// 01 optional parameters
// 02 default parameters
//rest parameters
function choclate(who) {
    if (who) {
        return "angry , ".concat(who);
    }
    else {
        return "areeba";
    }
}
console.log(choclate());
console.log(choclate("areeba"));
// what is functions
// block of code is known as functions
//Return functions
function weeding(guest, food) {
    return guest + food;
}
console.log(weeding(1000, 50000));
//Functions in TypeScript are similar to functions in JavaScript, 
//but with added type annotations for parameters and return types. Here are some examples:
//Basic Function:
//A simple function that takes two numbers and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(3, 5)); // Output: 8
//Function Expression:
//Defining a function using a function expression.
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 6)); // Output: 24
//Function with Optional Parameter:
//A function with an optional parameter.
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob!
//Function with Default Parameter:
function greetDefault(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetDefault("Alice")); // Output: Hello, Alice!
console.log(greetDefault("Bob", "Hi")); // Output: Hi, Bob!
//rest parameters
//Rest parameters allow a function to accept an indefinite
// number of arguments as an array. In TypeScript, you can use
// the rest parameter syntax (...) to indicate that a parameter
// should be a rest parameter. Here's an example:
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
