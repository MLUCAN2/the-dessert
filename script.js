console.log('Weeee World')

// Variables store data temporarily in memory
//Should be meaningful, can't start with a number or have spaces or hyphens
let firstName= 'Myron'; //this is a string
console.log(firstName);

// "let" variables can have different values
let interestRate= 0.5; //this is a number
interestRate= 2;
console.log(interestRate)

// "const" variables will have a CONSTANT value
const animal= 'Tiger';
//animal= elephant; // this will make it undefined
console.log(animal)

// When we want to make an object we take a variable and use an object literal
const person= {
    name: 'Trevor',
    age: 30,
    breath: 'stinky'
}; 
console.log(person)

const animals= {
    name: 'elephant',
    type: 'mammal',
    legs: 4
};
console.log(animals);

// Dot notation (variable.attribute)
person.name= 'Mary';
console.log(person);

// Bracket notation
person['name']= 'Tom';
console.log(person);

// This is an example of an array. In the console log we can select a specific bird from the array list
let birds=['Parrot', 'Sparrow', 'Crow'];
birds[3]= 'Pigeon';
console.log(birds);
//In the console log we can select a specific bird from the array list
console.log(birds[1]);

// This is a function declaration
// Name is a parameter and argument is John or what is passed as the name
function greet(name, lastName){
    console.log('Hello '+ name + ' '+ lastName)
}

// To call the function
greet('John', 'Smith');
greet('Jerry');

// Function to calculate a value
function square(number){
    return number*number
}

let number= square(2);
console.log(number)
// or
console.log(square(2))


function division(numbers){
    return numbers/numbers
}

console.log(division(4));

function addition(num1,num2){
    return num1+num2;
};

console.log(addition(5, 5));


function dec(num1){
    return num1-=1;
}

console.log(dec(3))
// Mathematical or arithmetic operators]
// These can be 
//+ addition, - subtraction, * multiplication, / division, % modular (takes the difference of a divided number)
// Increment and decrement operators +=, -=, ++ (adds one to the value), (-- subtracts one from the value),

// Comparison operators (Will give a boolean value)
// > Greater than, < Less than, > Greater than or equal, <=Less than or equal, 
let num1=15
let num2=70

const isNum1GreaterThan= num1>num2
console.log(isNum1GreaterThan)

// Equality operators 
// = is an assignment operator, == is checking loose equality (2 and string '2' would give us true), === is checking equality
function equalNums(num1,num2){
    return num1 === num2;
}

console.log(equalNums(5,5));

// Ternary Operator uses ? as an if statement
// let age= 12;
// if the driver's age is > 16 then the value will be true we are assigning a true or false value based on the "age" condition
// const canDrive= age >= 16 ? true : false
// console.log(canDrive)

// Logical Operators- evaluate from left to right
// Include || or (as long as one is true the result will be true), && and, ! not, ?? null

// Or operator
let hasReservation= true;
let acceptingWalkIns= false;
const hasAccessToTable= hasReservation || acceptingWalkIns;
console.log('Table available:', hasAccessToTable);

//And operator (both values must be true otherwise it is false)
//i.e. true && false = false
let age=18;
let canDrinkAlcohol= true

const ableToDrink= age >= 21 && canDrinkAlcohol;
console.log("At or above the legal drinking age:", ableToDrink);

// ! Not or Inverse operator
let isWorkingDuringTheWeek= true
const isWeekend= !isWorkingDuringTheWeek;
console.log('Myron is working this weekend:', isWeekend);

// ?? Null operators allows us to impose a default value 
let a= null
const result= a ?? true;
//another way of writing, if the () expression is true then return a otherwise ":" return false
// const result= (a !== null && a !== undefined) ? a : false;

console.log(result)

// Falsy means when we use logical operators with non-boolean values, these falsy values include null, undefined, non-numbers, empty strings, 0, and false
