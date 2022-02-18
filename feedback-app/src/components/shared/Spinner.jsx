import React from 'react'
import spinner from "../assets/spinner1.gif"

function Spinner() {
  return <img src={spinner} alt="Loading..." style={{
      width: "200px",
      margin : "auto",
      display: "block"
  }}/>
}

export default Spinner