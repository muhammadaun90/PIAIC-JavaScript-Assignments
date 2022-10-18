// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// White spaces
var person_name = " \n Muhammad        Aun \t Zaidi";
console.log(person_name);
person_name.trim();
// let result = person_name.replace(/^\s+|\s+$/gm,'');
let result = person_name.replace(/\s/g, "");
console.log(result);