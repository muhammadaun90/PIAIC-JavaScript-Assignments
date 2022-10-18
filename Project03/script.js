// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let userName = "Daniyal Nagori";
let userNameToUpperCase = userName.toUpperCase();
console.log(userNameToUpperCase);
let userNameToLowerCase = userName.toLowerCase();
console.log(userNameToLowerCase);
let userNameTitleCase = userName.split(' ')
    .map(w => w[0].toUpperCase()+w.substring(1).toLowerCase())
    .join(' ');
console.log(userNameTitleCase);