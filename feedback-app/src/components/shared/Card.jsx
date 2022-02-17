import React from 'react'

function Card({children, reverse}) {
  return (
    <div className={ `card ${reverse && "reverse"}`}>{children}</div>   //conditional classes

    // <div className="card" style={{
    //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : "#fff",          // conditional styles
    //     color: reverse ? '#fff' : "#000"
    // }}>{children}</div>
  )
}

export default Card