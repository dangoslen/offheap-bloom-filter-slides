// example Layout.js
import React from 'react'

const Preso = ({ children }) => {
  return (
    <div
        style={{
          width: '75vw',
          height: '50vh',
        }}
    >
      <div>{children}</div>
    </div>
  )
}

export default Preso
