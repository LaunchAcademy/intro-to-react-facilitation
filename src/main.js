import React from "react"
import ReactDOM from "react-dom"

let resultString;
if (5 > 4) {
  resultString = "foo"
} else {
  resultString = "bar"
}

let onClickCallback = () => alert(resultString)

let divElement =
<div onClick={onClickCallback}>
  <p>
    { resultString }
  </p>
</div>;

// let DivComponent = () => {
//   return(
//     <div onClick={onClickCallback}>
//       <ParagraphComponent />
//     </div>
//   )
// }
//
// let ParagraphComponent = () => {
//   return(
//     <p>
//     { resultString }
//     </p>
//   )
// }

ReactDOM.render(
  divElement,
  document.getElementById('app')
)
