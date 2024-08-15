
// The following is a sequence
// To capitalize a string we use .toUpperCase
var myString= 'I am really hungry for some ';
console.log(myString);

var myUpperString= myString.toUpperCase();
console.log(myUpperString)

// To locate an item within a string, we use .search
var findReally= myString.search('really');
//This will return the numerical position where 'really' starts
console.log(findReally);

//To locate the entire word within the string we use .substr
var wholeReally= myString.substr(findReally, 6)
console.log(wholeReally);

// Now make 'really capitalized'
var capReally= wholeReally.toUpperCase();
console.log(capReally);

// To replace 'really' we would use .replace
var newReally= myString.replace('really', capReally);
console.log(newReally);

// Now we can add in an element from the array below
var seafood= ['clams', 'oysters', 'shrimp', 'salmon', 'trout'];
console.log(newReally + seafood[0]);
// Or we can do 
console.log(`${newReally}${seafood[1]}!`)

// Now create a loop to iterates through the seafood array and concatenates our newReally string
for(var i=0; i<seafood.length; i++){
        console.log(`${newReally}${seafood[i]}`);
}

// Now create a loop that takes the odd elements of the array and make them cap'd and leave the rest
// for(var i=0; i<seafood.length; i++){
//         var remainder= i % 2;
//         if (remainder === 0){
//                 var capSeafood= seafood[i].toUpperCase();
//                 console.log(`${newReally}${capSeafood}`);
//         }
//         else{
//                 console.log(`${newReally}${seafood[i]}`);  
//         }
// }

// Or we can refactor to ths
for( var i=0; i < seafood.length; i++){
        if( i % 2 === 0){
                console.log(`${newReally}${seafood[i].toUpperCase()}`)
        }
        else{
                console.log(`${newReally}${seafood[i]}`); 
        }
}

