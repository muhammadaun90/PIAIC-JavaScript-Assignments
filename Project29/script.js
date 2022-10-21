/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let favorite_fruits = ["Banana", "Mango", "Apple"];
let userFavoriteFruits = prompt("Enter your favorite fruit");
let itemCheck = favorite_fruits.includes("Banana");
if(itemCheck){
    console.log(`I really like ${favorite_fruits[0]}`);
}
let itemCheck2 = favorite_fruits.includes("Mango");
if(itemCheck2){
    console.log(`I really like ${favorite_fruits[1]}`)
}
let itemCheck3 = favorite_fruits.includes("Apple");
if(itemCheck3){
    console.log(`I really like ${favorite_fruits[2]}`)
}
let itemCheck4 = favorite_fruits.includes("Orange");
if(itemCheck4){
    console.log(`I really like ${favorite_fruits[3]}`)
}
let itemCheck5 = favorite_fruits.includes("Grapes");
if(itemCheck5){
    console.log(`I really like ${favorite_fruits[4]}`)
}