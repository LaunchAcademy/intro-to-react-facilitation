import React from "react"
import ReactDOM from "react-dom"
import AgeComponent from "./components/AgeComponent.js"


ReactDOM.render(
    <AgeComponent 
        myAge={34} 
        ageOfMyFriend={25} 
    />,
    document.getElementById('app')
)
