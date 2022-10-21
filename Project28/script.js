/* Stages of Life: Write an if-else chain that determines a person’s stage of life.
Set a value for the variable age */
let age = prompt("Enter your age");
if(age < 2){
    console.log("The person is a baby");
}
else if(age == 2){
    console.log("The person is a toddler");
}
else if(age >= 4 && age <= 12){
    console.log("The person is a kid")
}
else if(age > 12 && age <= 19){
    console.log("The person is a teenager");
}
else if(age >= 20 && age < 65){
    console.log("The person is an adult");
}
else if(age >= 65){
    console.log("The person is an elder");
}