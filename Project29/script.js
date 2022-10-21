/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let favorite_fruits = ["Banana", "Mango", "Apple"];
let userFavoriteFruits = prompt("Enter your favorite fruit");
let itemCheck = userFavoriteFruits.includes("Banana");
if(itemCheck){
    console.log(`I really like ${favorite_fruits[0]}`);
}
let itemCheck2 = userFavoriteFruits.includes("Mango");
if(itemCheck2){
    console.log(`I really like ${favorite_fruits[1]}`)
}
let itemCheck3 = userFavoriteFruits.includes("Apple");
if(itemCheck3){
    console.log(`I really like ${favorite_fruits[2]}`)
}
let itemCheck4 = userFavoriteFruits.includes("Orange");
if(itemCheck4){
    console.log(`Not in the list ${favorite_fruits[3]}`)
}
let itemCheck5 = userFavoriteFruits.includes("Grapes");
if(itemCheck5){
    console.log(`Not in the list ${favorite_fruits[4]}`)
}