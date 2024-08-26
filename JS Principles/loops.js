//For more loops go to https://www.w3schools.com/js/js_loop_for.asp
// The most common loop we will see is a for loop (i++ is the same as i+1)
// for(var i=0; i<=10; i++ ){
//     console.log(i);
// }

// We are going to create a for loop to run through an array
var colors= ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
for (var i=0; i< colors.length; i++){
    console.log(colors[i])
}

// Do it again with a different variable and value
var fruits= ['apples', 'oranges', 'pears', 'dragon fruit', 'strawberries']
/* We are setting i to zero, which is the first element in our array.
Then we make i less than the length of the fruits array. As long as the
i is shorter than the length of the array it will keep incrementing +1 */
for (var i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// A for of loop is specific for working with arrays
// It is just a more streamlined process of handling arrays
var vegetables= ['celery', 'carrots', 'onions', 'turnips', 'cabbage'];
for(var eachItem of vegetables){
    console.log(eachItem);
}

// We can also make it work with stings
// This should create a line for each letter, space, punctuation, etc.
var myString= "Guuuuurl, hush!"
for(var eachItem of myString){
    console.log(eachItem)
}

// While loops
// An incrementor has to be defined outside of a while loop
var incrementor= 0;
var text='';

while(incrementor<10){
// += means that each time the loop runs add on
//The \n makes sure to put the next incremented value on the next line
//  text+="The incrementor has gone up to " +incrementor + "\n";
// We can also use a template literal
    text+=`The incrementor has gone up to ${incrementor} \n`;
    incrementor++;
}
console.log(text);




