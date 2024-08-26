// // Challenge 1: Write your name so that it will appear in the console.
// let firstName= 'Myron';
// let lastName= 'Lucan';

// console.log(`${firstName} ${lastName}`)

// // Challenge 2: Write out a string with an adjective about yourself. Concatenate it with your name
// let aboutMe= `Hi! My name is ${firstName} ${lastName} and I am inconsistently funny!`;
// console.log(aboutMe);

// /*Challenge 3: Write script that prompts the user for their name, and
// then display a sentence in the console that greets the
// user by name and welcomes them. */
// // var name= prompt('Whats your name friend?')
// // if(name !== ''){
// //     console.log(`Good to meet you ${name}`)
// // }
// // else{
// //     console.log('Please refresh and enter your name.')
// // }

// /* Challenge 4: Use prompt and ask the user for a
// whole number. If they type in a number less
// than 10, have the console log report, "You
// entered a number smaller than 10",
// otherwise, send "You entered a big number"
// to the console. */

// // var number= prompt('Please enter a whole number', );
// // if( number < 10){
// //     console.log('You entered a number lower than 10')
// // }
// // else if (number > 9){
// //     console.log('You entered a number greater than 10')
// // }
// // else if (number == 10){
// //     console.log(`Congrats, you entered ${number}, you're a winner!`)
// // }
// // else if (number){
// //     console.log('Well you have to enter something silly')
// // }
// // else {
// //     console.error('Thats not a number you goose');
    
// // }

// /* Challenge 5: If the user types a number
// less than 10, use a loop to print out the
// numbers from zero to 9 in the console. */ 


// // var number= prompt('Please enter a whole number', );
// // if( number < 10){
// //     console.log('You entered a number less than 10')
// //     for (var i=0; i < 10; i++){
// //         if (i == number){
// //             console.log(`Here is a ${i}  <---This is your number`)
// //         }
// //         else{
// //             console.log(`Here is a ${i}`)
// //         }
// //     }
// // }
// // else if (number > 10){
// //     console.log('You entered a number greater than 10')
// // }
// // else if (number == 10){
// //     console.log(`Congrats, you entered ${number}, you're a winner!`)
// // }
// // else if (''){
// //     console.log('Well you have to enter something silly')
// // }
// // else {
// //     console.error('Thats not a number you goose');
    
// // }

// // We can also imbed the loop into a function
// // function numberFinder(){
// //     var number= prompt(`Please enter a number:`);
// //     if(number < 10 && number > 0){
// //         for( var i=0; i<10; i++){
// //             if (i == number){
// //                 console.log(`Here is a ${i} <---This is what you chose`);
// //             }
// //             else{
// //                 console.log(`Here is a ${i}`);
// //             }
// //         }
// //     }
// //     else if(number > 10){
// //         console.log(`You chose ${number}, that was bigger than expected`)
// //     }
// //     else if( number == 10){
// //         console.log(`Congrats, you are a winner!`)
// //     }
// //     else {
// //         console.log('You need to enter a number');
// //     }
// // }
// // numberFinder();


// function hello(name){
//     var name= prompt('Please enter your name')
//     if (name == '' || name == null){
//         console.log('You need to enter your name')
//     }else{
//          var greeting= `Hello ${name}, and welcome!`
//         return name
//     }
    
// };

// function randomSelection(min, max){
//     return Math.floor((max-min+1) * Math.random())+min
// };

// var foods=['cheese', 'pears', 'apples', 'almonds', 'cake', 'brownies'];
// function hospitality(){
//     var name= hello()
//     if (name){
//         console.log(`Hello ${name}, and welcome!`)
//         var randomFood= foods[randomSelection(0, foods.length-1)]
//         console.log(`${name}, would you like some ${randomFood}?`)
//     }
// };

// hospitality()

// To add mouseover and mouseout events
var box= document.querySelector('p');

box.addEventListener('mouseover', function(){
    box.innerHTML= 'This is a mouseover event!';
})
box.addEventListener('mouseout', function() {
    box.innerHTML= 'Where did you go?!'
})

var list1= document.querySelector('#item1')

list1.addEventListener('mouseover', function(){
    list1.innerHTML= 'Where\'s Donald?'
})

// To add a scroll event
var pageTop;

// This will tell you in the console, how far you are going down
// This is also inefficient because it has to track the position
window.addEventListener('scroll', function(){
    pageTop=window.pageYOffset;
    console.log(pageTop)
});



