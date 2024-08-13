// An array is used when we want to store multiple values in one variable
let planets= ['Mars', 'Jupiter', 'Venus', 'Earth', 'Mercury', 'Uranus', 'Saturn']

console.log(planets);

// To access one of the strings we can use bracket notation (starts at 0)
console.log(planets[0]);

// You can change the data types but you usually won't just to keep the code clean
// To find out how many values are in the array we would do the variable.length
console.log(planets.length)

var animals= ['cat', 'dog', 'chicken', 'cow', 'duck', 1];
console.log(animals);

// To add another animal to the array
animals.push('crow');
console.log(animals);

// To remove from the array
// The first number is saying which one to remove and the second is how many elements after the removed element
animals.splice(1,1)
console.log(animals)

// To sort alphabetically
animals.sort();
console.log(animals);

// To add, remove, sort, etc is known as an array method
// Check out https://www.w3schools.com/js/js_array_methods.asp for more info

// To find the last item in the array
console.log(animals[animals.length-1]);


//Incorporate if, else if, and else statements with an array
var colors= ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
let selectedColor= colors[30];
if(selectedColor===colors[5]){
    console.log("The color is violet");
}
else if(selectedColor===colors[4]){
    console.log('The color is blue');
}
else if(selectedColor===colors[3]){
    console.log('The color is green')
}
else if(selectedColor===colors[2]){
    console.log('The color is yellow')
}
else if(selectedColor===colors[1]){
    console.log('The color is orange')
}
else if(selectedColor===colors[0]){
    console.log('The color is red')
}
else{
    console.log('Please enter a number between 0 and 5 in the selectedColor value')
}