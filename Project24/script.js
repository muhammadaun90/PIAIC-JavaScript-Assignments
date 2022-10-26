/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

// for equality & inequality with strings
let humanbeings = "Human Rights"
humanbeings ? console.log("Equality"): console.log("Inequality");

// for lower & upper case functions
let userName = "AUN";
userName == userName.toLowerCase() ? console.log(true) : console.log(false);
userName == userName.toUpperCase() ? console.log("Yes it's a upper case") : console.log("It's not a upper case");

// numerical tests
let age = 18;
age < 18 ? console.log("allowed") : console.log("denied");

let userAge = 25;
userAge >= 30 ? console.log(true) : console.log(false);
userAge <= 25 ? console.log(true) : console.log(false);
userAge < 25 ? console.log("Your age is equals to 25") : console.log("Your age is not equals to 25");

// for || operators
let usersAge = prompt("Enter your age");
let userMarks = prompt("Enter your marks");
userAge < 17 || userMarks < 80 ? console.log("You are eligible for the course") : console.log("You are not eligible");

// test for && operators
let yourAge = prompt("Enter your age");
let nationality = prompt("Your nationality");
yourAge < 17 && nationality == "Pakistani" ? console.log("You are allowed") : console.log("Not allowed");

let fruits = ["Mango", "Banana", "Orange", "Pineapple", "Apple"];
fruits[4] ? console.log("Available") : console.log("Not available");
fruits[6] ? console.log("Available") : console.log("Not available");
