// For more functions go to https://www.w3schools.com/js/js_functions.asp
// Functions are the building blocks of an app that allow us to group together statements to perform a task or calculate a value
// Function is the keyword, then the variable with (passed in or empty argument or parameter variable) then { our defined value(s) }
// function sayHi(){
//     console.log('Hi!!!');
// }
// //Then we call it to execute the code 
// sayHi();

// // Function with a parameter variable
// function sayBye(name){
//     console.log('Bye ' + name)//The string with the + is known as string concatenation
// }
// sayBye('Arthur');//This is where the argument gets passed in

// // Types of functions

// function doStuff(){
//     var myString= `Here is a string of text`;
//     var upperString= myString.toUpperCase();
//     console.log(myString);
//     console.log(upperString)
// }
// doStuff();

// // To pass in to a function
// function capMessage(message){
//     var upper= message.toUpperCase();
//     console.log(upper)
// }
// capMessage('hi there');

// function addNums(num1, num2){
//     var sum= num1 + num2
//     console.log(sum)
// }
// addNums(8,17)

// function subNums(num3, num4){
//     var sum= num3- num4;
//     console.log(sum)
// }
// subNums(500, 95)

// function multNum(num5, num6){
//     var sum= num5*num6;
//     console.log(sum);
// }
// multNum(60, 2)

// // How to return data
// function divNum(num7, num8){
//     var sum= num7/num8
//     return sum
// }
// console.log(divNum(12, 6))

// function txtMessage(message){
//     var text= message;
//     return text
// }
// console.log(txtMessage('Seymours your maaaan'))


// Generating a random number
// Step 1
// function randomNum(min, max){
//     var numOfValues= (max-min+1);
//     return numOfValues;
// }
// console.log(randomNum(86, 1000))

// Step 2: incorporating Math.random()
// function randomNum(min, max){
//     var sumOf= (max-min+1);
//     var randomGroup= Math.random();
//     var equation= sumOf*randomGroup
//     return equation
// }
// console.log(randomNum(2, 5))

// Step 3: round the numbers using Math.floor
// function randomNum(min, max){
//     var sumOf= (max-min+1);
//     var randomGroup=Math.random();
//     var equation= (sumOf*randomGroup);
//     var rounded= Math.floor(equation);
//     return rounded
// }
// console.log(randomNum(3,500))

// Step 4: add min to the rounded value that we generated
// function randomNum(min, max){
//     var sumOf= (max-min+1);
//     var randomGroup= Math.random();
//     var equation=(randomGroup*sumOf);
//     var rounded= Math.floor(equation);
//     var final= (rounded+min)
//     return final
// }
// We have established a range, so the number will not go past 5 or 10
// console.log(randomNum(5, 10))

// Step 5: incorporate an array so that the random number generator picks something out
// var colors=['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet', 'brown', 'black']

// function randomColor(min, max){
//     var sumOf= (max-min+1);
//     var random= Math.random();
//     var equation= random*sumOf;
//     var rounded= Math.floor(equation)
//     var final= (rounded+min)
//     return final
// }
// console.log(colors[randomColor(0,9)])

// Step 6: Refactor the code
var colors=['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet', 'brown', 'black']

function randomColor(min, max){
    return Math.floor((max-min+1) * Math.random())+min
}
console.log(colors[randomColor(0,9)])


// Making an anonymous function and assigning it to a variable
// var greeting= function(){
//     return ('Hello from the anonymous function')
// }
// console.log(greeting());     

// To calculate absolute difference
//In the function below, we are finding the absolute value by subtracting n from 21.
// If the number is higher than 21 than we get the difference and then double it.
function absDiff(n){
    if (n<=21){
        return Math.abs(21-n)
    }
    else{
        return Math.abs(n-21)*2
    }
}
console.log(absDiff(2))

