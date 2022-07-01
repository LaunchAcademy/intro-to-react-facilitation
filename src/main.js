import React from "react"
import ReactDOM from "react-dom"

const myAge = 34
const ageOfMyFriend = 25

let whoIsOlder
if (props.myAge > props.ageOfMyFriend) {
    whoIsOlder = "I am older"
} else {
    whoIsOlder = "My friend is older"
}

const displayWhoIsOlderCallbackFunction = () => {
    alert(whoIsOlder)
}

const questionToDisplay = "Click me to determine who is older: my friend, or me!"

const divElement =
<div onClick={displayWhoIsOlderCallbackFunction}>
    <p>
        {questionToDisplay}
    </p>
</div>

ReactDOM.render(
    divElement,
    document.getElementById('app')
)
