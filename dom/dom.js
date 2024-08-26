// ----------------------------------------------------------------------------------------------------------------
// DOM- Basic Manipulation

// IMPORTANT NOT: Methods utilize () while properties do not (we typically us dot notation)

// To access something in our HTML, it must be assigned an ID and we must reference it on the JS page
// The following is called dot notation
// Document refers to the html page that is linked to the JS page
// Style.color is referring to the property 
document.getElementById('one').style.color= 'red';

// We can affect multiple elements at the same time by using the getElementsByTagName() method
let myText= document.getElementsByTagName('p');
console.log(myText);

// We can use the alert method to see the value of a variable i when it goes through the loop
// The alert will go through each looped item
for (var i=0; i<myText.length; i++){
    myText[i].style.color='red';
    // alert(`THIS IS ELEMENT ${i}`)
}

// Similar to the getElementById we can also use the getElementsByClassName
var myHeaders= document.getElementsByClassName('header');
for (var i=0; i< myHeaders.length;i++){
    myHeaders[i].style.color='blue';
}

// Another widely used document method is querySelector(), which returns the first match of a query
//To access the element we need to use CSS syntax
var myQuery= document.querySelector('.cheeses');
myQuery.style.color='green';

// The innerHtml property allows us to manipulate html elements using js
// This will remove the li items on the original html and replace it
// myQuery.innerHTML= '<li>Muenster</li>' 

// We can use setAttribute() method to set the value of an attribute of an element
//In the example below we will use a checkbox
var myCheckbox= document.querySelector('input');
myCheckbox.setAttribute('checked', 'checked');

// To create elements on the DOM use createElement() method
var newTag= document.createElement('p');
var myNewText= document.createTextNode(`This will be my new paragraph`);
newTag.appendChild(myNewText);
var myDiv= document.querySelector('.paragraphs')
myDiv.appendChild(newTag)

// This wil put it on the same line as the previous paragraph. 
var myNewText2=document.createTextNode('Yay, we crated a new element!')
newTag.appendChild(myNewText2)
myDiv.appendChild(newTag)

// To remove an element we would use removeChild() method
// Notice the structure, we have the container, then the method, then the actual variable we want to remove 
newTag.removeChild(myNewText);

// Important to note, use recognized forms of element names like div, section, etc
var myBody= document.querySelector('.body');
var newSection= document.createElement('section')
myBody.appendChild(newSection);
var copyright= document.createElement('div');
copyright.id='copyright'
newSection.appendChild(copyright);
var paragraph= document.createTextNode('copyright info');
copyright.appendChild(paragraph);
copyright.style.color='brown';

// ----------------------------------------------------------------------------------------------------------

// Capturing Events
// We are going to access the button on the html file
var btn= document.querySelector('button')
function buttonPush(){
    alert('Ouch, I said dont push me')
}
btn.onclick=buttonPush;

// Event listeners- more widely used
// function ouch(){
//     alert('Jeez, that really hurts')
// }
// btn.addEventListener('click', ouch)

//  We can pass in an event or e object to add additional features.
// This will make the button grey once it is pushed
function ouch(e){

    e.target.style.backgroundColor= 'grey'
    e.preventDefault();
    alert('Jeez, that really hurts')
}
btn.addEventListener('click', ouch)

//  We can pass in an event or e object to add additional features. 
var link= document.querySelector('a');

function googleButton(e){
    e.target.style.backgroundColor='green'
    e.preventDefault(alert('Oops, looks like the preventDefault is working...teehee'));
}
link.addEventListener('click', googleButton)

// Using the eventListener method, we can also create a submit event to submit forms
var myForm= document.querySelector('form');

myForm.addEventListener('submit', function (e){
    e.preventDefault();
    // We have to specify the input or else it uses the checkbox's input
    var formData= document.querySelector('input[type="text"]').value;
    alert(formData);
});

