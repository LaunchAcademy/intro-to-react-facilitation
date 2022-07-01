import React from "react"

// if we passed props of `myAge` and `ageOfMyFriend`
const AgeComponent = (props) => {

    // const myAge = 34
    // const ageOfMyFriend = 25

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


    return(
        <div onClick={displayWhoIsOlderCallbackFunction}>
            <p>
                {questionToDisplay}
            </p>
        </div>
    )
}


export default AgeComponent