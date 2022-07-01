import React from "react"
import ReactDOM from "react-dom"

// create two arbitrary variables
// because they aren't going to change in this program, use const
const myAge = 34
const ageOfMyFriend = 25

// -------------
// the value of whoIsOlder is dependent on the conditional
// we create the variable with no value, and assign accordingly
let whoIsOlder;
if (myAge > ageOfMyFriend) {
    whoIsOlder = "I am older"
} else {
    whoIsOlder = "My friend is older"
}

// -------------
// a callback function that will be passed to an event listener
// the function has access to variables in the outer scope
// - first it looks inside of the function for "who is older"
// - then it looks in the outer scope for who is older
const displayWhoIsOlderCallbackFunction = () => {
    alert(whoIsOlder)
}

// -------------
// JSX looks like HTML, but allows for JavaScript
// this includes assigning the JSX to a variable for later
// we can also display the values of variables with curly brackets
const questionToDisplay = "Click me to determine who is older: my friend, or me!"

const divElement =
    <div onClick={onClickCallback}>
        <p>
            {questionToDisplay}
        </p>
    </div>;

// -------------
// render is a method with two arguments
// - what we want to render (some JSX element)
// - where we want to render it (somewhere in the index.html)
ReactDOM.render(
    divElement,
    document.getElementById('app')
)

// ------
// now let's separate our concerns and make a component...