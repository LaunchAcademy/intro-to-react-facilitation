import React from "react"

const GroceryMessage = (props) => {

    let timeBeforeGameOfThronesIsOn = 30
    let groceryMessage

    if (timeBeforeGameOfThronesIsOn > 20) {
        groceryMessage = "You can go grocery shopping if you are quick"
    } else {
        groceryMessage = "Don't even try. Just sit here and watch your show without snacks"
    }

    const greeting = () => {
        alert("YO! IM A REACT CALLBACK FUNCTION!")
    }
    console.log(groceryMessage)

    let somethingElse = <p>Sup Rachael</p>

   return (
        <div className="the-big-div">
            <h2 onClick={greeting}> {groceryMessage} </h2>
            <ul>
                <li> Kombucha </li>
                <li id="pop"> PopCorners </li>
                <li> Honey Crisp Apples </li>
            </ul>
           <p>{props.message}</p>
           <p>{props.otherText}</p>
           {somethingElse}
        </div>
   )
}

export default GroceryMessage