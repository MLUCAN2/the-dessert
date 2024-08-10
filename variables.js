// Variables are a way to keep and store data by name. As it follows let, const, and var are keywords, then your variable, and then = your value
// You have to declare the value. AKA don't leave the value blank or else it will be undefined

// The let variable's value can be changed 
let firstName='Myron';
// Const variable's value cannot be changed
const lastName='Lucan';

console.log(firstName+ ' ' +lastName)


// Primitive Data Types -- strings, boolean, numbers, null, undefined, symbols, bigInt, 
//Strings- we can use ', "", or `
let favoriteFruit= 'Strawberries';
favoriteFruit= "Oranges";
favoriteFruit= `Bananas`;

console.log(favoriteFruit);
// We can use typeOf to figure out which data type
console.log(typeof(favoriteFruit));

// Boolean- is either true or false
const isDog= true;
console.log(isDog);

// Number- can be a whole number or a decimal
let age= 29.5

console.log(age)
console.log(typeof(age))

// Null
let temperature= null;

console.log(temperature);
// This will come back as an object but is not one
console.log(typeof(temperature))

// Undefined
let appetizer;

console.log(appetizer)

// Symbols- used to create unique identifiers and objects
const uniqueKey= Symbol();

// Object- this is a non-primitive data type
let cat={
    name: 'Horus',
    breed: 'Tabby',
    legs: 4
}

console.log(cat);
console.log(typeof(cat));

// Dynamic types- In other languages like Java or C# data types are strict, meaning a string can only be a string, a number can only be a number, etc. Not in JS though.
let car= 'Subaru';
console.log(typeof(car))
car= 150;
console.log(typeof(car))
car= true;
console.log(typeof(car))


