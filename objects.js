// To begin playing around simply type "node objects.js in the integrated terminal to see the logged values"

// Creating an object
const ourDog= {
    "Name": "Turner",
    "Legs": 4,
    'Tails': 1,
    'Breed': 'German Sheppard'
};

const myDog= {
    'Name': 'Charles',
    'Legs': 2,
    'Tails': 2,
    'Breed': 'Bull Terrier'
};

console.log(myDog, ourDog)

// Accessing properties of an object
var clothes={
    hat: 'ball cap',
    shirt: 'button down',
    pants: 'chinos',
    shoes: 'wingtip' 
}

console.log(clothes.shirt)

// This is pretty standard, however if the properties had spaces like "pretty hat" then we would use bracket notation like let hatValue= clothes['pretty hat'];
let hatValue= clothes.hat;
let shirtValue=clothes.shirt;
let pantsValue= clothes.pants;
let shoesValue= clothes.shoes;

// To change the values we can use dot notation
clothes.hat= 'sunhat';
console.log(clothes)

// To add an entirely new property to the object, otherwise known as 'extending' the object
clothes.accessories= 'diamond ring'
console.log(clothes)

// To delete a property from an object
delete clothes.accessories;
console.log(clothes);

// When looking up objects
function phoneticAlph(val){

    var lookup={
        a: 'alpha',
        b: 'bravo',
        c: 'charlie',
        d: 'delta',
        e: 'echo',
        f: 'foxtrot',
        g: 'golf',
        h: 'hotel',
        i: 'india',
        j: 'juliet',
        k: 'kilo',
        l: 'lima',
        m: 'mike',
        n: 'november',
        o: 'oscar',
        p: 'papa', 
        q: 'quebec',
        r: 'romeo',
        s: 'sierra',
        t: 'tango',
        u: 'uniform',
        v: 'victor',
        w: 'whiskey',
        x: 'x-ray',
        y: 'yankee',
        z: 'zulu'
    };
    result= lookup[val];
    return result;
}
console.log(phoneticAlph('a'))

// To check if an object has a particular property using the hasOwnProperty method
function checkObj(checkProp){
    if (phoneticAlph.hasOwnProperty(checkProp)){
        return phoneticAlph[checkProp]
    }else{
        return "Not Found"
    }
}
console.log(checkObj(d))
