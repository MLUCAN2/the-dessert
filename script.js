// console.log('Weeee World')

// // Variables store data temporarily in memory
// //Should be meaningful, can't start with a number or have spaces or hyphens
// let firstName= 'Myron'; //this is a string
// console.log(firstName);

// // "let" variables can have different values
// let interestRate= 0.5; //this is a number
// interestRate= 2;
// console.log(interestRate)

// // "const" variables will have a CONSTANT value
// const animal= 'Tiger';
// //animal= elephant; // this will make it undefined
// console.log(animal)

// // When we want to make an object we take a variable and use an object literal
// const person= {
//     name: 'Trevor',
//     age: 30,
//     breath: 'stinky'
// }; 
// console.log(person)

// const animals= {
//     name: 'elephant',
//     type: 'mammal',
//     legs: 4
// };
// console.log(animals);

// // Dot notation (variable.attribute)
// person.name= 'Mary';
// console.log(person);

// // Bracket notation
// person['name']= 'Tom';
// console.log(person);

// // This is an example of an array. In the console log we can select a specific bird from the array list
// let birds=['Parrot', 'Sparrow', 'Crow'];
// birds[3]= 'Pigeon';
// console.log(birds);
// //In the console log we can select a specific bird from the array list
// console.log(birds[1]);

// // This is a function declaration
// // Name is a parameter and argument is John or what is passed as the name
// function greet(name, lastName){
//     console.log('Hello '+ name + ' '+ lastName)
// }

// // To call the function
// greet('John', 'Smith');
// greet('Jerry');

// // Function to calculate a value
// function square(number){
//     return number*number
// }

// let number= square(2);
// console.log(number)
// // or
// console.log(square(2))


// function division(numbers){
//     return numbers/numbers
// }

// console.log(division(4));

// function addition(num1,num2){
//     return num1+num2;
// };

// console.log(addition(5, 5));


// function dec(num1){
//     return num1-=1;
// }

// console.log(dec(3))
// // Mathematical or arithmetic operators]
// // These can be 
// //+ addition, - subtraction, * multiplication, / division, % modular (takes the difference of a divided number)
// // Increment and decrement operators +=, -=, ++ (adds one to the value), (-- subtracts one from the value),

// // Comparison operators (Will give a boolean value)
// // > Greater than, < Less than, > Greater than or equal, <=Less than or equal, 
// let num1=15
// let num2=70

// const isNum1GreaterThan= num1>num2
// console.log(isNum1GreaterThan)

// // Equality operators 
// // = is an assignment operator, == is checking loose equality (2 and string '2' would give us true), === is checking equality
// function equalNums(num1,num2){
//     return num1 === num2;
// }

// console.log(equalNums(5,5));

// // Ternary Operator uses ? as an if statement
// // let age= 12;
// // if the driver's age is > 16 then the value will be true we are assigning a true or false value based on the "age" condition
// // const canDrive= age >= 16 ? true : false
// // console.log(canDrive)

// // Logical Operators- evaluate from left to right
// // Include || or (as long as one is true the result will be true), && and, ! not, ?? null

// // Or operator
// let hasReservation= true;
// let acceptingWalkIns= false;
// const hasAccessToTable= hasReservation || acceptingWalkIns;
// console.log('Table available:', hasAccessToTable);

// //And operator (both values must be true otherwise it is false)
// //i.e. true && false = false
// let age=18;
// let canDrinkAlcohol= true

// const ableToDrink= age >= 21 && canDrinkAlcohol;
// console.log("At or above the legal drinking age:", ableToDrink);

// // ! Not or Inverse operator
// let isWorkingDuringTheWeek= true
// const isWeekend= !isWorkingDuringTheWeek;
// console.log('Myron is working this weekend:', isWeekend);

// // ?? Null operators allows us to impose a default value 
// let a= null
// const result= a ?? true;
// //another way of writing, if the () expression is true then return a otherwise ":" return false
// // const result= (a !== null && a !== undefined) ? a : false;

// console.log(result)

// // Falsy means when we use logical operators with non-boolean values, these falsy values include null, undefined, non-numbers, empty strings, 0, and false

// // If statements

// let priceOfChocolate= 2.00;
// let cashInHand= 1;

// const canByChocolate= cashInHand >= priceOfChocolate;
// console.log("Chocolate can be purchased:", canByChocolate)

// // To use an if else statement we would say

// if (canByChocolate){ //When true the first if will execute otherwise it will go to the else statement
//     console.log("Enjoy")
// }else{
//     console.log("Sorry Charlie, that's not enough")
// }

// // Else if extends the function to include more parameters
// // Below is an example of restaurant hours 
// let hour=24;
// if (hour>=6 && hour<=12){
//     console.log("Breakfast Time");
// }else if(hour>12 && hour <= 16) {
//     console.log("Lunch Time");
// }else if(hour >16 && hour <= 22){
//     console.log('Dinner Time');
// }else{
//     console.log('We are closed');
// }

// // Switch case statements- used for equality comparisons
// let job= 'Plumber';

// // This is an example of if else statements
// if (job === 'Developer'){
//     console.log('Writes code')
// }else if(job === 'Designer'){
//     console.log('Makes UI')
// }else {console.log( 'Not in tech')}

// // This is the switch case
// switch (job){
//     case 'Developer':
//         console.log('Writes Code');
//         break;
//     case 'Designer':
//         console.log ('Makes UI');
//         break;
//     default: 
//         console.log('Not in tech');
// }

// let light= 'none';

// switch (light){
//     case 'green':
//         console.log('The light is:', light, '-Please go');
//         break;
//     case 'yellow':
//         console.log('The light is:', light, '-Please slow down');
//         break;
//     case 'red':
//         console.log('The light is:', light, '-STOP');
//         break;
//     default: console.log('The light is down, stop and proceed with caution');
// }

// //For loops- executes a code block multiple times until directed to stop, better for iterating over an array
// let numbers= [1, 2, 3, 4, 5, 6, 7, 8]
// let index= 0
// let lengthOfArray=numbers.length;

// This is very repetative 
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// for(
//     //initialize
//     let index=0; 
//     //condition (is the index less than the numbers.length)
//     index < numbers.length;
//     //increment/decrement to terminate the code once it reaches the end of the index 
//     index++ ){
//         console.log(numbers[index])
//     };

// for(
//     let num=0;
//     num < 20;
//     num++
// ){
//     console.log(num)
// }

// While loops-continue to execute while a condition is true, the condition must be true in order to execute
// for (
//     let index=0;
//     index < numbers.length;
//     index++
// ){
//     console.log(numbers[index])
// }


// let index=0;
// while (index<numbers.length){
//     console.log(numbers[index]);
//     index++;
// }

// let sum=0
// while (true){
//     console.log('Loop');
//     sum++;
//     if(sum===10)
//         break;
// }

// For-in loop- allows us to iterate over the keys of our objects as opposed to listing them one at a time 
// const course= {
//     name: 'JS for beginners',
//     duration: 3,
//     sections: 7
// };

// for (const key in course){
//     console.log(course[key]);

// };

//This becomes ineficient when we have many keys
// console.log(course.name);
// console.log(course.duration);
// console.log(course.sections);

// Comparison w/ logical operators
// This is also called chaining the statement 
// function testLogical(value){
//     if (value >= 25 && value <= 50){
//        return 'Value is between 25 and 50'
//     }else if (value <25 || value >50){
//         return 'Value is less than 25 or more than 50'
//     }else{
//         return 'That is not a number you silly goose!'
//     }
// };
// console.log(testLogical('what'))

// // Stroke is how many hits, par is how many attempts it should take. So when we say strokes, par-1 we are saying that the strokes is one under par.
// const names= ['Hole-in-one', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey','Go home'];
// function golfScore (par, strokes){
//     if (strokes == 1){
//         return names[0]
//     }else if(strokes <= par-2){
//         return names[1]
//     }else if(strokes == par-1){
//         return names[2]
//     }else if(strokes == par){
//         return names[3]
//     }else if(strokes == par+1){
//         return names[4]
//     }else if(strokes == par+2){
//         return names[5]
//     }else if(strokes >= par+3){
//         return names[6]
//     }
// }
// console.log(golfScore(4,2));

// Replace if-else chains with switch
const names= ['Hole-in-one', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey','Go home'];
function golfScore (par, strokes){
    // When working with more complex functions the switch should use true
    switch (true){
    case (strokes == 1):
        return names[0]
    case (strokes <= par-2):
        return names[1]
    case (strokes == par-1):
        return names[2]
    case (strokes == par):
        return names[3]
    case (strokes == par+1):
        return names[4]
    case (strokes == par+2):
        return names[5]
    case (strokes >= par+3):
        return names[6]
    }
}
console.log(golfScore(4,4));



// Switch Statements
// function test(val){
//     var answer= "";
//     switch (val){
//         case "a":
//             answer= "Excellent"
//             break;
//         case "b":
//             answer= "Great"
//             break;
//         case "c":
//             answer= "Good"
//             break;
//         case "d":
//             answer= "Needs improvement"
//             break;
//         case "f": 
//             answer= "Failing"
//             break;
//         default:
//             answer="Please enter a,b,c,d,or f"
//     }
//     return answer
// }
// console.log(test('k'))

// When we want a switch case statement that delivers the same output for multiple inputs
function sequentialSize(val){
    var answer= '';
    switch (val){
        case 1:
        case 2:
        case 3:
            answer= 'low'
            break;
        case 4:
        case 5:
        case 6:
            answer= 'mid'
            break;
        case 7:
        case 8:
        case 9:
            answer= 'high'
            break; 
    }
    return answer;
}

console.log(sequentialSize(9));





