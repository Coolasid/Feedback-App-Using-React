import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor, alignC}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign: alignC
    }
    
  return (
    <header style={headerStyles}>
        <h2>{text}</h2>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
    alignC: "center"
}

export default Header

