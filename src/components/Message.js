import React from "react"

const Message = (props) => {
  console.log(props)
  // logic before return
  let messageText = ""
  // let value = 118
  let value = props.numericValue
  if (value > 100) {
    messageText = <h1>my favorite number!</h1>
  } else {
    messageText = <p>boooooo</p>
  }

  return <div>{messageText}</div>
}

export default Message
