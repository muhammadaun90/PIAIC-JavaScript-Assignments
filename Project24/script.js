/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let humanbeings = "Human Rights"
humanbeings ? console.log("Equality"): console.log("Inequality");

let userName = "AUN";
userName == userName.toLowerCase() ? console.log(true) : console.log(false);
userName == userName.toUpperCase() ? console.log("Yes it's a upper case") : console.log("Yes it's not a upper case");


let age = 18;
age < 18 ? console.log("allowed") : console.log("denied");

let userAge = 25;
userAge >= 30 ? console.log(true) : console.log(false);
userAge <= 25 ? console.log(true) : console.log(false);
userAge < 25 ? console.log(true) : console.log(false);